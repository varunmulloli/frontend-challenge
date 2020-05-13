open Css;

let marginWidth = px(16);
let paddingWidth = px(8);
let borderRadius = px(5);

let primaryColor = rgb(225,6,0);
let backgroundColor = hex("f7f4f1");
let backgroundColor2 = hex("ededed");
let foregroundColor = hex("ffffff");
let textColor = rgb(21,21,30);
let textSecondaryColor = rgb(103,103,109);
let textInvertedColor = hex("ffffff");
let hoverColor = hex("38383f");

let titilliumWeb = fontFace(
  ~fontFamily="Titillium Web, sans-serif",
  ~src=[localUrl("Titillium Web")],
  ~fontStyle=normal,
  ~fontWeight=`num(500),
  (),
);

let spacer = style([
  flexGrow(1.0),
]);

global("body", [
  margin(px(0)),
]);
