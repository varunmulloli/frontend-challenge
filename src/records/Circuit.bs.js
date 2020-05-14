'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var Json_encode = require("@glennsl/bs-json/src/Json_encode.bs.js");
var Location$FincompareFrontendChallenge = require("./Location.bs.js");

function decodeCircuitUnsafe(json) {
  return /* record */[
          /* circuitId */Json_decode.optional((function (param) {
                  return Json_decode.field("circuitId", Json_decode.string, param);
                }), json),
          /* url */Json_decode.optional((function (param) {
                  return Json_decode.field("url", Json_decode.string, param);
                }), json),
          /* circuitName */Json_decode.optional((function (param) {
                  return Json_decode.field("circuitName", Json_decode.string, param);
                }), json),
          /* location */Json_decode.optional((function (param) {
                  return Json_decode.field("Location", Location$FincompareFrontendChallenge.decodeLocationUnsafe, param);
                }), json)
        ];
}

function decodeCircuit(json) {
  try {
    return /* Ok */Block.__(0, [decodeCircuitUnsafe(json)]);
  }
  catch (exn){
    return /* Error */Block.__(1, ["Error in decoding JSON to: circuit"]);
  }
}

function encodeCircuit(circuitItem) {
  return Json_encode.object_(/* :: */[
              /* tuple */[
                "circuitId",
                Json_encode.nullable((function (prim) {
                        return prim;
                      }), circuitItem[/* circuitId */0])
              ],
              /* :: */[
                /* tuple */[
                  "url",
                  Json_encode.nullable((function (prim) {
                          return prim;
                        }), circuitItem[/* url */1])
                ],
                /* :: */[
                  /* tuple */[
                    "circuitName",
                    Json_encode.nullable((function (prim) {
                            return prim;
                          }), circuitItem[/* circuitName */2])
                  ],
                  /* :: */[
                    /* tuple */[
                      "Location",
                      Json_encode.nullable(Location$FincompareFrontendChallenge.encodeLocation, circuitItem[/* location */3])
                    ],
                    /* [] */0
                  ]
                ]
              ]
            ]);
}

exports.decodeCircuitUnsafe = decodeCircuitUnsafe;
exports.decodeCircuit = decodeCircuit;
exports.encodeCircuit = encodeCircuit;
/* No side effect */
