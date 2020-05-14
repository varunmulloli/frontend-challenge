open Css;

let headerContainer = style([
  height(px(71)),
  background(Theme.primaryColor),
  display(`flex),
  flexDirection(`column),
  justifyContent(`center),
]);

let logo = style([
  marginLeft(Theme.marginWidth),
  cursor(`pointer),
  height(px(32)),
]);

