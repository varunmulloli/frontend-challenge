type raceTable = {
  season: option(string),
  position: option(string),
  races: option(list(Races.races)),
};

let decodeRaceTableUnsafe = (json: Js.Json.t) : raceTable => Json.Decode.{
  season: json |> optional(field("season", string)),
  position: json |> optional(field("position", string)),
  races: json |> optional(field("Races", Races.decodeRacesListUnsafe)),
};

let decodeRaceTable = (json: Js.Json.t) : Types.result(raceTable) => {
  try (Belt.Result.Ok(decodeRaceTableUnsafe(json))) {
  | _ => Belt.Result.Error("Error in decoding JSON to: raceTable")
  };
};

let encodeRaceTable = (raceTableItem: raceTable) : Js.Json.t => Json.Encode.(
  object_([
    ("season", raceTableItem.season |> nullable(string)),
    ("position", raceTableItem.position |> nullable(string)),
    ("Races", raceTableItem.races |> nullable(Races.encodeRacesList)),
  ])
);
