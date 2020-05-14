'use strict';

var Belt_MapInt = require("bs-platform/lib/js/belt_MapInt.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Belt_Result = require("bs-platform/lib/js/belt_Result.js");
var Responses$FincompareFrontendChallenge = require("../core/Responses.bs.js");
var GeneralHelper$FincompareFrontendChallenge = require("./GeneralHelper.bs.js");

function createEmptyResponses(param) {
  return Responses$FincompareFrontendChallenge.createResponses(undefined, undefined, /* () */0);
}

function flattenResponsesResult(result) {
  if (result.tag) {
    return /* tuple */[
            Responses$FincompareFrontendChallenge.createResponses(undefined, undefined, /* () */0),
            /* :: */[
              result[0],
              /* [] */0
            ]
          ];
  } else {
    return /* tuple */[
            result[0],
            /* [] */0
          ];
  }
}

function createResponsesFromSeasonsList(seasonsListResult) {
  return Promise.resolve(flattenResponsesResult(Belt_Result.map(seasonsListResult, (function (seasonsList) {
                        return Responses$FincompareFrontendChallenge.createResponses(seasonsList, undefined, /* () */0);
                      }))));
}

function createSeasonDetails(races, winningDriver) {
  return /* record */[
          /* races */races,
          /* winningDriver */winningDriver
        ];
}

function createResponsesFromSeasonDetailsAndWinner(param) {
  var winner = param[1];
  var details = param[0];
  var seasonDetailsUIData;
  if (details.tag) {
    var error = details[0];
    seasonDetailsUIData = winner.tag ? /* tuple */[
        /* record */[
          /* races */undefined,
          /* winningDriver */undefined
        ],
        /* :: */[
          error,
          /* :: */[
            winner[0],
            /* [] */0
          ]
        ]
      ] : /* tuple */[
        /* record */[
          /* races */undefined,
          /* winningDriver */winner[0]
        ],
        /* :: */[
          error,
          /* [] */0
        ]
      ];
  } else {
    var races = details[0];
    seasonDetailsUIData = winner.tag ? /* tuple */[
        /* record */[
          /* races */races,
          /* winningDriver */undefined
        ],
        /* :: */[
          winner[0],
          /* [] */0
        ]
      ] : /* tuple */[
        /* record */[
          /* races */races,
          /* winningDriver */winner[0]
        ],
        /* [] */0
      ];
  }
  return Promise.resolve(/* tuple */[
              Responses$FincompareFrontendChallenge.createResponses(undefined, seasonDetailsUIData[0], /* () */0),
              seasonDetailsUIData[1]
            ]);
}

function addToSeasonDetailsMap(currentMap, seasonDetailsInfo) {
  if (seasonDetailsInfo !== undefined) {
    var seasonDetails = seasonDetailsInfo;
    var season = Belt_Option.flatMap(Belt_Option.flatMap(Belt_Option.flatMap(Belt_Option.flatMap(seasonDetails[/* races */0], (function (response) {
                        return response[/* mrdata */0];
                      })), (function (mrdata) {
                    return mrdata[/* raceTable */6];
                  })), (function (raceTable) {
                return raceTable[/* season */0];
              })), GeneralHelper$FincompareFrontendChallenge.$$parseInt);
    if (season !== undefined) {
      return Belt_MapInt.set(currentMap, season, seasonDetails);
    } else {
      return currentMap;
    }
  } else {
    return currentMap;
  }
}

exports.createEmptyResponses = createEmptyResponses;
exports.flattenResponsesResult = flattenResponsesResult;
exports.createResponsesFromSeasonsList = createResponsesFromSeasonsList;
exports.createSeasonDetails = createSeasonDetails;
exports.createResponsesFromSeasonDetailsAndWinner = createResponsesFromSeasonDetailsAndWinner;
exports.addToSeasonDetailsMap = addToSeasonDetailsMap;
/* No side effect */
