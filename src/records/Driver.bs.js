'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var Json_encode = require("@glennsl/bs-json/src/Json_encode.bs.js");

function decodeDriverUnsafe(json) {
  return /* record */[
          /* driverId */Json_decode.optional((function (param) {
                  return Json_decode.field("driverId", Json_decode.string, param);
                }), json),
          /* permanentNumber */Json_decode.optional((function (param) {
                  return Json_decode.field("permanentNumber", Json_decode.string, param);
                }), json),
          /* code */Json_decode.optional((function (param) {
                  return Json_decode.field("code", Json_decode.string, param);
                }), json),
          /* url */Json_decode.optional((function (param) {
                  return Json_decode.field("url", Json_decode.string, param);
                }), json),
          /* givenName */Json_decode.optional((function (param) {
                  return Json_decode.field("givenName", Json_decode.string, param);
                }), json),
          /* familyName */Json_decode.optional((function (param) {
                  return Json_decode.field("familyName", Json_decode.string, param);
                }), json),
          /* dateOfBirth */Json_decode.optional((function (param) {
                  return Json_decode.field("dateOfBirth", Json_decode.string, param);
                }), json),
          /* nationality */Json_decode.optional((function (param) {
                  return Json_decode.field("nationality", Json_decode.string, param);
                }), json)
        ];
}

function decodeDriver(json) {
  try {
    return /* Ok */Block.__(0, [decodeDriverUnsafe(json)]);
  }
  catch (exn){
    return /* Error */Block.__(1, ["Error in decoding JSON to: driver"]);
  }
}

function encodeDriver(driverItem) {
  return Json_encode.object_(/* :: */[
              /* tuple */[
                "driverId",
                Json_encode.nullable((function (prim) {
                        return prim;
                      }), driverItem[/* driverId */0])
              ],
              /* :: */[
                /* tuple */[
                  "permanentNumber",
                  Json_encode.nullable((function (prim) {
                          return prim;
                        }), driverItem[/* permanentNumber */1])
                ],
                /* :: */[
                  /* tuple */[
                    "code",
                    Json_encode.nullable((function (prim) {
                            return prim;
                          }), driverItem[/* code */2])
                  ],
                  /* :: */[
                    /* tuple */[
                      "url",
                      Json_encode.nullable((function (prim) {
                              return prim;
                            }), driverItem[/* url */3])
                    ],
                    /* :: */[
                      /* tuple */[
                        "givenName",
                        Json_encode.nullable((function (prim) {
                                return prim;
                              }), driverItem[/* givenName */4])
                      ],
                      /* :: */[
                        /* tuple */[
                          "familyName",
                          Json_encode.nullable((function (prim) {
                                  return prim;
                                }), driverItem[/* familyName */5])
                        ],
                        /* :: */[
                          /* tuple */[
                            "dateOfBirth",
                            Json_encode.nullable((function (prim) {
                                    return prim;
                                  }), driverItem[/* dateOfBirth */6])
                          ],
                          /* :: */[
                            /* tuple */[
                              "nationality",
                              Json_encode.nullable((function (prim) {
                                      return prim;
                                    }), driverItem[/* nationality */7])
                            ],
                            /* [] */0
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]);
}

exports.decodeDriverUnsafe = decodeDriverUnsafe;
exports.decodeDriver = decodeDriver;
exports.encodeDriver = encodeDriver;
/* No side effect */
