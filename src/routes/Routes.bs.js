'use strict';

var GeneralHelper$FincompareFrontendChallenge = require("../helpers/GeneralHelper.bs.js");

var seasonURLPrefix = "season";

var notFoundURLPrefix = "404";

function pageURL(p) {
  if (typeof p === "number") {
    if (p !== 0) {
      return "/404";
    } else {
      return "/";
    }
  } else {
    return "/" + (seasonURLPrefix + ("/" + String(p[0])));
  }
}

function seasonPageForYear(year) {
  var match = GeneralHelper$FincompareFrontendChallenge.$$parseInt(year);
  if (match !== undefined) {
    return /* SeasonDetails */[match];
  } else {
    return /* NotFound */1;
  }
}

function getPageForUrl(url) {
  var match = url[/* path */0];
  if (match) {
    var match$1 = match[1];
    var season = match[0];
    if (match$1 && !(match$1[1] || season !== seasonURLPrefix)) {
      return seasonPageForYear(match$1[0]);
    } else {
      return /* NotFound */1;
    }
  } else {
    return /* SeasonsList */0;
  }
}

exports.seasonURLPrefix = seasonURLPrefix;
exports.notFoundURLPrefix = notFoundURLPrefix;
exports.pageURL = pageURL;
exports.seasonPageForYear = seasonPageForYear;
exports.getPageForUrl = getPageForUrl;
/* No side effect */
