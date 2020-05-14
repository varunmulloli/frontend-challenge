'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var Json_encode = require("@glennsl/bs-json/src/Json_encode.bs.js");

function decodeConstructorUnsafe(json) {
  return /* record */[
          /* constructorId */Json_decode.optional((function (param) {
                  return Json_decode.field("constructorId", Json_decode.string, param);
                }), json),
          /* url */Json_decode.optional((function (param) {
                  return Json_decode.field("url", Json_decode.string, param);
                }), json),
          /* name */Json_decode.optional((function (param) {
                  return Json_decode.field("name", Json_decode.string, param);
                }), json),
          /* nationality */Json_decode.optional((function (param) {
                  return Json_decode.field("nationality", Json_decode.string, param);
                }), json)
        ];
}

function decodeConstructor(json) {
  try {
    return /* Ok */Block.__(0, [decodeConstructorUnsafe(json)]);
  }
  catch (exn){
    return /* Error */Block.__(1, ["Error in decoding JSON to: constructor"]);
  }
}

function encodeConstructor(constructorItem) {
  return Json_encode.object_(/* :: */[
              /* tuple */[
                "constructorId",
                Json_encode.nullable((function (prim) {
                        return prim;
                      }), constructorItem[/* constructorId */0])
              ],
              /* :: */[
                /* tuple */[
                  "url",
                  Json_encode.nullable((function (prim) {
                          return prim;
                        }), constructorItem[/* url */1])
                ],
                /* :: */[
                  /* tuple */[
                    "name",
                    Json_encode.nullable((function (prim) {
                            return prim;
                          }), constructorItem[/* name */2])
                  ],
                  /* :: */[
                    /* tuple */[
                      "nationality",
                      Json_encode.nullable((function (prim) {
                              return prim;
                            }), constructorItem[/* nationality */3])
                    ],
                    /* [] */0
                  ]
                ]
              ]
            ]);
}

function decodeConstructorsUnsafe(json) {
  return Json_decode.list(decodeConstructorUnsafe, json);
}

function decodeConstructors(json) {
  try {
    return /* Ok */Block.__(0, [Json_decode.list(decodeConstructorUnsafe, json)]);
  }
  catch (exn){
    return /* Error */Block.__(1, ["Error in decoding JSON to: list(constructor)"]);
  }
}

function encodeConstructors(constructors) {
  return Json_encode.list(encodeConstructor, constructors);
}

exports.decodeConstructorUnsafe = decodeConstructorUnsafe;
exports.decodeConstructor = decodeConstructor;
exports.encodeConstructor = encodeConstructor;
exports.decodeConstructorsUnsafe = decodeConstructorsUnsafe;
exports.decodeConstructors = decodeConstructors;
exports.encodeConstructors = encodeConstructors;
/* No side effect */
