[@react.component]
let make = (~initialResponses: Responses.responses, ~initialErrors: Types.errors, ~url: ReasonReactRouter.url) : React.element => {  
  let initialState: Reducer.state = Reducer.createInitialState(initialResponses, initialErrors);
  let (state: Reducer.state, dispatch: Reducer.action => unit) = React.useReducer(Reducer.reducer, initialState);

  let page: Types.page = Routes.getPageForUrl(url);
  let component: (Reducer.state, Reducer.action => unit) => React.element = RouteComponent.componentToRender(page);
 
  <div className=AppCss.contents>
    <Header />
    { component(state, dispatch) }
  </div>
};