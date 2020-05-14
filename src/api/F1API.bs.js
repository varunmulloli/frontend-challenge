'use strict';

var Belt_Result = require("bs-platform/lib/js/belt_Result.js");
var APIHelper$FincompareFrontendChallenge = require("../helpers/APIHelper.bs.js");
var SeasonResultsResponse$FincompareFrontendChallenge = require("../records/SeasonResultsResponse.bs.js");
var StandingsTableResponse$FincompareFrontendChallenge = require("../records/StandingsTableResponse.bs.js");

var baseURL = "https://ergast.com/api/f1";

function decodeStandingsTableResponse(json) {
  return Promise.resolve(Belt_Result.flatMap(json, StandingsTableResponse$FincompareFrontendChallenge.decodeResponse));
}

function decodeSeasonResultsResponse(json) {
  return Promise.resolve(Belt_Result.flatMap(json, SeasonResultsResponse$FincompareFrontendChallenge.decodeResponse));
}

function fetchSeasonsList(param) {
  return APIHelper$FincompareFrontendChallenge.makeRequest("https://ergast.com/api/f1/driverstandings/1.json?limit=11&offset=55").then(decodeStandingsTableResponse);
}

function fetchSeasonDetails(season) {
  return APIHelper$FincompareFrontendChallenge.makeRequest(baseURL + ("/" + (String(season) + "/results/1.json"))).then(decodeSeasonResultsResponse);
}

function fetchWinningDriverForSeason(season) {
  return APIHelper$FincompareFrontendChallenge.makeRequest(baseURL + ("/" + (String(season) + "/driverstandings/1.json"))).then(decodeStandingsTableResponse);
}

exports.baseURL = baseURL;
exports.decodeStandingsTableResponse = decodeStandingsTableResponse;
exports.decodeSeasonResultsResponse = decodeSeasonResultsResponse;
exports.fetchSeasonsList = fetchSeasonsList;
exports.fetchSeasonDetails = fetchSeasonDetails;
exports.fetchWinningDriverForSeason = fetchWinningDriverForSeason;
/* APIHelper-FincompareFrontendChallenge Not a pure module */
