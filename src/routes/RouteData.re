type resultSeasonList = Types.result(StandingsTableResponse.response)
type resultDetails = Types.result(SeasonResultsResponse.response);
type resultWinner = Types.result(string);

let flattenResult = (result: Types.result(State.state)) : Types.uidata(State.state) => {
  switch (result) {
  | Belt.Result.Ok(state) => (state, [])
  | Belt.Result.Error(error) => (State.createEmptyState(), [error])
  };
};

let createStateFromSeasonsList = (seasonsList: resultSeasonList) : Types.uiresult(State.state) => {
  Belt.Result.map(seasonsList, State.createFromSeasonsList) |> flattenResult |> Js.Promise.resolve;
};

let createStateFromSeasonDetailsAndWinner = ((details: resultDetails, winner: resultWinner)) : Types.uiresult(State.state) => {
  let stateWithErrors: Types.uidata(State.state) = 
    switch ((details, winner)) {
    | (Belt.Result.Ok(seasonDetails), Belt.Result.Ok(winningDriver)) => (State.createState(~seasonDetails, ~winningDriver, ()), [])
    | (Belt.Result.Ok(seasonDetails), Belt.Result.Error(error)) => (State.createState(~seasonDetails, ()), [error])
    | (Belt.Result.Error(error), Belt.Result.Ok(winningDriver)) => (State.createState(~winningDriver, ()), [error])
    | (Belt.Result.Error(error1), Belt.Result.Error(error2)) => (State.createEmptyState(), [error1, error2])
    };
  Js.Promise.resolve(stateWithErrors);
};

let fetchSeasonsList = () : Types.uiresult(State.state) => {
  F1API.fetchSeasonsList() |> Js.Promise.then_(createStateFromSeasonsList);
};

let fetchSeasonDetailsAndWinner = (season: Types.season) => () : Types.uiresult(State.state) => {
  let seasonDetailsPromise = F1API.fetchSeasonDetails(season);
  let winnerPromise = F1API.fetchWinningDriverForSeason(season);
  Js.Promise.(all2((seasonDetailsPromise, winnerPromise)) |> then_(createStateFromSeasonDetailsAndWinner));
};

let getDataToFetch = (page: Types.page) : option(unit => Js.Promise.t(Types.uidata(State.state))) => {
  switch page {
  | Types.SeasonsList => Some(fetchSeasonsList)
  | Types.SeasonDetails(season) => Some(fetchSeasonDetailsAndWinner(season))
  | Types.NotFound => None
  };
};
