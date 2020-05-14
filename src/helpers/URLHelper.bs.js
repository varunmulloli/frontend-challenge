'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Express = require("bs-express/src/Express.js");

function extractURL(req) {
  var path = List.filter((function (i) {
            return i !== "";
          }))($$Array.to_list(Express.$$Request.path(req).split("/")));
  var originalUrl = Express.$$Request.originalUrl(req);
  var index = originalUrl.indexOf("?");
  var queryParams = index !== -1 ? originalUrl.slice(index + 1 | 0, originalUrl.length) : "";
  return /* record */[
          /* path */path,
          /* hash */"",
          /* search */queryParams
        ];
}

exports.extractURL = extractURL;
/* Express Not a pure module */
