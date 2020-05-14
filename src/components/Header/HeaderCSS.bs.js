'use strict';

var Css = require("bs-css-emotion/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Theme$FincompareFrontendChallenge = require("../../core/Theme.bs.js");

var headerContainer = Curry._1(Css.style, /* :: */[
      Css.height(Css.px(71)),
      /* :: */[
        Css.background(Theme$FincompareFrontendChallenge.primaryColor),
        /* :: */[
          Css.display(/* flex */-1010954439),
          /* :: */[
            Css.flexDirection(/* column */-963948842),
            /* :: */[
              Css.justifyContent(/* center */98248149),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var logo = Curry._1(Css.style, /* :: */[
      Css.marginLeft(Theme$FincompareFrontendChallenge.marginWidth),
      /* :: */[
        Css.cursor(/* pointer */-786317123),
        /* :: */[
          Css.height(Css.px(32)),
          /* [] */0
        ]
      ]
    ]);

exports.headerContainer = headerContainer;
exports.logo = logo;
/* headerContainer Not a pure module */
