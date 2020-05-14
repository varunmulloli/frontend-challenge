[@react.component]
let make = () : React.element => {
  <div className=SpinnerCSS.spinnerContainer>
    <img className=SpinnerCSS.spinner src="/dist/spinner.svg" alt="Loading..." title="Loading" />
  </div>
};