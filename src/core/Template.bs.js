'use strict';

var SerializeJavascript = require("serialize-javascript");

function make(content, initialResponses, initialErrors, param) {
  var serializedInitialResponses = SerializeJavascript(initialResponses, /* record */[/* isJSON */true]);
  var serializedInitialErrors = SerializeJavascript(initialErrors, /* record */[/* isJSON */true]);
  return "\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>Formula 1</title>\n        <link rel=\"shortcut icon\" type=\"image/png\" href=\"/dist/favicon.ico\">\n        <link href=\"https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600;700&display=swap\" rel=\"stylesheet\">\n        <script>\n          window.__INITIAL_RESPONSES__ = " + (String(serializedInitialResponses) + (";\n          window.__INITIAL_ERRORS__ = " + (String(serializedInitialErrors) + (";\n        </script>\n      </head>\n      <body>\n        <div id=\"root\">" + (String(content) + "</div>\n        <script src=\"/dist/client.js\" defer></script>\n      </body>\n    </html>\n  ")))));
}

exports.make = make;
/* serialize-javascript Not a pure module */
