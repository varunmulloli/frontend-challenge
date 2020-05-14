[@bs.module "emotion-server"] external renderStylesToString : string => string = "renderStylesToString";
[@bs.val] external envPort : Js.Nullable.t(string) = "process.env.PORT";

let app = Express.App.make();

let renderHTML = (res: Express.Response.t, url: ReasonReactRouter.url, responses: Responses.responses, errors: list(string), page: Types.page) : Express.complete => {
  let component: React.element = <App initialResponses=responses initialErrors=errors url=url />;
  let content: string = component |> ReactDOMServerRe.renderToString |> renderStylesToString;
  let initialResponses: Js.Json.t = responses |> Responses.encodeResponses;
  let initialErrors: Js.Json.t = Json.Encode.(errors |> list(string));
  let htmlContent: string = Template.make(~content, ~initialResponses, ~initialErrors, ());

  switch (page) {
  | Types.NotFound =>  Express.Response.(res |> status(StatusCode.NotFound) |> sendString(htmlContent))
  | _ => res |> Express.Response.sendString(htmlContent)
  };
};

let loadDataAndRenderHTML = (_next, _req, res) : Js.Promise.t(Express.complete) => {
  let url: ReasonReactRouter.url = URLHelper.extractURL(_req);
  let page: Types.page = Routes.getPageForUrl(url);
  let dataToFetch: option(unit => Js.Promise.t(Types.uidata(Responses.responses))) = RouteData.getDataToFetch(page);

  switch(dataToFetch) {
  | Some(fetchData) => Js.Promise.(fetchData() |> then_(((responses: Responses.responses, errors: list(string))) => renderHTML(res, url, responses, errors, page) |> resolve ))
  | None => renderHTML(res, url, ResponsesHelper.createEmptyResponses(), [], page) |> Js.Promise.resolve
  };
};

Express.Static.defaultOptions()
|> Express.Static.make("dist/")
|> Express.Static.asMiddleware
|> Express.App.useOnPath(app, ~path="/dist");

loadDataAndRenderHTML
|> Express.PromiseMiddleware.from
|> Express.App.useOnPath(~path="/", app);

let port = 
  switch (Js.Nullable.toOption(envPort)) {
  | Some(port) => int_of_string(port)
  | None => 3000
};

let onListen = e => switch e {
  | exception (Js.Exn.Error(e)) =>
    Js.log(e);
    Node.Process.exit(1);
  | _ => Js.log("listening at localhost:" ++ string_of_int(port))
};

Express.App.listen(app, ~onListen, ~port, ());