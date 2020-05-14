'use strict';

var React = require("react");
var NotFoundCSS$FincompareFrontendChallenge = require("./NotFoundCSS.bs.js");

function NotFound(Props) {
  return React.createElement("div", {
              className: NotFoundCSS$FincompareFrontendChallenge.container
            }, React.createElement("div", {
                  className: NotFoundCSS$FincompareFrontendChallenge.title
                }, "404 Not Found"));
}

var make = NotFound;

exports.make = make;
/* react Not a pure module */
