'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var Json_encode = require("@glennsl/bs-json/src/Json_encode.bs.js");
var Time$FincompareFrontendChallenge = require("./Time.bs.js");
var AverageSpeed$FincompareFrontendChallenge = require("./AverageSpeed.bs.js");

function decodeFastestLapUnsafe(json) {
  return /* record */[
          /* rank */Json_decode.optional((function (param) {
                  return Json_decode.field("rank", Json_decode.string, param);
                }), json),
          /* lap */Json_decode.optional((function (param) {
                  return Json_decode.field("lap", Json_decode.string, param);
                }), json),
          /* time */Json_decode.optional((function (param) {
                  return Json_decode.field("Time", Time$FincompareFrontendChallenge.decodeTimeUnsafe, param);
                }), json),
          /* averageSpeed */Json_decode.optional((function (param) {
                  return Json_decode.field("AverageSpeed", AverageSpeed$FincompareFrontendChallenge.decodeAverageSpeedUnsafe, param);
                }), json)
        ];
}

function decodeFastestLap(json) {
  try {
    return /* Ok */Block.__(0, [decodeFastestLapUnsafe(json)]);
  }
  catch (exn){
    return /* Error */Block.__(1, ["Error in decoding JSON to: fastestLap"]);
  }
}

function encodeFastestLap(fastestLapItem) {
  return Json_encode.object_(/* :: */[
              /* tuple */[
                "rank",
                Json_encode.nullable((function (prim) {
                        return prim;
                      }), fastestLapItem[/* rank */0])
              ],
              /* :: */[
                /* tuple */[
                  "lap",
                  Json_encode.nullable((function (prim) {
                          return prim;
                        }), fastestLapItem[/* lap */1])
                ],
                /* :: */[
                  /* tuple */[
                    "Time",
                    Json_encode.nullable(Time$FincompareFrontendChallenge.encodeTime, fastestLapItem[/* time */2])
                  ],
                  /* :: */[
                    /* tuple */[
                      "AverageSpeed",
                      Json_encode.nullable(AverageSpeed$FincompareFrontendChallenge.encodeAverageSpeed, fastestLapItem[/* averageSpeed */3])
                    ],
                    /* [] */0
                  ]
                ]
              ]
            ]);
}

exports.decodeFastestLapUnsafe = decodeFastestLapUnsafe;
exports.decodeFastestLap = decodeFastestLap;
exports.encodeFastestLap = encodeFastestLap;
/* No side effect */
