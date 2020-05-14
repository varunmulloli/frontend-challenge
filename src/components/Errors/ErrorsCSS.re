open Css;

let errorContainer = style([
  width(px(250)),
  position(`absolute),
  top(px(86)),
  right(Theme.marginWidth),

]);

let error = style([
  background(Theme.errorColor),
  color(white),
  marginBottom(Theme.marginWidth),
  padding(Theme.marginWidth),
  wordBreak(`breakAll),
]);

let errorTitle = style([
  fontWeight(`bold),
  fontSize(px(18)),
]);

let errorBody = style([
  paddingTop(Theme.paddingWidth),
]);