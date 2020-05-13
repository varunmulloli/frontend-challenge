type results = {
  number: option(string),
  position: option(string),
  positionText: option(string),
  points: option(string),
  driver: option(Driver.driver),
  constructor: option(Constructor.constructor),
  grid: option(string),
  laps: option(string),
  status: option(string),
  time: option(Time.time),
  fastestLap: option(FastestLap.fastestLap),
};

let decodeResultsUnsafe = (json: Js.Json.t) : results => Json.Decode.{
  number: json |> optional(field("number", string)),
  position: json |> optional(field("position", string)),
  positionText: json |> optional(field("positionText", string)),
  points: json |> optional(field("points", string)),
  driver: json |> optional(field("Driver", Driver.decodeDriverUnsafe)),
  constructor: json |> optional(field("Constructor", Constructor.decodeConstructorUnsafe)),
  grid: json |> optional(field("grid", string)),
  laps: json |> optional(field("laps", string)),
  status: json |> optional(field("status", string)),
  time: json |> optional(field("Time", Time.decodeTimeUnsafe)),
  fastestLap: json |> optional(field("FastestLap", FastestLap.decodeFastestLapUnsafe)),
};

let decodeResults = (json: Js.Json.t) : Types.result(results) => {
  try (Belt.Result.Ok(decodeResultsUnsafe(json))) {
  | _ => Belt.Result.Error("Error in decoding JSON to: results")
  };
};

let encodeResults = (resultsItem: results) : Js.Json.t => Json.Encode.(
  object_([
    ("number", resultsItem.number |> nullable(string)),
    ("position", resultsItem.position |> nullable(string)),
    ("positionText", resultsItem.positionText |> nullable(string)),
    ("points", resultsItem.points |> nullable(string)),
    ("Driver", resultsItem.driver |> nullable(Driver.encodeDriver)),
    ("Constructor", resultsItem.constructor |> nullable(Constructor.encodeConstructor)),
    ("grid", resultsItem.grid |> nullable(string)),
    ("laps", resultsItem.laps |> nullable(string)),
    ("status", resultsItem.status |> nullable(string)),
    ("Time", resultsItem.time |> nullable(Time.encodeTime)),
    ("FastestLap", resultsItem.fastestLap |> nullable(FastestLap.encodeFastestLap)),
  ])
);

let decodeResultsListUnsafe = (json: Js.Json.t) : list(results) => Json.Decode.(
  json |> list(decodeResultsUnsafe)
);

let decodeResultsList = (json: Js.Json.t) : Types.result(list(results)) => {
  try (Belt.Result.Ok(decodeResultsListUnsafe(json))) {
  | _ => Belt.Result.Error("Error in decoding JSON to: list(results)")
  };
};

let encodeResultsList = (resultsList: list(results)) : Js.Json.t => Json.Encode.(
  resultsList |> list(encodeResults)
);