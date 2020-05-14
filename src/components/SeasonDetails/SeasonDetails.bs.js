'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var $$String = require("bs-platform/lib/js/string.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.js");
var Spinner$FincompareFrontendChallenge = require("../Spinner/Spinner.bs.js");
var GeneralHelper$FincompareFrontendChallenge = require("../../helpers/GeneralHelper.bs.js");
var ComponentHelper$FincompareFrontendChallenge = require("../../helpers/ComponentHelper.bs.js");
var SeasonDetailsCSS$FincompareFrontendChallenge = require("./SeasonDetailsCSS.bs.js");

function driverWonChampionship(driverId, winningDriverId) {
  var equalStrings = function (s1, s2) {
    return s1 === s2;
  };
  return Belt_Option.eq(driverId, winningDriverId, equalStrings);
}

function renderRacesList(winningDriverId, index, races) {
  var gpName = Belt_Option.getWithDefault(races[/* raceName */2], "????");
  var date = Belt_Option.getWithDefault(races[/* date */4], "????");
  var resultDetails = Belt_List.head(GeneralHelper$FincompareFrontendChallenge.flattenOptionOfList(races[/* results */6]));
  var driverInfo = Belt_Option.flatMap(resultDetails, (function (result) {
          return result[/* driver */4];
        }));
  var driverId = Belt_Option.flatMap(driverInfo, (function (driver) {
          return driver[/* driverId */0];
        }));
  var givenName = Belt_Option.getWithDefault(Belt_Option.flatMap(driverInfo, (function (driver) {
              return driver[/* givenName */4];
            })), "");
  var familyName = Belt_Option.getWithDefault(Belt_Option.flatMap(driverInfo, (function (driver) {
              return driver[/* familyName */5];
            })), "");
  var driverName = givenName + (" " + familyName);
  var isChampion = driverWonChampionship(driverId, winningDriverId);
  var car = $$String.uppercase_ascii(Belt_Option.getWithDefault(Belt_Option.flatMap(Belt_Option.flatMap(resultDetails, (function (result) {
                      return result[/* constructor */5];
                    })), (function (constructor) {
                  return constructor[/* name */2];
                })), "????"));
  var laps = Belt_Option.getWithDefault(Belt_Option.flatMap(resultDetails, (function (result) {
              return result[/* laps */7];
            })), "??");
  var time = Belt_Option.getWithDefault(Belt_Option.flatMap(Belt_Option.flatMap(resultDetails, (function (result) {
                  return result[/* time */9];
                })), (function (time) {
              return time[/* time */1];
            })), "????");
  var rowClassName = isChampion ? SeasonDetailsCSS$FincompareFrontendChallenge.highlightedTableRow : SeasonDetailsCSS$FincompareFrontendChallenge.normalTableRow;
  return React.createElement("tr", {
              key: String(index),
              className: rowClassName
            }, React.createElement("td", undefined, gpName), React.createElement("td", {
                  className: SeasonDetailsCSS$FincompareFrontendChallenge.dateColumn
                }, date), React.createElement("td", undefined, driverName), React.createElement("td", undefined, car), React.createElement("td", undefined, laps), React.createElement("td", undefined, time));
}

function renderSeasonDetails(season, racesList, winningDriverId) {
  return React.createElement(React.Fragment, undefined, React.createElement("div", {
                  className: SeasonDetailsCSS$FincompareFrontendChallenge.title
                }, season + " Race Results"), React.createElement("table", {
                  className: SeasonDetailsCSS$FincompareFrontendChallenge.detailsTable
                }, React.createElement("thead", undefined, React.createElement("tr", {
                          className: SeasonDetailsCSS$FincompareFrontendChallenge.headerRow
                        }, React.createElement("th", undefined, "GRAND PRIX"), React.createElement("th", undefined, "DATE"), React.createElement("th", undefined, "WINNER"), React.createElement("th", undefined, "CAR"), React.createElement("th", undefined, "LAPS"), React.createElement("th", undefined, "TIME"))), React.createElement("tbody", undefined, ComponentHelper$FincompareFrontendChallenge.renderList(racesList, (function (param, param$1) {
                            return renderRacesList(winningDriverId, param, param$1);
                          })))));
}

function SeasonDetails(Props) {
  var dispatch = Props.dispatch;
  var seasonDetailsData = Props.seasonDetailsData;
  var url = ReasonReactRouter.useUrl(undefined, /* () */0);
  var dispatchAction = function (responses, errors) {
    return Curry._1(dispatch, /* FetchedSeasonDetails */Block.__(1, [
                  responses[/* seasonDetails */1],
                  errors
                ]));
  };
  var match = React.useState((function () {
          return /* Loaded */1;
        }));
  var setDataState = match[1];
  var raceTableInfo = Belt_Option.flatMap(Belt_Option.flatMap(Belt_Option.flatMap(seasonDetailsData, (function (seasonDetails) {
                  return seasonDetails[/* races */0];
                })), (function (response) {
              return response[/* mrdata */0];
            })), (function (mrdata) {
          return mrdata[/* raceTable */6];
        }));
  var season = Belt_Option.getWithDefault(Belt_Option.flatMap(raceTableInfo, (function (raceTable) {
              return raceTable[/* season */0];
            })), "????");
  var racesList = GeneralHelper$FincompareFrontendChallenge.flattenOptionOfList(Belt_Option.flatMap(raceTableInfo, (function (raceTable) {
              return raceTable[/* races */2];
            })));
  var winningDriverId = Belt_Option.flatMap(Belt_Option.flatMap(Belt_List.head(GeneralHelper$FincompareFrontendChallenge.flattenOptionOfList(Belt_Option.flatMap(Belt_List.head(GeneralHelper$FincompareFrontendChallenge.flattenOptionOfList(Belt_Option.flatMap(Belt_Option.flatMap(Belt_Option.flatMap(Belt_Option.flatMap(seasonDetailsData, (function (seasonDetails) {
                                                  return seasonDetails[/* winningDriver */1];
                                                })), (function (response) {
                                              return response[/* mrdata */0];
                                            })), (function (mrdata) {
                                          return mrdata[/* standingsTable */6];
                                        })), (function (standingsTable) {
                                      return standingsTable[/* standingsLists */1];
                                    })))), (function (standingsLists) {
                          return standingsLists[/* driverStandings */2];
                        })))), (function (driverStandings) {
              return driverStandings[/* driver */4];
            })), (function (driver) {
          return driver[/* driverId */0];
        }));
  React.useEffect((function () {
          if (racesList) {
            Promise.resolve(/* () */0);
          } else {
            ComponentHelper$FincompareFrontendChallenge.fetchDataAndDispatch(url, dispatchAction, setDataState);
          }
          return ;
        }), /* array */[url]);
  return React.createElement("div", {
              className: SeasonDetailsCSS$FincompareFrontendChallenge.contents
            }, match[0] ? renderSeasonDetails(season, racesList, winningDriverId) : React.createElement(Spinner$FincompareFrontendChallenge.make, { }));
}

var make = SeasonDetails;

exports.driverWonChampionship = driverWonChampionship;
exports.renderRacesList = renderRacesList;
exports.renderSeasonDetails = renderSeasonDetails;
exports.make = make;
/* react Not a pure module */
