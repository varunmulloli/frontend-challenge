'use strict';

var Css = require("bs-css-emotion/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Theme$FincompareFrontendChallenge = require("../../core/Theme.bs.js");

var contents = Curry._1(Css.style, /* :: */[
      Css.marginTop(Css.px(32)),
      /* :: */[
        Css.marginRight(Css.px(32)),
        /* :: */[
          Css.marginLeft(Css.px(32)),
          /* :: */[
            Css.padding(Css.px(32)),
            /* :: */[
              Css.background(Theme$FincompareFrontendChallenge.foregroundColor),
              /* :: */[
                Css.color(Theme$FincompareFrontendChallenge.textColor),
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

var title = Curry._1(Css.style, /* :: */[
      Css.fontWeight(/* `num */[
            5496390,
            700
          ]),
      /* :: */[
        Css.fontSize(Css.px(42)),
        /* :: */[
          Css.marginBottom(Css.px(32)),
          /* [] */0
        ]
      ]
    ]);

var detailsTable = Curry._1(Css.style, /* :: */[
      Css.width(Css.pct(100)),
      /* :: */[
        Css.borderCollapse(/* collapse */-996847251),
        /* :: */[
          Css.borderSpacing(Css.px(0)),
          /* :: */[
            Css.fontSize(Css.px(14)),
            /* :: */[
              Css.fontWeight(/* `num */[
                    5496390,
                    600
                  ]),
              /* :: */[
                Css.selector("tr > :first-child", /* :: */[
                      Css.paddingLeft(Theme$FincompareFrontendChallenge.marginWidth),
                      /* [] */0
                    ]),
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

var headerRow = Curry._1(Css.style, /* :: */[
      Css.selector("> th", /* :: */[
            Css.fontSize(Css.px(12)),
            /* :: */[
              Css.fontWeight(/* `num */[
                    5496390,
                    400
                  ]),
              /* :: */[
                Css.textAlign(/* left */-944764921),
                /* :: */[
                  Css.minWidth(Css.px(100)),
                  /* [] */0
                ]
              ]
            ]
          ]),
      /* [] */0
    ]);

var normalTableRow = Curry._1(Css.style, /* :: */[
      Css.height(Css.px(60)),
      /* :: */[
        Css.borderBottom(Css.px(2), Css.solid, Theme$FincompareFrontendChallenge.backgroundColor),
        /* :: */[
          Css.selector(":last-child", /* :: */[
                Css.borderBottom(Css.px(0), Css.solid, Theme$FincompareFrontendChallenge.backgroundColor),
                /* [] */0
              ]),
          /* [] */0
        ]
      ]
    ]);

var highlightedTableRow = Curry._1(Css.merge, /* :: */[
      normalTableRow,
      /* :: */[
        Curry._1(Css.style, /* :: */[
              Css.background(Theme$FincompareFrontendChallenge.highlightColor),
              /* :: */[
                Css.borderBottom(Css.px(2), Css.solid, Theme$FincompareFrontendChallenge.foregroundColor),
                /* [] */0
              ]
            ]),
        /* [] */0
      ]
    ]);

var dateColumn = Curry._1(Css.style, /* :: */[
      Css.fontWeight(/* `num */[
            5496390,
            400
          ]),
      /* [] */0
    ]);

exports.contents = contents;
exports.title = title;
exports.detailsTable = detailsTable;
exports.headerRow = headerRow;
exports.normalTableRow = normalTableRow;
exports.highlightedTableRow = highlightedTableRow;
exports.dateColumn = dateColumn;
/* contents Not a pure module */
