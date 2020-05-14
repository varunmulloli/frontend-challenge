'use strict';

var List = require("bs-platform/lib/js/list.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.js");
var Theme$FincompareFrontendChallenge = require("../../core/Theme.bs.js");
var Routes$FincompareFrontendChallenge = require("../../routes/Routes.bs.js");
var Spinner$FincompareFrontendChallenge = require("../Spinner/Spinner.bs.js");
var GeneralHelper$FincompareFrontendChallenge = require("../../helpers/GeneralHelper.bs.js");
var SeasonsListCSS$FincompareFrontendChallenge = require("./SeasonsListCSS.bs.js");
var ComponentHelper$FincompareFrontendChallenge = require("../../helpers/ComponentHelper.bs.js");

function fetchSeasonDetailsAndOpenPage(year) {
  var maybeSeason = GeneralHelper$FincompareFrontendChallenge.$$parseInt(year);
  var pageToRender = maybeSeason !== undefined ? /* SeasonDetails */[maybeSeason] : /* NotFound */1;
  ReasonReactRouter.push(Routes$FincompareFrontendChallenge.pageURL(pageToRender));
  return /* () */0;
}

function renderSeason(index, seasonInfo) {
  var season = Belt_Option.getWithDefault(seasonInfo[/* season */0], "????");
  var driverStandingsInfo = Belt_List.head(GeneralHelper$FincompareFrontendChallenge.flattenOptionOfList(seasonInfo[/* driverStandings */2]));
  var driverInfo = Belt_Option.flatMap(driverStandingsInfo, (function (driverStandings) {
          return driverStandings[/* driver */4];
        }));
  var givenName = Belt_Option.getWithDefault(Belt_Option.flatMap(driverInfo, (function (driver) {
              return driver[/* givenName */4];
            })), "");
  var familyName = Belt_Option.getWithDefault(Belt_Option.flatMap(driverInfo, (function (driver) {
              return driver[/* familyName */5];
            })), "");
  var constructorsInfo = GeneralHelper$FincompareFrontendChallenge.flattenOptionOfList(Belt_Option.flatMap(driverStandingsInfo, (function (driverStandings) {
              return driverStandings[/* constructors */5];
            })));
  var cars = GeneralHelper$FincompareFrontendChallenge.joinListOfString(", ", GeneralHelper$FincompareFrontendChallenge.flattenListOfOption(List.map((function (constructor) {
                  return constructor[/* name */2];
                }), constructorsInfo)));
  var points = Belt_Option.getWithDefault(Belt_Option.flatMap(driverStandingsInfo, (function (driverStandings) {
              return driverStandings[/* points */2];
            })), "");
  var wins = Belt_Option.getWithDefault(Belt_Option.flatMap(driverStandingsInfo, (function (driverStandings) {
              return driverStandings[/* wins */3];
            })), "");
  return React.createElement("div", {
              key: String(index),
              className: SeasonsListCSS$FincompareFrontendChallenge.seasonRow,
              onClick: (function (param) {
                  return fetchSeasonDetailsAndOpenPage(season);
                })
            }, React.createElement("div", {
                  className: SeasonsListCSS$FincompareFrontendChallenge.seasonYear
                }, season), React.createElement("div", {
                  className: SeasonsListCSS$FincompareFrontendChallenge.separator
                }), React.createElement("div", {
                  className: SeasonsListCSS$FincompareFrontendChallenge.driverGivenName
                }, givenName), React.createElement("div", {
                  className: SeasonsListCSS$FincompareFrontendChallenge.driverFamilyName
                }, familyName), React.createElement("div", {
                  className: SeasonsListCSS$FincompareFrontendChallenge.car
                }, cars), React.createElement("div", {
                  className: Theme$FincompareFrontendChallenge.spacer
                }), React.createElement("div", {
                  className: SeasonsListCSS$FincompareFrontendChallenge.points
                }, wins + " Wins"), React.createElement("div", {
                  className: SeasonsListCSS$FincompareFrontendChallenge.points
                }, points + " PTS"), React.createElement("i", {
                  className: SeasonsListCSS$FincompareFrontendChallenge.icon
                }));
}

function renderSeasonsList(seasonsList) {
  return React.createElement(React.Fragment, undefined, React.createElement("div", {
                  className: SeasonsListCSS$FincompareFrontendChallenge.title
                }, "World Championship Winners"), ComponentHelper$FincompareFrontendChallenge.renderList(seasonsList, renderSeason));
}

function SeasonsList(Props) {
  var dispatch = Props.dispatch;
  var seasonsListData = Props.seasonsListData;
  var url = ReasonReactRouter.useUrl(undefined, /* () */0);
  var dispatchAction = function (responses, errors) {
    return Curry._1(dispatch, /* FetchedSeasonsList */Block.__(0, [
                  responses[/* seasonsList */0],
                  errors
                ]));
  };
  var match = React.useState((function () {
          return /* Loaded */1;
        }));
  var setDataState = match[1];
  var seasonsList = GeneralHelper$FincompareFrontendChallenge.flattenOptionOfList(Belt_Option.flatMap(Belt_Option.flatMap(Belt_Option.flatMap(seasonsListData, (function (response) {
                      return response[/* mrdata */0];
                    })), (function (mrdata) {
                  return mrdata[/* standingsTable */6];
                })), (function (standingsTable) {
              return standingsTable[/* standingsLists */1];
            })));
  React.useEffect((function () {
          if (seasonsList) {
            Promise.resolve(/* () */0);
          } else {
            ComponentHelper$FincompareFrontendChallenge.fetchDataAndDispatch(url, dispatchAction, setDataState);
          }
          return ;
        }), /* array */[url]);
  return React.createElement("div", {
              className: SeasonsListCSS$FincompareFrontendChallenge.contents
            }, match[0] ? renderSeasonsList(seasonsList) : React.createElement(Spinner$FincompareFrontendChallenge.make, { }));
}

var make = SeasonsList;

exports.fetchSeasonDetailsAndOpenPage = fetchSeasonDetailsAndOpenPage;
exports.renderSeason = renderSeason;
exports.renderSeasonsList = renderSeasonsList;
exports.make = make;
/* react Not a pure module */
