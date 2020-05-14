'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Js_exn = require("bs-platform/lib/js/js_exn.js");

((require('isomorphic-fetch')));

function makeRequest(url) {
  return fetch(url).then((function (res) {
                    var match = res.ok;
                    if (match) {
                      return res.json();
                    } else {
                      return Js_exn.raiseError(res.statusText);
                    }
                  })).then((function (json) {
                  return Promise.resolve(/* Ok */Block.__(0, [json]));
                })).catch((function (param) {
                return Promise.resolve(/* Error */Block.__(1, ["Error in fetching data: " + url]));
              }));
}

exports.makeRequest = makeRequest;
/*  Not a pure module */
