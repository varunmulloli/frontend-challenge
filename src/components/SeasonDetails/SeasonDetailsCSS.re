open Css;

let contents = style([
  marginTop(px(32)),
  marginRight(px(32)),
  marginLeft(px(32)),
  padding(px(32)),
  background(Theme.foregroundColor),
  color(Theme.textColor),
]);

let title = style([
  fontWeight(`num(700)),
  fontSize(px(42)),
  marginBottom(px(32)),
]);

let detailsTable = style([
  width(pct(100.)),
  borderCollapse(`collapse),
  borderSpacing(px(0)),
  fontSize(px(14)),
  fontWeight(`num(600)),
  selector("tr > :first-child", [
    paddingLeft(Theme.marginWidth),
  ]),
]);

let headerRow = style([
  selector("> th", [
    fontSize(px(12)),
    fontWeight(`num(400)),
    textAlign(`left),
    minWidth(px(100)),
  ]),
]);

let normalTableRow = style([
  height(px(60)),
  borderBottom(px(2),solid,Theme.backgroundColor),
  selector(":last-child", [
    borderBottom(px(0),solid,Theme.backgroundColor),
  ]),
]);

let highlightedTableRow = merge([
  normalTableRow,
  style([
    background(Theme.highlightColor),
    borderBottom(px(2),solid,Theme.foregroundColor),
  ]),
]);

let dateColumn = style([
  fontWeight(`num(400)),
]);