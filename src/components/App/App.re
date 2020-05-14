[@react.component]
let make = (~initialState: State.state, ~initialErrors: Types.errors, ~url: ReasonReactRouter.url) => {  
  let initialReducerState: Reducer.state = Reducer.createInitialReducerState(initialState, initialErrors);
  let (rState: Reducer.state, dispatch: Reducer.action => unit) = React.useReducer(Reducer.reducer, initialReducerState);

  let page: Types.page = Routes.getPageForUrl(url);
  let component: (Reducer.state, Reducer.action => unit) => React.element = RouteComponent.componentToRender(page);
 
  <div className=AppCss.contents>
    <Header />
    { component(rState, dispatch) }
  </div>
};