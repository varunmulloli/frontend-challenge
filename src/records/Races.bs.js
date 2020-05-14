'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var Json_encode = require("@glennsl/bs-json/src/Json_encode.bs.js");
var Circuit$FincompareFrontendChallenge = require("./Circuit.bs.js");
var Results$FincompareFrontendChallenge = require("./Results.bs.js");

function decodeRacesUnsafe(json) {
  return /* record */[
          /* season */Json_decode.optional((function (param) {
                  return Json_decode.field("season", Json_decode.string, param);
                }), json),
          /* url */Json_decode.optional((function (param) {
                  return Json_decode.field("url", Json_decode.string, param);
                }), json),
          /* raceName */Json_decode.optional((function (param) {
                  return Json_decode.field("raceName", Json_decode.string, param);
                }), json),
          /* circuit */Json_decode.optional((function (param) {
                  return Json_decode.field("Circuit", Circuit$FincompareFrontendChallenge.decodeCircuitUnsafe, param);
                }), json),
          /* date */Json_decode.optional((function (param) {
                  return Json_decode.field("date", Json_decode.string, param);
                }), json),
          /* time */Json_decode.optional((function (param) {
                  return Json_decode.field("time", Json_decode.string, param);
                }), json),
          /* results */Json_decode.optional((function (param) {
                  return Json_decode.field("Results", Results$FincompareFrontendChallenge.decodeResultsListUnsafe, param);
                }), json)
        ];
}

function decodeRaces(json) {
  try {
    return /* Ok */Block.__(0, [decodeRacesUnsafe(json)]);
  }
  catch (exn){
    return /* Error */Block.__(1, ["Error in decoding JSON to: races"]);
  }
}

function encodeRaces(racesItem) {
  return Json_encode.object_(/* :: */[
              /* tuple */[
                "season",
                Json_encode.nullable((function (prim) {
                        return prim;
                      }), racesItem[/* season */0])
              ],
              /* :: */[
                /* tuple */[
                  "url",
                  Json_encode.nullable((function (prim) {
                          return prim;
                        }), racesItem[/* url */1])
                ],
                /* :: */[
                  /* tuple */[
                    "raceName",
                    Json_encode.nullable((function (prim) {
                            return prim;
                          }), racesItem[/* raceName */2])
                  ],
                  /* :: */[
                    /* tuple */[
                      "Circuit",
                      Json_encode.nullable(Circuit$FincompareFrontendChallenge.encodeCircuit, racesItem[/* circuit */3])
                    ],
                    /* :: */[
                      /* tuple */[
                        "date",
                        Json_encode.nullable((function (prim) {
                                return prim;
                              }), racesItem[/* date */4])
                      ],
                      /* :: */[
                        /* tuple */[
                          "time",
                          Json_encode.nullable((function (prim) {
                                  return prim;
                                }), racesItem[/* time */5])
                        ],
                        /* :: */[
                          /* tuple */[
                            "Results",
                            Json_encode.nullable(Results$FincompareFrontendChallenge.encodeResultsList, racesItem[/* results */6])
                          ],
                          /* [] */0
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]);
}

function decodeRacesListUnsafe(json) {
  return Json_decode.list(decodeRacesUnsafe, json);
}

function decodeRacesList(json) {
  try {
    return /* Ok */Block.__(0, [Json_decode.list(decodeRacesUnsafe, json)]);
  }
  catch (exn){
    return /* Error */Block.__(1, ["Error in decoding JSON to: list(races)"]);
  }
}

function encodeRacesList(racesList) {
  return Json_encode.list(encodeRaces, racesList);
}

exports.decodeRacesUnsafe = decodeRacesUnsafe;
exports.decodeRaces = decodeRaces;
exports.encodeRaces = encodeRaces;
exports.decodeRacesListUnsafe = decodeRacesListUnsafe;
exports.decodeRacesList = decodeRacesList;
exports.encodeRacesList = encodeRacesList;
/* No side effect */
