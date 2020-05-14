'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var AppCSS$FincompareFrontendChallenge = require("./AppCSS.bs.js");
var Errors$FincompareFrontendChallenge = require("../Errors/Errors.bs.js");
var Header$FincompareFrontendChallenge = require("../Header/Header.bs.js");
var Routes$FincompareFrontendChallenge = require("../../routes/Routes.bs.js");
var Reducer$FincompareFrontendChallenge = require("../../core/Reducer.bs.js");
var RouteComponent$FincompareFrontendChallenge = require("../../routes/RouteComponent.bs.js");

function App(Props) {
  var initialResponses = Props.initialResponses;
  var initialErrors = Props.initialErrors;
  var url = Props.url;
  var initialState = Reducer$FincompareFrontendChallenge.createInitialState(initialResponses, initialErrors);
  var match = React.useReducer(Reducer$FincompareFrontendChallenge.reducer, initialState);
  var state = match[0];
  var page = Routes$FincompareFrontendChallenge.getPageForUrl(url);
  var component = RouteComponent$FincompareFrontendChallenge.componentToRender(page);
  return React.createElement("div", {
              className: AppCSS$FincompareFrontendChallenge.contents
            }, React.createElement(Header$FincompareFrontendChallenge.make, { }), Curry._2(component, state, match[1]), React.createElement(Errors$FincompareFrontendChallenge.make, {
                  errors: state[/* errors */2]
                }));
}

var make = App;

exports.make = make;
/* react Not a pure module */
