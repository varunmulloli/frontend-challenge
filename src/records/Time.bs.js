'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var Json_encode = require("@glennsl/bs-json/src/Json_encode.bs.js");

function decodeTimeUnsafe(json) {
  return /* record */[
          /* millis */Json_decode.optional((function (param) {
                  return Json_decode.field("millis", Json_decode.string, param);
                }), json),
          /* time */Json_decode.optional((function (param) {
                  return Json_decode.field("time", Json_decode.string, param);
                }), json)
        ];
}

function decodeTime(json) {
  try {
    return /* Ok */Block.__(0, [decodeTimeUnsafe(json)]);
  }
  catch (exn){
    return /* Error */Block.__(1, ["Error in decoding JSON to: time"]);
  }
}

function encodeTime(timeItem) {
  return Json_encode.object_(/* :: */[
              /* tuple */[
                "millis",
                Json_encode.nullable((function (prim) {
                        return prim;
                      }), timeItem[/* millis */0])
              ],
              /* :: */[
                /* tuple */[
                  "time",
                  Json_encode.nullable((function (prim) {
                          return prim;
                        }), timeItem[/* time */1])
                ],
                /* [] */0
              ]
            ]);
}

exports.decodeTimeUnsafe = decodeTimeUnsafe;
exports.decodeTime = decodeTime;
exports.encodeTime = encodeTime;
/* No side effect */
