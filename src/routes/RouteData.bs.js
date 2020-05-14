'use strict';

var F1API$FincompareFrontendChallenge = require("../api/F1API.bs.js");
var ResponsesHelper$FincompareFrontendChallenge = require("../helpers/ResponsesHelper.bs.js");

function fetchSeasonsList(param) {
  return F1API$FincompareFrontendChallenge.fetchSeasonsList(/* () */0).then(ResponsesHelper$FincompareFrontendChallenge.createResponsesFromSeasonsList);
}

function fetchSeasonDetailsAndWinner(season, param) {
  var seasonDetailsPromise = F1API$FincompareFrontendChallenge.fetchSeasonDetails(season);
  var winningDriverPromise = F1API$FincompareFrontendChallenge.fetchWinningDriverForSeason(season);
  return Promise.all(/* tuple */[
                seasonDetailsPromise,
                winningDriverPromise
              ]).then(ResponsesHelper$FincompareFrontendChallenge.createResponsesFromSeasonDetailsAndWinner);
}

function getDataToFetch(page) {
  if (typeof page === "number") {
    if (page !== 0) {
      return ;
    } else {
      return fetchSeasonsList;
    }
  } else {
    var season = page[0];
    return (function (param) {
              return fetchSeasonDetailsAndWinner(season, param);
            });
  }
}

exports.fetchSeasonsList = fetchSeasonsList;
exports.fetchSeasonDetailsAndWinner = fetchSeasonDetailsAndWinner;
exports.getDataToFetch = getDataToFetch;
/* F1API-FincompareFrontendChallenge Not a pure module */
