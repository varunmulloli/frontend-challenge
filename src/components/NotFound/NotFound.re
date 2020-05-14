[@react.component]
let make = () : React.element => {
  <div className=NotFoundCSS.container>
    <div className=NotFoundCSS.title>{ React.string("404 Not Found") }</div>
  </div>
};