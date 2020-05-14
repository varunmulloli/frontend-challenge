'use strict';

var React = require("react");
var Belt_MapInt = require("bs-platform/lib/js/belt_MapInt.js");
var NotFound$FincompareFrontendChallenge = require("../components/NotFound/NotFound.bs.js");
var SeasonsList$FincompareFrontendChallenge = require("../components/SeasonsList/SeasonsList.bs.js");
var SeasonDetails$FincompareFrontendChallenge = require("../components/SeasonDetails/SeasonDetails.bs.js");

function renderSeasonsList(state, dispatch) {
  return React.createElement(SeasonsList$FincompareFrontendChallenge.make, {
              dispatch: dispatch,
              seasonsListData: state[/* seasonsList */0]
            });
}

function renderSeasonDetails(season, state, dispatch) {
  var seasonDetails = Belt_MapInt.get(state[/* seasonDetails */1], season);
  return React.createElement(SeasonDetails$FincompareFrontendChallenge.make, {
              dispatch: dispatch,
              seasonDetailsData: seasonDetails
            });
}

function componentToRender(page) {
  if (typeof page === "number") {
    if (page !== 0) {
      return (function (param, param$1) {
          return React.createElement(NotFound$FincompareFrontendChallenge.make, { });
        });
    } else {
      return renderSeasonsList;
    }
  } else {
    var partial_arg = page[0];
    return (function (param, param$1) {
        return renderSeasonDetails(partial_arg, param, param$1);
      });
  }
}

exports.renderSeasonsList = renderSeasonsList;
exports.renderSeasonDetails = renderSeasonDetails;
exports.componentToRender = componentToRender;
/* react Not a pure module */
