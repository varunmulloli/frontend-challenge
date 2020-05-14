'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var Json_encode = require("@glennsl/bs-json/src/Json_encode.bs.js");

function decodeLocationUnsafe(json) {
  return /* record */[
          /* lat */Json_decode.optional((function (param) {
                  return Json_decode.field("lat", Json_decode.string, param);
                }), json),
          /* long */Json_decode.optional((function (param) {
                  return Json_decode.field("long", Json_decode.string, param);
                }), json),
          /* locality */Json_decode.optional((function (param) {
                  return Json_decode.field("locality", Json_decode.string, param);
                }), json),
          /* country */Json_decode.optional((function (param) {
                  return Json_decode.field("country", Json_decode.string, param);
                }), json)
        ];
}

function decodeLocation(json) {
  try {
    return /* Ok */Block.__(0, [decodeLocationUnsafe(json)]);
  }
  catch (exn){
    return /* Error */Block.__(1, ["Error in decoding JSON to: location"]);
  }
}

function encodeLocation(locationItem) {
  return Json_encode.object_(/* :: */[
              /* tuple */[
                "lat",
                Json_encode.nullable((function (prim) {
                        return prim;
                      }), locationItem[/* lat */0])
              ],
              /* :: */[
                /* tuple */[
                  "long",
                  Json_encode.nullable((function (prim) {
                          return prim;
                        }), locationItem[/* long */1])
                ],
                /* :: */[
                  /* tuple */[
                    "locality",
                    Json_encode.nullable((function (prim) {
                            return prim;
                          }), locationItem[/* locality */2])
                  ],
                  /* :: */[
                    /* tuple */[
                      "country",
                      Json_encode.nullable((function (prim) {
                              return prim;
                            }), locationItem[/* country */3])
                    ],
                    /* [] */0
                  ]
                ]
              ]
            ]);
}

exports.decodeLocationUnsafe = decodeLocationUnsafe;
exports.decodeLocation = decodeLocation;
exports.encodeLocation = encodeLocation;
/* No side effect */
