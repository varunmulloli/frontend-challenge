let baseURL = "http://ergast.com/api/f1";

let decodeStandingsTableResponse = (json: Types.result(Js.Json.t)) : Types.future(StandingsTableResponse.response) => {
  Belt.Result.flatMap(json, StandingsTableResponse.decodeResponse) |> Js.Promise.resolve;
};

let decodeSeasonResultsResponse = (json: Types.result(Js.Json.t)) : Types.future(SeasonResultsResponse.response) => {
  Belt.Result.flatMap(json, SeasonResultsResponse.decodeResponse) |> Js.Promise.resolve;
};

let fetchSeasonsList = () : Types.future(StandingsTableResponse.response) => {
  APIHelper.makeRequest(baseURL ++ "/driverstandings/1.json?limit=11&offset=55") 
  |> Js.Promise.then_(decodeStandingsTableResponse);
};

let fetchSeasonDetails = (season: Types.season) : Types.future(SeasonResultsResponse.response) => {
  APIHelper.makeRequest(baseURL ++ "/" ++ string_of_int(season) ++ "/results/1.json") 
  |> Js.Promise.then_(decodeSeasonResultsResponse);
};

let fetchWinningDriverForSeason = (season: Types.season) : Types.future(StandingsTableResponse.response) => {
  APIHelper.makeRequest(baseURL ++ "/" ++ string_of_int(season) ++ "/driverstandings/1.json") 
  |> Js.Promise.then_(decodeStandingsTableResponse);
};

