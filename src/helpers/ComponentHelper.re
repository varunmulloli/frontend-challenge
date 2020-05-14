type dispatchAction = (Responses.responses, Types.errors) => unit;
type setLoading = Types.setState(Types.uiDataState);

let renderList = (listOfItems: list('a), component: (int, 'a) => React.element) : React.element => {
  listOfItems |> List.mapi(component) |> Array.of_list |> ReasonReact.array;
};

let fetchDataAndDispatch = (url: ReasonReactRouter.url, dispatchAction: dispatchAction, setLoading: setLoading) : Js.Promise.t(unit) => {
  let performDispatchAction = ((responses: Responses.responses, errors: Types.errors)) : Js.Promise.t(unit) => {
    ignore(dispatchAction(responses, errors));
    ignore(setLoading(_ => Types.Loaded));
    Js.Promise.resolve();
  };

  let performFetchDataAndDispatchAction = (fetchData: unit => Js.Promise.t(Types.uidata(Responses.responses))) : Js.Promise.t(unit) => {
    ignore(setLoading(_ => Types.Loading));
    fetchData() |> Js.Promise.then_(performDispatchAction);
  };

  let page: Types.page = Routes.getPageForUrl(url);
  let dataToFetch: option(unit => Js.Promise.t(Types.uidata(Responses.responses))) = RouteData.getDataToFetch(page);

  switch (dataToFetch) {
  | Some(fetchData) => performFetchDataAndDispatchAction(fetchData)
  | None => Js.Promise.resolve()
  };
};