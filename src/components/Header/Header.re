let navigateToHomePage = () : unit => {
  Types.SeasonsList |> Routes.pageURL |> ReasonReactRouter.push;
};

[@react.component]
let make = () : React.element => {
  <div className=HeaderCSS.headerContainer>
    <div className=HeaderCSS.logo>
      <img src="/dist/f1_logo.svg" onClick=(_ => navigateToHomePage())/>
    </div>
  </div>
};