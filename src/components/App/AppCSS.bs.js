'use strict';

var Css = require("bs-css-emotion/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Theme$FincompareFrontendChallenge = require("../../core/Theme.bs.js");

var contents = Curry._1(Css.style, /* :: */[
      Css.height(Css.pct(100)),
      /* :: */[
        Css.paddingBottom(Css.px(32)),
        /* :: */[
          Css.fontFamily(/* `custom */[
                1066567601,
                Theme$FincompareFrontendChallenge.titilliumWeb
              ]),
          /* [] */0
        ]
      ]
    ]);

exports.contents = contents;
/* contents Not a pure module */
