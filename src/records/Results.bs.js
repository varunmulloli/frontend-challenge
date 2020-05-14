'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var Json_encode = require("@glennsl/bs-json/src/Json_encode.bs.js");
var Time$FincompareFrontendChallenge = require("./Time.bs.js");
var Driver$FincompareFrontendChallenge = require("./Driver.bs.js");
var FastestLap$FincompareFrontendChallenge = require("./FastestLap.bs.js");
var Constructor$FincompareFrontendChallenge = require("./Constructor.bs.js");

function decodeResultsUnsafe(json) {
  return /* record */[
          /* number */Json_decode.optional((function (param) {
                  return Json_decode.field("number", Json_decode.string, param);
                }), json),
          /* position */Json_decode.optional((function (param) {
                  return Json_decode.field("position", Json_decode.string, param);
                }), json),
          /* positionText */Json_decode.optional((function (param) {
                  return Json_decode.field("positionText", Json_decode.string, param);
                }), json),
          /* points */Json_decode.optional((function (param) {
                  return Json_decode.field("points", Json_decode.string, param);
                }), json),
          /* driver */Json_decode.optional((function (param) {
                  return Json_decode.field("Driver", Driver$FincompareFrontendChallenge.decodeDriverUnsafe, param);
                }), json),
          /* constructor */Json_decode.optional((function (param) {
                  return Json_decode.field("Constructor", Constructor$FincompareFrontendChallenge.decodeConstructorUnsafe, param);
                }), json),
          /* grid */Json_decode.optional((function (param) {
                  return Json_decode.field("grid", Json_decode.string, param);
                }), json),
          /* laps */Json_decode.optional((function (param) {
                  return Json_decode.field("laps", Json_decode.string, param);
                }), json),
          /* status */Json_decode.optional((function (param) {
                  return Json_decode.field("status", Json_decode.string, param);
                }), json),
          /* time */Json_decode.optional((function (param) {
                  return Json_decode.field("Time", Time$FincompareFrontendChallenge.decodeTimeUnsafe, param);
                }), json),
          /* fastestLap */Json_decode.optional((function (param) {
                  return Json_decode.field("FastestLap", FastestLap$FincompareFrontendChallenge.decodeFastestLapUnsafe, param);
                }), json)
        ];
}

function decodeResults(json) {
  try {
    return /* Ok */Block.__(0, [decodeResultsUnsafe(json)]);
  }
  catch (exn){
    return /* Error */Block.__(1, ["Error in decoding JSON to: results"]);
  }
}

function encodeResults(resultsItem) {
  return Json_encode.object_(/* :: */[
              /* tuple */[
                "number",
                Json_encode.nullable((function (prim) {
                        return prim;
                      }), resultsItem[/* number */0])
              ],
              /* :: */[
                /* tuple */[
                  "position",
                  Json_encode.nullable((function (prim) {
                          return prim;
                        }), resultsItem[/* position */1])
                ],
                /* :: */[
                  /* tuple */[
                    "positionText",
                    Json_encode.nullable((function (prim) {
                            return prim;
                          }), resultsItem[/* positionText */2])
                  ],
                  /* :: */[
                    /* tuple */[
                      "points",
                      Json_encode.nullable((function (prim) {
                              return prim;
                            }), resultsItem[/* points */3])
                    ],
                    /* :: */[
                      /* tuple */[
                        "Driver",
                        Json_encode.nullable(Driver$FincompareFrontendChallenge.encodeDriver, resultsItem[/* driver */4])
                      ],
                      /* :: */[
                        /* tuple */[
                          "Constructor",
                          Json_encode.nullable(Constructor$FincompareFrontendChallenge.encodeConstructor, resultsItem[/* constructor */5])
                        ],
                        /* :: */[
                          /* tuple */[
                            "grid",
                            Json_encode.nullable((function (prim) {
                                    return prim;
                                  }), resultsItem[/* grid */6])
                          ],
                          /* :: */[
                            /* tuple */[
                              "laps",
                              Json_encode.nullable((function (prim) {
                                      return prim;
                                    }), resultsItem[/* laps */7])
                            ],
                            /* :: */[
                              /* tuple */[
                                "status",
                                Json_encode.nullable((function (prim) {
                                        return prim;
                                      }), resultsItem[/* status */8])
                              ],
                              /* :: */[
                                /* tuple */[
                                  "Time",
                                  Json_encode.nullable(Time$FincompareFrontendChallenge.encodeTime, resultsItem[/* time */9])
                                ],
                                /* :: */[
                                  /* tuple */[
                                    "FastestLap",
                                    Json_encode.nullable(FastestLap$FincompareFrontendChallenge.encodeFastestLap, resultsItem[/* fastestLap */10])
                                  ],
                                  /* [] */0
                                ]
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]);
}

function decodeResultsListUnsafe(json) {
  return Json_decode.list(decodeResultsUnsafe, json);
}

function decodeResultsList(json) {
  try {
    return /* Ok */Block.__(0, [Json_decode.list(decodeResultsUnsafe, json)]);
  }
  catch (exn){
    return /* Error */Block.__(1, ["Error in decoding JSON to: list(results)"]);
  }
}

function encodeResultsList(resultsList) {
  return Json_encode.list(encodeResults, resultsList);
}

exports.decodeResultsUnsafe = decodeResultsUnsafe;
exports.decodeResults = decodeResults;
exports.encodeResults = encodeResults;
exports.decodeResultsListUnsafe = decodeResultsListUnsafe;
exports.decodeResultsList = decodeResultsList;
exports.encodeResultsList = encodeResultsList;
/* No side effect */
