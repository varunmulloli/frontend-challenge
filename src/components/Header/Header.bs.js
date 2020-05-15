'use strict';

var React = require("react");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.js");
var Routes$FincompareFrontendChallenge = require("../../routes/Routes.bs.js");
var HeaderCSS$FincompareFrontendChallenge = require("./HeaderCSS.bs.js");

function navigateToHomePage(param) {
  return ReasonReactRouter.push(Routes$FincompareFrontendChallenge.pageURL(/* SeasonsList */0));
}

function Header(Props) {
  return React.createElement("div", {
              className: HeaderCSS$FincompareFrontendChallenge.headerContainer
            }, React.createElement("div", undefined, React.createElement("img", {
                      className: HeaderCSS$FincompareFrontendChallenge.logo,
                      title: "Go to Homepage",
                      alt: "Go to Homepage",
                      src: "/dist/f1_logo.svg",
                      onClick: (function (param) {
                          return ReasonReactRouter.push(Routes$FincompareFrontendChallenge.pageURL(/* SeasonsList */0));
                        })
                    })));
}

var make = Header;

exports.navigateToHomePage = navigateToHomePage;
exports.make = make;
/* react Not a pure module */
