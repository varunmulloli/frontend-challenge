type standingsLists = {
  season: option(string),
  round: option(string),
  driverStandings: option(list(DriverStandings.driverStandings)),
};

let decodeStandingsListsUnsafe = (json: Js.Json.t) : standingsLists => Json.Decode.{
  season: json |> optional(field("season", string)),
  round: json |> optional(field("round", string)),
  driverStandings: json |> optional(field("DriverStandings", DriverStandings.decodeDriverStandingsListUnsafe)),
};

let decodeStandingsLists = (json: Js.Json.t) : Types.result(standingsLists) => {
  try (Belt.Result.Ok(decodeStandingsListsUnsafe(json))) {
  | _ => Belt.Result.Error("Error in decoding JSON to: standingsLists")
  };
};

let encodeStandingsLists = (standingsListsItem: standingsLists) : Js.Json.t => Json.Encode.(
  object_([
    ("season", standingsListsItem.season |> nullable(string)),
    ("round", standingsListsItem.round |> nullable(string)),
    ("DriverStandings", standingsListsItem.driverStandings |> nullable(DriverStandings.encodeDriverStandingsList)),
  ])
);

let decodeListOfStandingsListsUnsafe = (json: Js.Json.t) : list(standingsLists) => Json.Decode.(
  json |> list(decodeStandingsListsUnsafe)
);

let decodeListOfStandingsLists = (json: Js.Json.t) : Types.result(list(standingsLists)) => {
  try (Belt.Result.Ok(decodeListOfStandingsListsUnsafe(json))) {
  | _ => Belt.Result.Error("Error in decoding JSON to: list(standingsLists)")
  };
};

let encodeListOfStandingsLists = (listOfStandingsList: list(standingsLists)) : Js.Json.t => Json.Encode.(
  listOfStandingsList |> list(encodeStandingsLists)
);