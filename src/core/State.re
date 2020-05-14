type seasonDetails = {
  races: option(SeasonResultsResponse.response),
  winningDriver: option(string),
}

type state = {
  seasonsList: option(StandingsTableResponse.response),
  seasonDetails: option(seasonDetails),
};

let createState = (~seasonsList=?, ~seasonDetails=?, ()) : state => {
  {
    seasonsList: seasonsList,
    seasonDetails: seasonDetails,
  };
};

let decodeSeasonDetailsUnsafe = (json: Js.Json.t) : seasonDetails => Json.Decode.{
  winningDriver: json |> optional(field("winningDriver", string)),
  races: json |> optional(field("races", SeasonResultsResponse.decodeResponseUnsafe)),
};

let decodeStateUnsafe = (json: Js.Json.t) : state => Json.Decode.{
  seasonsList: json |> optional(field("seasonsList", StandingsTableResponse.decodeResponseUnsafe)),
  seasonDetails: json |> optional(field("seasonDetails", decodeSeasonDetailsUnsafe)),
};

let decodeState = (json: Js.Json.t) : Types.result(state) => {
  try (Belt.Result.Ok(decodeStateUnsafe(json))) {
  | _ => Belt.Result.Error("Error in decoding JSON to: state")
  };
};

let encodeSeasonDetails = (seasonDetailsRecord: seasonDetails) : Js.Json.t => Json.Encode.(
  object_([
    ("winningDriver", seasonDetailsRecord.winningDriver |> nullable(string)),
    ("races", seasonDetailsRecord.races |> nullable(SeasonResultsResponse.encodeResponse)),
  ])
);

let encodeState = (stateRecord: state) : Js.Json.t => Json.Encode.(
  object_([
    ("seasonsList", stateRecord.seasonsList |> nullable(StandingsTableResponse.encodeResponse)),
    ("seasonDetails", stateRecord.seasonDetails |> nullable(encodeSeasonDetails)),
  ])
);

let createEmptyState = () : state => createState(());

let createFromSeasonsList = (seasonsList: StandingsTableResponse.response) : state => {
  createState(~seasonsList, ());
};

let createFromSeasonDetails = (seasonDetails: seasonDetails) : state => {
  createState(~seasonDetails, ());
};

let createSeasonDetails = (races: option(SeasonResultsResponse.response), winningDriver: option(string)) : seasonDetails => {
  { races, winningDriver };
};

let addToSeasonDetailsMap = (currentMap: Belt.Map.Int.t(seasonDetails), seasonDetailsInfo: option(seasonDetails)) => {
  let addToMap = (seasonDetails: seasonDetails) => {
    let season = seasonDetails.races
    -> Belt.Option.flatMap(response => response.mrdata) 
    -> Belt.Option.flatMap(mrdata => mrdata.raceTable)
    -> Belt.Option.flatMap(raceTable => raceTable.season)
    -> Belt.Option.flatMap(GeneralHelper.parseInt);

    switch (season) {
    | Some(year) => Belt.Map.Int.set(currentMap, year, seasonDetails)
    | None => currentMap
    };
  };

  switch (seasonDetailsInfo) {
  | Some(details) => addToMap(details)
  | None => currentMap
  };
};