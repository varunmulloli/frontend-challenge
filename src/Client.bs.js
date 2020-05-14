'use strict';

var React = require("react");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.js");
var App$FincompareFrontendChallenge = require("./components/App/App.bs.js");
var Responses$FincompareFrontendChallenge = require("./core/Responses.bs.js");
var GeneralHelper$FincompareFrontendChallenge = require("./helpers/GeneralHelper.bs.js");
var ResponsesHelper$FincompareFrontendChallenge = require("./helpers/ResponsesHelper.bs.js");

function flattenDecodedResponses(decodedResponses) {
  if (decodedResponses.tag) {
    return /* tuple */[
            ResponsesHelper$FincompareFrontendChallenge.createEmptyResponses(/* () */0),
            decodedResponses[0]
          ];
  } else {
    return /* tuple */[
            decodedResponses[0],
            undefined
          ];
  }
}

function flattenResponses(maybeResponses) {
  if (maybeResponses !== undefined) {
    return flattenDecodedResponses(maybeResponses);
  } else {
    return /* tuple */[
            ResponsesHelper$FincompareFrontendChallenge.createEmptyResponses(/* () */0),
            undefined
          ];
  }
}

function getInitialResponses(param) {
  return Belt_Option.map(Caml_option.nullable_to_opt(window.__INITIAL_RESPONSES__), Responses$FincompareFrontendChallenge.decodeResponses);
}

function getInitialErrors(param) {
  return GeneralHelper$FincompareFrontendChallenge.flattenOptionOfList(Belt_Option.map(Caml_option.nullable_to_opt(window.__INITIAL_ERRORS__), (function (json) {
                    return Json_decode.list(Json_decode.string, json);
                  })));
}

function Client$ClientApp(Props) {
  var url = ReasonReactRouter.useUrl(undefined, /* () */0);
  var decodedInitialResponses = Belt_Option.map(Caml_option.nullable_to_opt(window.__INITIAL_RESPONSES__), Responses$FincompareFrontendChallenge.decodeResponses);
  var match = flattenResponses(decodedInitialResponses);
  var responsesDecodeError = match[1];
  var decodedInitialErrors = getInitialErrors(/* () */0);
  var initialErrors = responsesDecodeError !== undefined ? /* :: */[
      responsesDecodeError,
      decodedInitialErrors
    ] : decodedInitialErrors;
  React.useEffect((function () {
          ((delete window.__INITIAL_RESPONSES__));
          ((delete window.__INITIAL_ERRORS__));
          return ;
        }), ([]));
  return React.createElement(App$FincompareFrontendChallenge.make, {
              initialResponses: match[0],
              initialErrors: initialErrors,
              url: url
            });
}

var ClientApp = {
  make: Client$ClientApp
};

ReactDOMRe.hydrateToElementWithId(React.createElement(Client$ClientApp, { }), "root");

exports.flattenDecodedResponses = flattenDecodedResponses;
exports.flattenResponses = flattenResponses;
exports.getInitialResponses = getInitialResponses;
exports.getInitialErrors = getInitialErrors;
exports.ClientApp = ClientApp;
/*  Not a pure module */
