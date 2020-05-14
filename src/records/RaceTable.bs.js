'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var Json_encode = require("@glennsl/bs-json/src/Json_encode.bs.js");
var Races$FincompareFrontendChallenge = require("./Races.bs.js");

function decodeRaceTableUnsafe(json) {
  return /* record */[
          /* season */Json_decode.optional((function (param) {
                  return Json_decode.field("season", Json_decode.string, param);
                }), json),
          /* position */Json_decode.optional((function (param) {
                  return Json_decode.field("position", Json_decode.string, param);
                }), json),
          /* races */Json_decode.optional((function (param) {
                  return Json_decode.field("Races", Races$FincompareFrontendChallenge.decodeRacesListUnsafe, param);
                }), json)
        ];
}

function decodeRaceTable(json) {
  try {
    return /* Ok */Block.__(0, [decodeRaceTableUnsafe(json)]);
  }
  catch (exn){
    return /* Error */Block.__(1, ["Error in decoding JSON to: raceTable"]);
  }
}

function encodeRaceTable(raceTableItem) {
  return Json_encode.object_(/* :: */[
              /* tuple */[
                "season",
                Json_encode.nullable((function (prim) {
                        return prim;
                      }), raceTableItem[/* season */0])
              ],
              /* :: */[
                /* tuple */[
                  "position",
                  Json_encode.nullable((function (prim) {
                          return prim;
                        }), raceTableItem[/* position */1])
                ],
                /* :: */[
                  /* tuple */[
                    "Races",
                    Json_encode.nullable(Races$FincompareFrontendChallenge.encodeRacesList, raceTableItem[/* races */2])
                  ],
                  /* [] */0
                ]
              ]
            ]);
}

exports.decodeRaceTableUnsafe = decodeRaceTableUnsafe;
exports.decodeRaceTable = decodeRaceTable;
exports.encodeRaceTable = encodeRaceTable;
/* No side effect */
