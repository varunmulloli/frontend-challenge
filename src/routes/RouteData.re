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
  let seasonDetailsUIData: Types.uidata(State.seasonDetails) = 
    switch ((details, winner)) {
    | (Belt.Result.Ok(races), Belt.Result.Ok(winningDriver)) => (State.createSeasonDetails(Some(races), Some(winningDriver)), [])
    | (Belt.Result.Ok(races), Belt.Result.Error(error)) => (State.createSeasonDetails(Some(races), None), [error])
    | (Belt.Result.Error(error), Belt.Result.Ok(winningDriver)) => (State.createSeasonDetails(None, Some(winningDriver)), [error])
    | (Belt.Result.Error(error1), Belt.Result.Error(error2)) => (State.createSeasonDetails(None, None), [error1, error2])
    };
  
  let (seasonDetails, errors) = seasonDetailsUIData;
  Js.Promise.resolve((State.createFromSeasonDetails(seasonDetails), errors));
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
