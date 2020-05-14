'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var Json_encode = require("@glennsl/bs-json/src/Json_encode.bs.js");
var StandingsTable$FincompareFrontendChallenge = require("./StandingsTable.bs.js");

function decodeMRDataUnsafe(json) {
  return /* record */[
          /* xmlns */Json_decode.optional((function (param) {
                  return Json_decode.field("xmlns", Json_decode.string, param);
                }), json),
          /* series */Json_decode.optional((function (param) {
                  return Json_decode.field("series", Json_decode.string, param);
                }), json),
          /* url */Json_decode.optional((function (param) {
                  return Json_decode.field("url", Json_decode.string, param);
                }), json),
          /* limit */Json_decode.optional((function (param) {
                  return Json_decode.field("limit", Json_decode.string, param);
                }), json),
          /* offset */Json_decode.optional((function (param) {
                  return Json_decode.field("offset", Json_decode.string, param);
                }), json),
          /* total */Json_decode.optional((function (param) {
                  return Json_decode.field("total", Json_decode.string, param);
                }), json),
          /* standingsTable */Json_decode.optional((function (param) {
                  return Json_decode.field("StandingsTable", StandingsTable$FincompareFrontendChallenge.decodeStandingsTableUnsafe, param);
                }), json)
        ];
}

function encodeMRData(mrdataItem) {
  return Json_encode.object_(/* :: */[
              /* tuple */[
                "xmlns",
                Json_encode.nullable((function (prim) {
                        return prim;
                      }), mrdataItem[/* xmlns */0])
              ],
              /* :: */[
                /* tuple */[
                  "series",
                  Json_encode.nullable((function (prim) {
                          return prim;
                        }), mrdataItem[/* series */1])
                ],
                /* :: */[
                  /* tuple */[
                    "url",
                    Json_encode.nullable((function (prim) {
                            return prim;
                          }), mrdataItem[/* url */2])
                  ],
                  /* :: */[
                    /* tuple */[
                      "limit",
                      Json_encode.nullable((function (prim) {
                              return prim;
                            }), mrdataItem[/* limit */3])
                    ],
                    /* :: */[
                      /* tuple */[
                        "offset",
                        Json_encode.nullable((function (prim) {
                                return prim;
                              }), mrdataItem[/* offset */4])
                      ],
                      /* :: */[
                        /* tuple */[
                          "total",
                          Json_encode.nullable((function (prim) {
                                  return prim;
                                }), mrdataItem[/* total */5])
                        ],
                        /* :: */[
                          /* tuple */[
                            "StandingsTable",
                            Json_encode.nullable(StandingsTable$FincompareFrontendChallenge.encodeStandingsTable, mrdataItem[/* standingsTable */6])
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

function decodeResponseUnsafe(json) {
  return /* record */[/* mrdata */Json_decode.optional((function (param) {
                  return Json_decode.field("MRData", decodeMRDataUnsafe, param);
                }), json)];
}

function decodeResponse(json) {
  try {
    return /* Ok */Block.__(0, [decodeResponseUnsafe(json)]);
  }
  catch (exn){
    return /* Error */Block.__(1, ["Error in decoding JSON to: StandingsTableResponse"]);
  }
}

function encodeResponse(responseItem) {
  return Json_encode.object_(/* :: */[
              /* tuple */[
                "MRData",
                Json_encode.nullable(encodeMRData, responseItem[/* mrdata */0])
              ],
              /* [] */0
            ]);
}

exports.decodeMRDataUnsafe = decodeMRDataUnsafe;
exports.encodeMRData = encodeMRData;
exports.decodeResponseUnsafe = decodeResponseUnsafe;
exports.decodeResponse = decodeResponse;
exports.encodeResponse = encodeResponse;
/* No side effect */
