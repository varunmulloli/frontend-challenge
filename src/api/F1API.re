let baseURL = "http://ergast.com/api/f1";

let fetchSeasonsList = () : Types.future(StandingsTableResponse.response) => {
  let decodeSeasonsList = (json: Types.result(Js.Json.t)) : Types.future(StandingsTableResponse.response) => {
    Belt.Result.flatMap(json, StandingsTableResponse.decodeResponse) |> Js.Promise.resolve;
  };

  APIHelper.makeRequest(baseURL ++ "/driverstandings/1.json?limit=11&offset=55") 
  |> Js.Promise.then_(decodeSeasonsList);
};

let fetchSeasonDetails = (season: Types.season) : Types.future(SeasonResultsResponse.response) => {
  let decodeSeasonDetails = (json: Types.result(Js.Json.t)) : Types.future(SeasonResultsResponse.response) => {
    Belt.Result.flatMap(json, SeasonResultsResponse.decodeResponse) |> Js.Promise.resolve;
  };

  APIHelper.makeRequest(baseURL ++ "/" ++ string_of_int(season) ++ "/results/1.json") 
  |> Js.Promise.then_(decodeSeasonDetails);
};

let fetchWinningDriverForSeason = (season: Types.season) : Types.future(string) => {
  Js.Promise.resolve(Belt.Result.Ok("Verstappen"));
};

