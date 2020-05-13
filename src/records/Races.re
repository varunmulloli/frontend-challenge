type races = {
  season: option(string),
  url: option(string),
  raceName: option(string),
  circuit: option(Circuit.circuit),
  date: option(string),
  time: option(string),
  results: option(list(Results.results)),
};

let decodeRacesUnsafe = (json: Js.Json.t) : races => Json.Decode.{
  season: json |> optional(field("season", string)),
  url: json |> optional(field("url", string)),
  raceName: json |> optional(field("raceName", string)),
  circuit: json |> optional(field("Circuit", Circuit.decodeCircuitUnsafe)),
  date: json |> optional(field("date", string)),
  time: json |> optional(field("time", string)),
  results: json |> optional(field("Results", Results.decodeResultsListUnsafe)),
};

let decodeRaces = (json: Js.Json.t) : Types.result(races) => {
  try (Belt.Result.Ok(decodeRacesUnsafe(json))) {
  | _ => Belt.Result.Error("Error in decoding JSON to: races")
  };
};

let encodeRaces = (racesItem: races) : Js.Json.t => Json.Encode.(
  object_([
    ("season", racesItem.season |> nullable(string)),
    ("url", racesItem.url |> nullable(string)),
    ("raceName", racesItem.raceName |> nullable(string)),
    ("Circuit", racesItem.circuit |> nullable(Circuit.encodeCircuit)),
    ("date", racesItem.date |> nullable(string)),
    ("time", racesItem.time |> nullable(string)),
    ("Results", racesItem.results |> nullable(Results.encodeResultsList)),
  ])
);

let decodeRacesListUnsafe = (json: Js.Json.t) : list(races) => Json.Decode.(
  json |> list(decodeRacesUnsafe)
);

let decodeRacesList = (json: Js.Json.t) : Types.result(list(races)) => {
  try (Belt.Result.Ok(decodeRacesListUnsafe(json))) {
  | _ => Belt.Result.Error("Error in decoding JSON to: list(races)")
  };
};

let encodeRacesList = (racesList: list(races)) : Js.Json.t => Json.Encode.(
  racesList |> list(encodeRaces)
);