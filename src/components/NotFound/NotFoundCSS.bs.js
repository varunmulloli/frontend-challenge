'use strict';

var Css = require("bs-css-emotion/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Theme$FincompareFrontendChallenge = require("../../core/Theme.bs.js");

var container = Curry._1(Css.style, /* :: */[
      Css.marginTop(Css.px(32)),
      /* [] */0
    ]);

var title = Curry._1(Css.style, /* :: */[
      Css.textAlign(/* center */98248149),
      /* :: */[
        Css.fontWeight(/* `num */[
              5496390,
              700
            ]),
        /* :: */[
          Css.fontSize(Css.px(42)),
          /* :: */[
            Css.marginBottom(Theme$FincompareFrontendChallenge.marginWidth),
            /* [] */0
          ]
        ]
      ]
    ]);

exports.container = container;
exports.title = title;
/* container Not a pure module */
