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

let flattenStateResult = (result: Types.result(state)) : Types.uidata(state) => {
  switch (result) {
  | Belt.Result.Ok(state) => (state, [])
  | Belt.Result.Error(error) => (createEmptyState(), [error])
  };
};

let createStateFromSeasonsList = (seasonsListResult: Types.result(StandingsTableResponse.response)) : Types.uiresult(state) => {
  Belt.Result.map(seasonsListResult, seasonsList => createState(~seasonsList, ())) 
  |> flattenStateResult 
  |> Js.Promise.resolve;
};

let createSeasonDetails = (races: option(SeasonResultsResponse.response), winningDriver: option(string)) : seasonDetails => {
  { races, winningDriver };
};

let createStateFromSeasonDetailsAndWinner = ((details: Types.result(SeasonResultsResponse.response), winner: Types.result(string))) : Types.uiresult(state) => {
  let seasonDetailsUIData: Types.uidata(seasonDetails) = 
    switch ((details, winner)) {
    | (Belt.Result.Ok(races), Belt.Result.Ok(winningDriver)) => (createSeasonDetails(Some(races), Some(winningDriver)), [])
    | (Belt.Result.Ok(races), Belt.Result.Error(error)) => (createSeasonDetails(Some(races), None), [error])
    | (Belt.Result.Error(error), Belt.Result.Ok(winningDriver)) => (createSeasonDetails(None, Some(winningDriver)), [error])
    | (Belt.Result.Error(error1), Belt.Result.Error(error2)) => (createSeasonDetails(None, None), [error1, error2])
    };
  
  let (seasonDetails, errors) = seasonDetailsUIData;
  Js.Promise.resolve((createState(~seasonDetails, ()), errors));
};

let addToSeasonDetailsMap = (currentMap: Belt.Map.Int.t(seasonDetails), seasonDetailsInfo: option(seasonDetails)) : Belt.Map.Int.t(seasonDetails) => {
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