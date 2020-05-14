'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var Json_encode = require("@glennsl/bs-json/src/Json_encode.bs.js");
var DriverStandings$FincompareFrontendChallenge = require("./DriverStandings.bs.js");

function decodeStandingsListsUnsafe(json) {
  return /* record */[
          /* season */Json_decode.optional((function (param) {
                  return Json_decode.field("season", Json_decode.string, param);
                }), json),
          /* round */Json_decode.optional((function (param) {
                  return Json_decode.field("round", Json_decode.string, param);
                }), json),
          /* driverStandings */Json_decode.optional((function (param) {
                  return Json_decode.field("DriverStandings", DriverStandings$FincompareFrontendChallenge.decodeDriverStandingsListUnsafe, param);
                }), json)
        ];
}

function decodeStandingsLists(json) {
  try {
    return /* Ok */Block.__(0, [decodeStandingsListsUnsafe(json)]);
  }
  catch (exn){
    return /* Error */Block.__(1, ["Error in decoding JSON to: standingsLists"]);
  }
}

function encodeStandingsLists(standingsListsItem) {
  return Json_encode.object_(/* :: */[
              /* tuple */[
                "season",
                Json_encode.nullable((function (prim) {
                        return prim;
                      }), standingsListsItem[/* season */0])
              ],
              /* :: */[
                /* tuple */[
                  "round",
                  Json_encode.nullable((function (prim) {
                          return prim;
                        }), standingsListsItem[/* round */1])
                ],
                /* :: */[
                  /* tuple */[
                    "DriverStandings",
                    Json_encode.nullable(DriverStandings$FincompareFrontendChallenge.encodeDriverStandingsList, standingsListsItem[/* driverStandings */2])
                  ],
                  /* [] */0
                ]
              ]
            ]);
}

function decodeListOfStandingsListsUnsafe(json) {
  return Json_decode.list(decodeStandingsListsUnsafe, json);
}

function decodeListOfStandingsLists(json) {
  try {
    return /* Ok */Block.__(0, [Json_decode.list(decodeStandingsListsUnsafe, json)]);
  }
  catch (exn){
    return /* Error */Block.__(1, ["Error in decoding JSON to: list(standingsLists)"]);
  }
}

function encodeListOfStandingsLists(listOfStandingsList) {
  return Json_encode.list(encodeStandingsLists, listOfStandingsList);
}

exports.decodeStandingsListsUnsafe = decodeStandingsListsUnsafe;
exports.decodeStandingsLists = decodeStandingsLists;
exports.encodeStandingsLists = encodeStandingsLists;
exports.decodeListOfStandingsListsUnsafe = decodeListOfStandingsListsUnsafe;
exports.decodeListOfStandingsLists = decodeListOfStandingsLists;
exports.encodeListOfStandingsLists = encodeListOfStandingsLists;
/* No side effect */
