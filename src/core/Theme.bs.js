'use strict';

var Css = require("bs-css-emotion/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");

var marginWidth = Css.px(16);

var paddingWidth = Css.px(8);

var borderRadius = Css.px(5);

var primaryColor = Css.rgb(225, 6, 0);

var backgroundColor = Css.hex("f7f4f1");

var backgroundColor2 = Css.hex("ededed");

var foregroundColor = Css.hex("ffffff");

var textColor = Css.rgb(21, 21, 30);

var textSecondaryColor = Css.rgb(103, 103, 109);

var textInvertedColor = Css.hex("ffffff");

var hoverColor = Css.hex("38383f");

var errorColor = Css.hex("a63232");

var highlightColor = Css.hex("FFFF8D");

var titilliumWeb = Css.fontFace("Titillium Web, sans-serif", /* :: */[
      Css.localUrl("Titillium Web"),
      /* [] */0
    ], Css.normal, /* `num */[
      5496390,
      400
    ], undefined, /* () */0);

var spacer = Curry._1(Css.style, /* :: */[
      Css.flexGrow(1.0),
      /* [] */0
    ]);

Curry._2(Css.$$global, "html", /* :: */[
      Css.margin(Css.px(0)),
      /* :: */[
        Css.padding(Css.px(0)),
        /* :: */[
          Css.height(Css.pct(100)),
          /* [] */0
        ]
      ]
    ]);

Curry._2(Css.$$global, "body", /* :: */[
      Css.margin(Css.px(0)),
      /* :: */[
        Css.padding(Css.px(0)),
        /* :: */[
          Css.minHeight(Css.pct(100)),
          /* :: */[
            Css.background(backgroundColor),
            /* [] */0
          ]
        ]
      ]
    ]);

exports.marginWidth = marginWidth;
exports.paddingWidth = paddingWidth;
exports.borderRadius = borderRadius;
exports.primaryColor = primaryColor;
exports.backgroundColor = backgroundColor;
exports.backgroundColor2 = backgroundColor2;
exports.foregroundColor = foregroundColor;
exports.textColor = textColor;
exports.textSecondaryColor = textSecondaryColor;
exports.textInvertedColor = textInvertedColor;
exports.hoverColor = hoverColor;
exports.errorColor = errorColor;
exports.highlightColor = highlightColor;
exports.titilliumWeb = titilliumWeb;
exports.spacer = spacer;
/* marginWidth Not a pure module */
