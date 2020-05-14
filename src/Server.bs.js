'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Express = require("bs-express/src/Express.js");
var Process = require("process");
var Json_encode = require("@glennsl/bs-json/src/Json_encode.bs.js");
var EmotionServer = require("emotion-server");
var Server = require("react-dom/server");
var Caml_js_exceptions = require("bs-platform/lib/js/caml_js_exceptions.js");
var App$FincompareFrontendChallenge = require("./components/App/App.bs.js");
var Routes$FincompareFrontendChallenge = require("./routes/Routes.bs.js");
var Template$FincompareFrontendChallenge = require("./core/Template.bs.js");
var Responses$FincompareFrontendChallenge = require("./core/Responses.bs.js");
var RouteData$FincompareFrontendChallenge = require("./routes/RouteData.bs.js");
var URLHelper$FincompareFrontendChallenge = require("./helpers/URLHelper.bs.js");
var ResponsesHelper$FincompareFrontendChallenge = require("./helpers/ResponsesHelper.bs.js");

var app = Express.App.make(/* () */0);

function renderHTML(res, url, responses, errors, page) {
  var component = React.createElement(App$FincompareFrontendChallenge.make, {
        initialResponses: responses,
        initialErrors: errors,
        url: url
      });
  var content = EmotionServer.renderStylesToString(Server.renderToString(component));
  var initialResponses = Responses$FincompareFrontendChallenge.encodeResponses(responses);
  var initialErrors = Json_encode.list((function (prim) {
          return prim;
        }), errors);
  var htmlContent = Template$FincompareFrontendChallenge.make(content, initialResponses, initialErrors, /* () */0);
  if (typeof page === "number" && page !== 0) {
    return Express.$$Response.sendString(htmlContent, Express.$$Response.status(/* NotFound */23)(res));
  } else {
    return Express.$$Response.sendString(htmlContent, res);
  }
}

function loadDataAndRenderHTML(_next, _req, res) {
  var url = URLHelper$FincompareFrontendChallenge.extractURL(_req);
  var page = Routes$FincompareFrontendChallenge.getPageForUrl(url);
  var dataToFetch = RouteData$FincompareFrontendChallenge.getDataToFetch(page);
  if (dataToFetch !== undefined) {
    return Curry._1(dataToFetch, /* () */0).then((function (param) {
                  return Promise.resolve(renderHTML(res, url, param[0], param[1], page));
                }));
  } else {
    return Promise.resolve(renderHTML(res, url, ResponsesHelper$FincompareFrontendChallenge.createEmptyResponses(/* () */0), /* [] */0, page));
  }
}

Express.App.useOnPath(app, "/dist", Express.Static.asMiddleware(Express.Static.make("dist/", Express.Static.defaultOptions(/* () */0))));

Express.App.useOnPath(app, "/", Express.PromiseMiddleware.from(loadDataAndRenderHTML));

function onListen(e) {
  var val;
  try {
    val = e;
  }
  catch (raw_exn){
    var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn[0] === Js_exn.$$Error) {
      console.log(exn[1]);
      Process.exit(1);
      return /* () */0;
    } else {
      throw exn;
    }
  }
  console.log("listening at localhost:" + String(3000));
  return /* () */0;
}

Express.App.listen(app, 3000, undefined, onListen, /* () */0);

var port = 3000;

exports.app = app;
exports.renderHTML = renderHTML;
exports.loadDataAndRenderHTML = loadDataAndRenderHTML;
exports.port = port;
exports.onListen = onListen;
/* app Not a pure module */
