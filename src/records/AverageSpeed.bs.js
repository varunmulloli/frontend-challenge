'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var Json_encode = require("@glennsl/bs-json/src/Json_encode.bs.js");

function decodeAverageSpeedUnsafe(json) {
  return /* record */[
          /* units */Json_decode.optional((function (param) {
                  return Json_decode.field("units", Json_decode.string, param);
                }), json),
          /* speed */Json_decode.optional((function (param) {
                  return Json_decode.field("speed", Json_decode.string, param);
                }), json)
        ];
}

function decodeAverageSpeed(json) {
  try {
    return /* Ok */Block.__(0, [decodeAverageSpeedUnsafe(json)]);
  }
  catch (exn){
    return /* Error */Block.__(1, ["Error in decoding JSON to: averageSpeed"]);
  }
}

function encodeAverageSpeed(averageSpeedItem) {
  return Json_encode.object_(/* :: */[
              /* tuple */[
                "units",
                Json_encode.nullable((function (prim) {
                        return prim;
                      }), averageSpeedItem[/* units */0])
              ],
              /* :: */[
                /* tuple */[
                  "speed",
                  Json_encode.nullable((function (prim) {
                          return prim;
                        }), averageSpeedItem[/* speed */1])
                ],
                /* [] */0
              ]
            ]);
}

exports.decodeAverageSpeedUnsafe = decodeAverageSpeedUnsafe;
exports.decodeAverageSpeed = decodeAverageSpeed;
exports.encodeAverageSpeed = encodeAverageSpeed;
/* No side effect */
