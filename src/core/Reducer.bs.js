'use strict';

var Belt_MapInt = require("bs-platform/lib/js/belt_MapInt.js");
var ResponsesHelper$FincompareFrontendChallenge = require("../helpers/ResponsesHelper.bs.js");

function reducer(previousState, actionItem) {
  if (actionItem.tag) {
    return /* record */[
            /* seasonsList */previousState[/* seasonsList */0],
            /* seasonDetails */ResponsesHelper$FincompareFrontendChallenge.addToSeasonDetailsMap(previousState[/* seasonDetails */1], actionItem[0]),
            /* errors */actionItem[1]
          ];
  } else {
    return /* record */[
            /* seasonsList */actionItem[0],
            /* seasonDetails */previousState[/* seasonDetails */1],
            /* errors */actionItem[1]
          ];
  }
}

function createInitialState(initialResponses, initialErrors) {
  return /* record */[
          /* seasonsList */initialResponses[/* seasonsList */0],
          /* seasonDetails */ResponsesHelper$FincompareFrontendChallenge.addToSeasonDetailsMap(Belt_MapInt.empty, initialResponses[/* seasonDetails */1]),
          /* errors */initialErrors
        ];
}

exports.reducer = reducer;
exports.createInitialState = createInitialState;
/* No side effect */
