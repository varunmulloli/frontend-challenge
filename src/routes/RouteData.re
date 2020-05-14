let fetchSeasonsList = () : Types.uiresult(State.state) => {
  F1API.fetchSeasonsList() |> Js.Promise.then_(State.createStateFromSeasonsList);
};

let fetchSeasonDetailsAndWinner = (season: Types.season) => () : Types.uiresult(State.state) => {
  let seasonDetailsPromise = F1API.fetchSeasonDetails(season);
  let winnerPromise = F1API.fetchWinningDriverForSeason(season);
  Js.Promise.(all2((seasonDetailsPromise, winnerPromise)) |> then_(State.createStateFromSeasonDetailsAndWinner));
};

let getDataToFetch = (page: Types.page) : option(unit => Js.Promise.t(Types.uidata(State.state))) => {
  switch page {
  | Types.SeasonsList => Some(fetchSeasonsList)
  | Types.SeasonDetails(season) => Some(fetchSeasonDetailsAndWinner(season))
  | Types.NotFound => None
  };
};
