let baseURL = "http://ergast.com/api/f1";

let decodeSeasonsList = (json: Types.result(Js.Json.t)) : Types.future(StandingsTableResponse.response) => {
  Belt.Result.flatMap(json, StandingsTableResponse.decodeResponse) |> Js.Promise.resolve;
};

let decodeSeasonDetails = (json: Types.result(Js.Json.t)) : Types.future(SeasonResultsResponse.response) => {
  Belt.Result.flatMap(json, SeasonResultsResponse.decodeResponse) |> Js.Promise.resolve;
};

let fetchSeasonsList = () => {
  APIHelper.makeRequest(baseURL ++ "/driverstandings/1.json?limit=11&offset=55") 
  |> Js.Promise.then_(decodeSeasonsList);
};

let fetchWinningDriverForSeason = (season: Types.season) => {
  Js.Promise.resolve(Belt.Result.Ok("Verstappen"));
};

let fetchSeasonDetails = (season: Types.season) => {
  APIHelper.makeRequest(baseURL ++ "/" ++ string_of_int(season) ++ "/results/1.json") 
  |> Js.Promise.then_(decodeSeasonDetails);
};