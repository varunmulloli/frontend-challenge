'use strict';

var Css = require("bs-css-emotion/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");

var spinnerContainer = Curry._1(Css.style, /* :: */[
      Css.textAlign(/* center */98248149),
      /* [] */0
    ]);

var spinner = Curry._1(Css.style, /* :: */[
      Css.width(Css.px(32)),
      /* [] */0
    ]);

exports.spinnerContainer = spinnerContainer;
exports.spinner = spinner;
/* spinnerContainer Not a pure module */
