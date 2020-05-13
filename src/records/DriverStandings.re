type driverStandings = {
  position: option(string),
  positionText: option(string),
  points: option(string),
  wins: option(string),
  driver: option(Driver.driver),
  constructors: option(list(Constructor.constructor)),
};

let decodeDriverStandingsUnsafe = (json: Js.Json.t) : driverStandings => Json.Decode.{
  position: json |> optional(field("position", string)),
  positionText: json |> optional(field("positionText", string)),
  points: json |> optional(field("points", string)),
  wins: json |> optional(field("wins", string)),
  driver: json |> optional(field("Driver", Driver.decodeDriverUnsafe)),
  constructors: json |> optional(field("Constructors", Constructor.decodeConstructorsUnsafe)),
};

let decodeDriverStandings = (json: Js.Json.t) : Types.result(driverStandings) => {
  try (Belt.Result.Ok(decodeDriverStandingsUnsafe(json))) {
  | _ => Belt.Result.Error("Error in decoding JSON to: driverStandings")
  };
};

let encodeDriverStandings = (driverStandingsItem: driverStandings) : Js.Json.t => Json.Encode.(
  object_([
    ("position", driverStandingsItem.position |> nullable(string)),
    ("positionText", driverStandingsItem.positionText |> nullable(string)),
    ("points", driverStandingsItem.points |> nullable(string)),
    ("wins", driverStandingsItem.wins |> nullable(string)),
    ("Driver", driverStandingsItem.driver |> nullable(Driver.encodeDriver)),
    ("Constructors", driverStandingsItem.constructors |> nullable(Constructor.encodeConstructors)),
  ])
);

let decodeDriverStandingsListUnsafe = (json: Js.Json.t) : list(driverStandings) => Json.Decode.(
  json |> list(decodeDriverStandingsUnsafe)
);

let decodeDriverStandingsList = (json: Js.Json.t) : Types.result(list(driverStandings)) => {
  try (Belt.Result.Ok(decodeDriverStandingsListUnsafe(json))) {
  | _ => Belt.Result.Error("Error in decoding JSON to: list(driverStandings)")
  };
};

let encodeDriverStandingsList = (driverStandingsList: list(driverStandings)) : Js.Json.t => Json.Encode.(
  driverStandingsList |> list(encodeDriverStandings)
);