let pushRoute = (route: Types.page) => {
  route |> Routes.pageURL |> ReasonReactRouter.push;
};

[@react.component]
let make = () => {
  <div className=HeaderCSS.headerContainer>
    <div className=HeaderCSS.logo>
      <img src="/dist/f1_logo.svg" onClick=(_ => pushRoute(Types.SeasonsList))/>
    </div>
  </div>
};