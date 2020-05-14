'use strict';

var List = require("bs-platform/lib/js/list.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");

function $$parseInt(s) {
  try {
    return Caml_format.caml_int_of_string(s);
  }
  catch (exn){
    return ;
  }
}

function flattenOptionOfList(o) {
  if (o !== undefined) {
    return o;
  } else {
    return /* [] */0;
  }
}

function flattenListOfOption(l) {
  return List.fold_left((function (agg, next) {
                if (next !== undefined) {
                  return /* :: */[
                          Caml_option.valFromOption(next),
                          agg
                        ];
                } else {
                  return agg;
                }
              }), /* [] */0, l);
}

function joinListOfString(separator, l) {
  if (l) {
    var tail = l[1];
    var tail$1 = l[0];
    if (tail) {
      return tail$1 + (separator + joinListOfString(separator, tail));
    } else {
      return tail$1;
    }
  } else {
    return "";
  }
}

exports.$$parseInt = $$parseInt;
exports.flattenOptionOfList = flattenOptionOfList;
exports.flattenListOfOption = flattenListOfOption;
exports.joinListOfString = joinListOfString;
/* No side effect */
