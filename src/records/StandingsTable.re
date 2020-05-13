type standingsTable = {
  driverStandings: option(string),
  standingsLists: option(list(StandingsLists.standingsLists)),
};

let decodeStandingsTableUnsafe = (json: Js.Json.t) : standingsTable => Json.Decode.{
  driverStandings: json |> optional(field("driverStandings", string)),
  standingsLists: json |> optional(field("StandingsLists", StandingsLists.decodeListOfStandingsListsUnsafe)),
};

let decodeStandingsTable = (json: Js.Json.t) : Types.result(standingsTable) => {
  try (Belt.Result.Ok(decodeStandingsTableUnsafe(json))) {
  | _ => Belt.Result.Error("Error in decoding JSON to: standingsTable")
  };
};

let encodeStandingsTable = (standingsTableItem: standingsTable) : Js.Json.t => Json.Encode.(
  object_([
    ("driverStandings", standingsTableItem.driverStandings |> nullable(string)),
    ("StandingsLists", standingsTableItem.standingsLists |> nullable(StandingsLists.encodeListOfStandingsLists)),
  ])
);
