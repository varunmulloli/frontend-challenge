'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Routes$FincompareFrontendChallenge = require("../routes/Routes.bs.js");
var RouteData$FincompareFrontendChallenge = require("../routes/RouteData.bs.js");

function renderList(listOfItems, component) {
  return $$Array.of_list(List.mapi(component, listOfItems));
}

function fetchDataAndDispatch(url, dispatchAction, setLoading) {
  var performDispatchAction = function (param) {
    Curry._2(dispatchAction, param[0], param[1]);
    Curry._1(setLoading, (function (param) {
            return /* Loaded */1;
          }));
    return Promise.resolve(/* () */0);
  };
  var page = Routes$FincompareFrontendChallenge.getPageForUrl(url);
  var dataToFetch = RouteData$FincompareFrontendChallenge.getDataToFetch(page);
  if (dataToFetch !== undefined) {
    var fetchData = dataToFetch;
    Curry._1(setLoading, (function (param) {
            return /* Loading */0;
          }));
    return Curry._1(fetchData, /* () */0).then(performDispatchAction);
  } else {
    return Promise.resolve(/* () */0);
  }
}

exports.renderList = renderList;
exports.fetchDataAndDispatch = fetchDataAndDispatch;
/* RouteData-FincompareFrontendChallenge Not a pure module */
