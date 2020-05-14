type dispatchAction = (State.state, Types.errors) => unit;
type setLoading = Types.setState(Types.uiDataState);

let renderList = (listOfItems: list('a), component: (int, 'a) => React.element) : React.element => {
  listOfItems |> List.mapi(component) |> Array.of_list |> ReasonReact.array;
};

let fetchDataAndDispatch = (url: ReasonReactRouter.url, dispatchAction: dispatchAction, setLoading: setLoading) : Js.Promise.t(unit) => {
  let performDispatchAction = ((state: State.state, errors: Types.errors)) : Js.Promise.t(unit) => {
    ignore(dispatchAction(state, errors));
    ignore(setLoading(_ => Types.Loaded));
    Js.Promise.resolve();
  };

  let fetchDataAndSetComponentState = (fetchData: unit => Js.Promise.t(Types.uidata(State.state))) : Js.Promise.t(unit) => {
    ignore(setLoading(_ => Types.Loading));
    fetchData() |> Js.Promise.then_(performDispatchAction);
  };

  let page: Types.page = Routes.getPageForUrl(url);
  let dataToFetch: option(unit => Js.Promise.t(Types.uidata(State.state))) = RouteData.getDataToFetch(page);

  switch (dataToFetch) {
  | Some(fetchData) => fetchDataAndSetComponentState(fetchData)
  | None => Js.Promise.resolve()
  };
};