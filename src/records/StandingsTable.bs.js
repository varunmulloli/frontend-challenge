'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var Json_encode = require("@glennsl/bs-json/src/Json_encode.bs.js");
var StandingsLists$FincompareFrontendChallenge = require("./StandingsLists.bs.js");

function decodeStandingsTableUnsafe(json) {
  return /* record */[
          /* driverStandings */Json_decode.optional((function (param) {
                  return Json_decode.field("driverStandings", Json_decode.string, param);
                }), json),
          /* standingsLists */Json_decode.optional((function (param) {
                  return Json_decode.field("StandingsLists", StandingsLists$FincompareFrontendChallenge.decodeListOfStandingsListsUnsafe, param);
                }), json)
        ];
}

function decodeStandingsTable(json) {
  try {
    return /* Ok */Block.__(0, [decodeStandingsTableUnsafe(json)]);
  }
  catch (exn){
    return /* Error */Block.__(1, ["Error in decoding JSON to: standingsTable"]);
  }
}

function encodeStandingsTable(standingsTableItem) {
  return Json_encode.object_(/* :: */[
              /* tuple */[
                "driverStandings",
                Json_encode.nullable((function (prim) {
                        return prim;
                      }), standingsTableItem[/* driverStandings */0])
              ],
              /* :: */[
                /* tuple */[
                  "StandingsLists",
                  Json_encode.nullable(StandingsLists$FincompareFrontendChallenge.encodeListOfStandingsLists, standingsTableItem[/* standingsLists */1])
                ],
                /* [] */0
              ]
            ]);
}

exports.decodeStandingsTableUnsafe = decodeStandingsTableUnsafe;
exports.decodeStandingsTable = decodeStandingsTable;
exports.encodeStandingsTable = encodeStandingsTable;
/* No side effect */
