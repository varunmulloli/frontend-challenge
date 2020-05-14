'use strict';

var React = require("react");
var SpinnerCSS$FincompareFrontendChallenge = require("./SpinnerCSS.bs.js");

function Spinner(Props) {
  return React.createElement("div", {
              className: SpinnerCSS$FincompareFrontendChallenge.spinnerContainer
            }, React.createElement("img", {
                  className: SpinnerCSS$FincompareFrontendChallenge.spinner,
                  title: "Loading",
                  alt: "Loading...",
                  src: "/dist/spinner.svg"
                }));
}

var make = Spinner;

exports.make = make;
/* react Not a pure module */
