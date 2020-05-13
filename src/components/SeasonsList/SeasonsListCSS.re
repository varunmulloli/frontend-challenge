open Css;

let contents = style([
  marginRight(px(32)),
  marginLeft(px(32)),
  padding(px(32)),
  fontFamily(`custom(Theme.titilliumWeb)),
  color(Theme.textColor),
]);

let title = style([
  fontWeight(`num(700)),
  fontSize(px(42)),
  marginBottom(Theme.marginWidth),
]);

let seasonRow = style([
  display(`flex),
  height(px(40)),
  background(Theme.foregroundColor),
  borderRadius(Theme.borderRadius),
  marginBottom(px(2)),
  paddingTop(Theme.paddingWidth),
  paddingBottom(Theme.paddingWidth),
  paddingLeft(Theme.marginWidth),
  paddingRight(Theme.marginWidth),
  cursor(`pointer),
  hover([
    background(Theme.hoverColor),
    color(Theme.textInvertedColor),
    selector(" > i" , [
      borderRight(px(2), solid, Theme.foregroundColor),
      borderBottom(px(2), solid, Theme.foregroundColor),
    ]),
  ]),
]);

let seasonRowContents = style([
  marginTop(`auto),
  marginBottom(`auto),
  marginLeft(Theme.marginWidth),
  fontSize(px(18)),
]);

let seasonYear = merge([
  seasonRowContents,
  style([
    fontWeight(`num(700)),
  ]),
]);

let separator = merge([
  seasonRowContents,
  style([
    width(px(4)),
    height(px(14)),
    background(Theme.textColor),
  ]),
]);

let driverGivenName = seasonRowContents;

let driverFamilyName = merge([
  seasonRowContents,
  style([
    marginLeft(px(4)),
    fontWeight(`num(700)),
  ]),
]);

let car = merge([
  seasonRowContents,
  style([
    fontSize(px(14)),
    fontWeight(`num(400)),
    color(Theme.textSecondaryColor),
  ]),
]);

let points = merge([
  seasonRowContents,
  style([
    borderRadius(px(15)),
    fontSize(px(14)),
    fontWeight(`num(600)),
    color(Theme.textColor),
    paddingTop(px(2)),
    paddingBottom(px(2)),
    paddingLeft(Theme.paddingWidth),
    paddingRight(Theme.paddingWidth),
    background(Theme.backgroundColor2),
  ]),
]);

let icon = merge([
  seasonRowContents,
  style([
    borderRight(px(2), solid, Theme.primaryColor),
    borderBottom(px(2), solid, Theme.primaryColor),
    width(px(8)),
    height(px(8)),
    transform(rotate(deg(-45.0))),
  ]),
]);