let fetchSeasonsList = () : Types.uiresult(Responses.responses) => {
  F1API.fetchSeasonsList() |> Js.Promise.then_(ResponsesHelper.createResponsesFromSeasonsList);
};

let fetchSeasonDetailsAndWinner = (season: Types.season) => () : Types.uiresult(Responses.responses) => {
  let seasonDetailsPromise = F1API.fetchSeasonDetails(season);
  let winningDriverPromise = F1API.fetchWinningDriverForSeason(season);
  Js.Promise.(all2((seasonDetailsPromise, winningDriverPromise)) |> then_(ResponsesHelper.createResponsesFromSeasonDetailsAndWinner));
};

let getDataToFetch = (page: Types.page) : option(unit => Js.Promise.t(Types.uidata(Responses.responses))) => {
  switch page {
  | Types.SeasonsList => Some(fetchSeasonsList)
  | Types.SeasonDetails(season) => Some(fetchSeasonDetailsAndWinner(season))
  | Types.NotFound => None
  };
};
