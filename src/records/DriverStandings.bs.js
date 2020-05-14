'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var Json_encode = require("@glennsl/bs-json/src/Json_encode.bs.js");
var Driver$FincompareFrontendChallenge = require("./Driver.bs.js");
var Constructor$FincompareFrontendChallenge = require("./Constructor.bs.js");

function decodeDriverStandingsUnsafe(json) {
  return /* record */[
          /* position */Json_decode.optional((function (param) {
                  return Json_decode.field("position", Json_decode.string, param);
                }), json),
          /* positionText */Json_decode.optional((function (param) {
                  return Json_decode.field("positionText", Json_decode.string, param);
                }), json),
          /* points */Json_decode.optional((function (param) {
                  return Json_decode.field("points", Json_decode.string, param);
                }), json),
          /* wins */Json_decode.optional((function (param) {
                  return Json_decode.field("wins", Json_decode.string, param);
                }), json),
          /* driver */Json_decode.optional((function (param) {
                  return Json_decode.field("Driver", Driver$FincompareFrontendChallenge.decodeDriverUnsafe, param);
                }), json),
          /* constructors */Json_decode.optional((function (param) {
                  return Json_decode.field("Constructors", Constructor$FincompareFrontendChallenge.decodeConstructorsUnsafe, param);
                }), json)
        ];
}

function decodeDriverStandings(json) {
  try {
    return /* Ok */Block.__(0, [decodeDriverStandingsUnsafe(json)]);
  }
  catch (exn){
    return /* Error */Block.__(1, ["Error in decoding JSON to: driverStandings"]);
  }
}

function encodeDriverStandings(driverStandingsItem) {
  return Json_encode.object_(/* :: */[
              /* tuple */[
                "position",
                Json_encode.nullable((function (prim) {
                        return prim;
                      }), driverStandingsItem[/* position */0])
              ],
              /* :: */[
                /* tuple */[
                  "positionText",
                  Json_encode.nullable((function (prim) {
                          return prim;
                        }), driverStandingsItem[/* positionText */1])
                ],
                /* :: */[
                  /* tuple */[
                    "points",
                    Json_encode.nullable((function (prim) {
                            return prim;
                          }), driverStandingsItem[/* points */2])
                  ],
                  /* :: */[
                    /* tuple */[
                      "wins",
                      Json_encode.nullable((function (prim) {
                              return prim;
                            }), driverStandingsItem[/* wins */3])
                    ],
                    /* :: */[
                      /* tuple */[
                        "Driver",
                        Json_encode.nullable(Driver$FincompareFrontendChallenge.encodeDriver, driverStandingsItem[/* driver */4])
                      ],
                      /* :: */[
                        /* tuple */[
                          "Constructors",
                          Json_encode.nullable(Constructor$FincompareFrontendChallenge.encodeConstructors, driverStandingsItem[/* constructors */5])
                        ],
                        /* [] */0
                      ]
                    ]
                  ]
                ]
              ]
            ]);
}

function decodeDriverStandingsListUnsafe(json) {
  return Json_decode.list(decodeDriverStandingsUnsafe, json);
}

function decodeDriverStandingsList(json) {
  try {
    return /* Ok */Block.__(0, [Json_decode.list(decodeDriverStandingsUnsafe, json)]);
  }
  catch (exn){
    return /* Error */Block.__(1, ["Error in decoding JSON to: list(driverStandings)"]);
  }
}

function encodeDriverStandingsList(driverStandingsList) {
  return Json_encode.list(encodeDriverStandings, driverStandingsList);
}

exports.decodeDriverStandingsUnsafe = decodeDriverStandingsUnsafe;
exports.decodeDriverStandings = decodeDriverStandings;
exports.encodeDriverStandings = encodeDriverStandings;
exports.decodeDriverStandingsListUnsafe = decodeDriverStandingsListUnsafe;
exports.decodeDriverStandingsList = decodeDriverStandingsList;
exports.encodeDriverStandingsList = encodeDriverStandingsList;
/* No side effect */
