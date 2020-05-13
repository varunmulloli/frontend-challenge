type state = {
  seasonsList: option(StandingsTableResponse.response),
  winningDriver: option(string),
  seasonDetails: option(SeasonResultsResponse.response),
};

let createState = (~seasonsList=?, ~winningDriver=?, ~seasonDetails=?, ()) : state => {
  {
    seasonsList: seasonsList,
    winningDriver: winningDriver,
    seasonDetails: seasonDetails,
  };
};

let decodeStateUnsafe = (json: Js.Json.t) : state => Json.Decode.{
  seasonsList: json |> optional(field("seasonsList", StandingsTableResponse.decodeResponseUnsafe)),
  winningDriver: json |> optional(field("winningDriver", string)),
  seasonDetails: json |> optional(field("seasonDetails", SeasonResultsResponse.decodeResponseUnsafe)),
};

let decodeState = (json: Js.Json.t) : Types.result(state) => {
  try (Belt.Result.Ok(decodeStateUnsafe(json))) {
  | _ => Belt.Result.Error("Error in decoding JSON to: state")
  };
};

let encodeState = (stateRecord: state) : Js.Json.t => Json.Encode.(
  object_([
    ("seasonsList", stateRecord.seasonsList |> nullable(StandingsTableResponse.encodeResponse)),
    ("winningDriver", stateRecord.winningDriver |> nullable(string)),
    ("seasonDetails", stateRecord.seasonDetails |> nullable(SeasonResultsResponse.encodeResponse)),
  ])
);

let createEmptyState = () : state => createState(());

let createFromSeasonsList = (seasonsList: StandingsTableResponse.response) : state => createState(~seasonsList, ());