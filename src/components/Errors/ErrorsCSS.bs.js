'use strict';

var Css = require("bs-css-emotion/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Theme$FincompareFrontendChallenge = require("../../core/Theme.bs.js");

var errorContainer = Curry._1(Css.style, /* :: */[
      Css.width(Css.px(250)),
      /* :: */[
        Css.position(/* absolute */-1013592457),
        /* :: */[
          Css.top(Css.px(86)),
          /* :: */[
            Css.right(Theme$FincompareFrontendChallenge.marginWidth),
            /* [] */0
          ]
        ]
      ]
    ]);

var error = Curry._1(Css.style, /* :: */[
      Css.background(Theme$FincompareFrontendChallenge.errorColor),
      /* :: */[
        Css.color(Css.white),
        /* :: */[
          Css.marginBottom(Theme$FincompareFrontendChallenge.marginWidth),
          /* :: */[
            Css.padding(Theme$FincompareFrontendChallenge.marginWidth),
            /* :: */[
              Css.wordBreak(/* breakAll */-323760734),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var errorTitle = Curry._1(Css.style, /* :: */[
      Css.fontWeight(/* bold */-1055161979),
      /* :: */[
        Css.fontSize(Css.px(18)),
        /* [] */0
      ]
    ]);

var errorBody = Curry._1(Css.style, /* :: */[
      Css.paddingTop(Theme$FincompareFrontendChallenge.paddingWidth),
      /* [] */0
    ]);

exports.errorContainer = errorContainer;
exports.error = error;
exports.errorTitle = errorTitle;
exports.errorBody = errorBody;
/* errorContainer Not a pure module */
