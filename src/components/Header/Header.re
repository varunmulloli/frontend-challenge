let navigateToHomePage = () : unit => {
  Types.SeasonsList |> Routes.pageURL |> ReasonReactRouter.push;
};

[@react.component]
let make = () : React.element => {
  <div className=HeaderCSS.headerContainer>
    <div>
      <img 
        src="/dist/f1_logo.png" 
        onClick=(_ => navigateToHomePage()) 
        className=HeaderCSS.logo 
        alt="Go to Homepage" 
        title="Go to Homepage"
      />
    </div>
  </div>
};