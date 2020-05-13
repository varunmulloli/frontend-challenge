let extractURL = (req: Express.Request.t) : ReasonReactRouter.url => {
  let path: list(string) = req |> Express.Request.path |> Js.String.split("/") |> Array.to_list |> List.filter(i => i !== "");
  let originalUrl: string = Express.Request.originalUrl(req);
  let queryParams: string = switch(Js.String.indexOf("?", originalUrl)) {
    | -1 => ""
    | index => Js.String.slice(~from=index+1, ~to_=Js.String.length(originalUrl), originalUrl)
  };
  { path: path, hash: "", search: queryParams };
};