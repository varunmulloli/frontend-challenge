[@bs.scope "window"] [@bs.val] external encodedInitialResponses : Js.Nullable.t(Js.Json.t) = "__INITIAL_RESPONSES__";
[@bs.scope "window"] [@bs.val] external encodedInitialErrors : Js.Nullable.t(Js.Json.t) = "__INITIAL_ERRORS__";

let flattenDecodedResponses = (decodedResponses: Types.result(Responses.responses)) : (Responses.responses, option(string)) => {
  switch (decodedResponses) {
  | Belt.Result.Ok(responses) => (responses, None)
  | Belt.Result.Error(error) => (ResponsesHelper.createEmptyResponses(), Some(error))
  };
};

let flattenResponses = (maybeResponses: option(Types.result(Responses.responses))) : (Responses.responses, option(string)) => {
  switch (maybeResponses) {
  | Some(decodedResponses) => flattenDecodedResponses(decodedResponses)
  | None => (ResponsesHelper.createEmptyResponses(), None)
  };
};

let getInitialResponses = () : option(Types.result(Responses.responses)) => { 
  encodedInitialResponses 
  -> Js.Nullable.toOption 
  -> Belt.Option.map(Responses.decodeResponses);
};

let getInitialErrors = () : list(string) => { 
  encodedInitialErrors 
  -> Js.Nullable.toOption 
  -> Belt.Option.map(json => Json.Decode.(json |> list(string)))
  -> GeneralHelper.flattenOptionOfList;
};

module ClientApp = {
  [@react.component]
  let make = () => {
    let url: ReasonReactRouter.url = ReasonReactRouter.useUrl();

    let decodedInitialResponses: option(Types.result(Responses.responses)) = getInitialResponses();
    let (initialResponses: Responses.responses, responsesDecodeError: option(string)) = flattenResponses(decodedInitialResponses);

    let decodedInitialErrors: list(string) = getInitialErrors();
    let initialErrors = 
      switch (responsesDecodeError) {
      | Some(error) => [ error, ...decodedInitialErrors ]
      | None => decodedInitialErrors
      };

    React.useEffect0(() => {
      ignore([%raw "delete window.__INITIAL_RESPONSES__"]);
      ignore([%raw "delete window.__INITIAL_ERRORS__"]);
      None;
    });  

    <App initialResponses=initialResponses initialErrors=initialErrors url=url />
  };
};

ReactDOMRe.hydrateToElementWithId(<ClientApp />, "root");
