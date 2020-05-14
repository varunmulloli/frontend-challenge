'use strict';

var React = require("react");
var ErrorsCSS$FincompareFrontendChallenge = require("./ErrorsCSS.bs.js");
var ComponentHelper$FincompareFrontendChallenge = require("../../helpers/ComponentHelper.bs.js");

function errorComponent(index, error) {
  return React.createElement("div", {
              key: String(index),
              className: ErrorsCSS$FincompareFrontendChallenge.error
            }, React.createElement("div", {
                  className: ErrorsCSS$FincompareFrontendChallenge.errorTitle
                }, "ERROR"), React.createElement("div", {
                  className: ErrorsCSS$FincompareFrontendChallenge.errorBody
                }, error));
}

function Errors(Props) {
  var errors = Props.errors;
  return React.createElement("div", {
              className: ErrorsCSS$FincompareFrontendChallenge.errorContainer
            }, ComponentHelper$FincompareFrontendChallenge.renderList(errors, errorComponent));
}

var make = Errors;

exports.errorComponent = errorComponent;
exports.make = make;
/* react Not a pure module */
