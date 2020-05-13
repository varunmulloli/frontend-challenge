[@react.component]
let make = (~initialState: option(State.state), ~initialErrors: list(string), ~url: ReasonReactRouter.url) => {
  let page: Types.page = Routes.getPage(url);
  let component: (option(State.state), list(string)) => React.element = RouteComponent.componentToRender(page);

  <div className=AppCss.contents>
    <Header />
    <div>
      { component(initialState, initialErrors) }
    </div>
  </div>
};