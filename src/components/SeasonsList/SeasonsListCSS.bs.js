'use strict';

var Css = require("bs-css-emotion/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Theme$FincompareFrontendChallenge = require("../../core/Theme.bs.js");

var contents = Curry._1(Css.style, /* :: */[
      Css.marginRight(Css.px(32)),
      /* :: */[
        Css.marginLeft(Css.px(32)),
        /* :: */[
          Css.padding(Css.px(32)),
          /* :: */[
            Css.color(Theme$FincompareFrontendChallenge.textColor),
            /* [] */0
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
          Css.marginBottom(Theme$FincompareFrontendChallenge.marginWidth),
          /* [] */0
        ]
      ]
    ]);

var seasonRow = Curry._1(Css.style, /* :: */[
      Css.display(/* flex */-1010954439),
      /* :: */[
        Css.height(Css.px(40)),
        /* :: */[
          Css.background(Theme$FincompareFrontendChallenge.foregroundColor),
          /* :: */[
            Css.borderRadius(Theme$FincompareFrontendChallenge.borderRadius),
            /* :: */[
              Css.marginBottom(Css.px(2)),
              /* :: */[
                Css.paddingTop(Theme$FincompareFrontendChallenge.paddingWidth),
                /* :: */[
                  Css.paddingBottom(Theme$FincompareFrontendChallenge.paddingWidth),
                  /* :: */[
                    Css.paddingLeft(Theme$FincompareFrontendChallenge.marginWidth),
                    /* :: */[
                      Css.paddingRight(Theme$FincompareFrontendChallenge.marginWidth),
                      /* :: */[
                        Css.cursor(/* pointer */-786317123),
                        /* :: */[
                          Css.hover(/* :: */[
                                Css.background(Theme$FincompareFrontendChallenge.hoverColor),
                                /* :: */[
                                  Css.color(Theme$FincompareFrontendChallenge.textInvertedColor),
                                  /* :: */[
                                    Css.selector(" > i", /* :: */[
                                          Css.borderRight(Css.px(2), Css.solid, Theme$FincompareFrontendChallenge.foregroundColor),
                                          /* :: */[
                                            Css.borderBottom(Css.px(2), Css.solid, Theme$FincompareFrontendChallenge.foregroundColor),
                                            /* [] */0
                                          ]
                                        ]),
                                    /* [] */0
                                  ]
                                ]
                              ]),
                          /* [] */0
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var seasonRowContents = Curry._1(Css.style, /* :: */[
      Css.marginTop(/* auto */-1065951377),
      /* :: */[
        Css.marginBottom(/* auto */-1065951377),
        /* :: */[
          Css.marginLeft(Theme$FincompareFrontendChallenge.marginWidth),
          /* :: */[
            Css.fontSize(Css.px(18)),
            /* [] */0
          ]
        ]
      ]
    ]);

var seasonYear = Curry._1(Css.merge, /* :: */[
      seasonRowContents,
      /* :: */[
        Curry._1(Css.style, /* :: */[
              Css.fontWeight(/* `num */[
                    5496390,
                    700
                  ]),
              /* [] */0
            ]),
        /* [] */0
      ]
    ]);

var separator = Curry._1(Css.merge, /* :: */[
      seasonRowContents,
      /* :: */[
        Curry._1(Css.style, /* :: */[
              Css.width(Css.px(4)),
              /* :: */[
                Css.height(Css.px(14)),
                /* :: */[
                  Css.background(Theme$FincompareFrontendChallenge.textColor),
                  /* [] */0
                ]
              ]
            ]),
        /* [] */0
      ]
    ]);

var driverFamilyName = Curry._1(Css.merge, /* :: */[
      seasonRowContents,
      /* :: */[
        Curry._1(Css.style, /* :: */[
              Css.marginLeft(Css.px(4)),
              /* :: */[
                Css.fontWeight(/* `num */[
                      5496390,
                      700
                    ]),
                /* [] */0
              ]
            ]),
        /* [] */0
      ]
    ]);

var car = Curry._1(Css.merge, /* :: */[
      seasonRowContents,
      /* :: */[
        Curry._1(Css.style, /* :: */[
              Css.fontSize(Css.px(14)),
              /* :: */[
                Css.fontWeight(/* `num */[
                      5496390,
                      400
                    ]),
                /* :: */[
                  Css.color(Theme$FincompareFrontendChallenge.textSecondaryColor),
                  /* [] */0
                ]
              ]
            ]),
        /* [] */0
      ]
    ]);

var points = Curry._1(Css.merge, /* :: */[
      seasonRowContents,
      /* :: */[
        Curry._1(Css.style, /* :: */[
              Css.borderRadius(Css.px(15)),
              /* :: */[
                Css.fontSize(Css.px(14)),
                /* :: */[
                  Css.fontWeight(/* `num */[
                        5496390,
                        600
                      ]),
                  /* :: */[
                    Css.color(Theme$FincompareFrontendChallenge.textColor),
                    /* :: */[
                      Css.paddingTop(Css.px(2)),
                      /* :: */[
                        Css.paddingBottom(Css.px(2)),
                        /* :: */[
                          Css.paddingLeft(Theme$FincompareFrontendChallenge.paddingWidth),
                          /* :: */[
                            Css.paddingRight(Theme$FincompareFrontendChallenge.paddingWidth),
                            /* :: */[
                              Css.background(Theme$FincompareFrontendChallenge.backgroundColor2),
                              /* [] */0
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]),
        /* [] */0
      ]
    ]);

var icon = Curry._1(Css.merge, /* :: */[
      seasonRowContents,
      /* :: */[
        Curry._1(Css.style, /* :: */[
              Css.borderRight(Css.px(2), Css.solid, Theme$FincompareFrontendChallenge.primaryColor),
              /* :: */[
                Css.borderBottom(Css.px(2), Css.solid, Theme$FincompareFrontendChallenge.primaryColor),
                /* :: */[
                  Css.width(Css.px(8)),
                  /* :: */[
                    Css.height(Css.px(8)),
                    /* :: */[
                      Css.transform(Css.rotate(Css.deg(-45.0))),
                      /* [] */0
                    ]
                  ]
                ]
              ]
            ]),
        /* [] */0
      ]
    ]);

var driverGivenName = seasonRowContents;

exports.contents = contents;
exports.title = title;
exports.seasonRow = seasonRow;
exports.seasonRowContents = seasonRowContents;
exports.seasonYear = seasonYear;
exports.separator = separator;
exports.driverGivenName = driverGivenName;
exports.driverFamilyName = driverFamilyName;
exports.car = car;
exports.points = points;
exports.icon = icon;
/* contents Not a pure module */
