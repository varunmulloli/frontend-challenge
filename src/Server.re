[@bs.module "emotion-server"] external renderStylesToString : string => string = "renderStylesToString";

let app = Express.App.make();

let renderHTML = (res: Express.Response.t, url: ReasonReactRouter.url, state: State.state, errors: list(string)) : Express.complete => {
  let component: React.element = <App initialState=state initialErrors=errors url=url />;
  let content: string = component |> ReactDOMServerRe.renderToString |> renderStylesToString;
  let initialState: Js.Json.t = state |> State.encodeState;
  let initialErrors: Js.Json.t = Json.Encode.(errors |> list(string));
  let htmlContent: string = Template.make(~content, ~initialState, ~initialErrors, ());
  Express.Response.sendString(htmlContent, res);
};

let loadDataAndRenderHTML = (_next, _req, res) : Js.Promise.t(Express.complete) => {
  let url: ReasonReactRouter.url = URLHelper.extractURL(_req);
  let page: Types.page = Routes.getPageForUrl(url);
  let dataToFetch: option(unit => Js.Promise.t(Types.uidata(State.state))) = RouteData.getDataToFetch(page);

  switch(dataToFetch) {
    | Some(fetchData) => Js.Promise.(fetchData() |> then_(((state: State.state, errors: list(string))) => renderHTML(res, url, state, errors) |> resolve ))
    | None => renderHTML(res, url, State.createEmptyState(), []) |> Js.Promise.resolve
  };
};

Express.Static.defaultOptions()
|> Express.Static.make("dist/")
|> Express.Static.asMiddleware
|> Express.App.useOnPath(app, ~path="/dist");

loadDataAndRenderHTML
|> Express.PromiseMiddleware.from
|> Express.App.useOnPath(~path="/", app);

let port = 3000;

let onListen = e => switch e {
  | exception (Js.Exn.Error(e)) =>
    Js.log(e);
    Node.Process.exit(1);
  | _ => Js.log("listening at localhost:" ++ string_of_int(port))
};

Express.App.listen(app, ~onListen, ~port, ());