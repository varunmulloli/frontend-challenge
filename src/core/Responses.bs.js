'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var Json_encode = require("@glennsl/bs-json/src/Json_encode.bs.js");
var SeasonResultsResponse$FincompareFrontendChallenge = require("../records/SeasonResultsResponse.bs.js");
var StandingsTableResponse$FincompareFrontendChallenge = require("../records/StandingsTableResponse.bs.js");

function createResponses(seasonsList, seasonDetails, param) {
  return /* record */[
          /* seasonsList */seasonsList,
          /* seasonDetails */seasonDetails
        ];
}

function decodeSeasonDetailsUnsafe(json) {
  return /* record */[
          /* races */Json_decode.optional((function (param) {
                  return Json_decode.field("races", SeasonResultsResponse$FincompareFrontendChallenge.decodeResponseUnsafe, param);
                }), json),
          /* winningDriver */Json_decode.optional((function (param) {
                  return Json_decode.field("winningDriver", StandingsTableResponse$FincompareFrontendChallenge.decodeResponseUnsafe, param);
                }), json)
        ];
}

function decodeResponsesUnsafe(json) {
  return /* record */[
          /* seasonsList */Json_decode.optional((function (param) {
                  return Json_decode.field("seasonsList", StandingsTableResponse$FincompareFrontendChallenge.decodeResponseUnsafe, param);
                }), json),
          /* seasonDetails */Json_decode.optional((function (param) {
                  return Json_decode.field("seasonDetails", decodeSeasonDetailsUnsafe, param);
                }), json)
        ];
}

function decodeResponses(json) {
  try {
    return /* Ok */Block.__(0, [decodeResponsesUnsafe(json)]);
  }
  catch (exn){
    return /* Error */Block.__(1, ["Error in decoding JSON to: responses"]);
  }
}

function encodeSeasonDetails(seasonDetailsRecord) {
  return Json_encode.object_(/* :: */[
              /* tuple */[
                "winningDriver",
                Json_encode.nullable(StandingsTableResponse$FincompareFrontendChallenge.encodeResponse, seasonDetailsRecord[/* winningDriver */1])
              ],
              /* :: */[
                /* tuple */[
                  "races",
                  Json_encode.nullable(SeasonResultsResponse$FincompareFrontendChallenge.encodeResponse, seasonDetailsRecord[/* races */0])
                ],
                /* [] */0
              ]
            ]);
}

function encodeResponses(responsesRecord) {
  return Json_encode.object_(/* :: */[
              /* tuple */[
                "seasonsList",
                Json_encode.nullable(StandingsTableResponse$FincompareFrontendChallenge.encodeResponse, responsesRecord[/* seasonsList */0])
              ],
              /* :: */[
                /* tuple */[
                  "seasonDetails",
                  Json_encode.nullable(encodeSeasonDetails, responsesRecord[/* seasonDetails */1])
                ],
                /* [] */0
              ]
            ]);
}

exports.createResponses = createResponses;
exports.decodeSeasonDetailsUnsafe = decodeSeasonDetailsUnsafe;
exports.decodeResponsesUnsafe = decodeResponsesUnsafe;
exports.decodeResponses = decodeResponses;
exports.encodeSeasonDetails = encodeSeasonDetails;
exports.encodeResponses = encodeResponses;
/* No side effect */
