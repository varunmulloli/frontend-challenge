type seasonDetails = {
  races: option(SeasonResultsResponse.response),
  winningDriver: option(StandingsTableResponse.response),
}

type responses = {
  seasonsList: option(StandingsTableResponse.response),
  seasonDetails: option(seasonDetails),
};

let createResponses = (~seasonsList=?, ~seasonDetails=?, ()) : responses => {
  {
    seasonsList: seasonsList,
    seasonDetails: seasonDetails,
  };
};

let decodeSeasonDetailsUnsafe = (json: Js.Json.t) : seasonDetails => Json.Decode.{
  winningDriver: json |> optional(field("winningDriver", StandingsTableResponse.decodeResponseUnsafe)),
  races: json |> optional(field("races", SeasonResultsResponse.decodeResponseUnsafe)),
};

let decodeResponsesUnsafe = (json: Js.Json.t) : responses => Json.Decode.{
  seasonsList: json |> optional(field("seasonsList", StandingsTableResponse.decodeResponseUnsafe)),
  seasonDetails: json |> optional(field("seasonDetails", decodeSeasonDetailsUnsafe)),
};

let decodeResponses = (json: Js.Json.t) : Types.result(responses) => {
  try (Belt.Result.Ok(decodeResponsesUnsafe(json))) {
  | _ => Belt.Result.Error("Error in decoding JSON to: responses")
  };
};

let encodeSeasonDetails = (seasonDetailsRecord: seasonDetails) : Js.Json.t => Json.Encode.(
  object_([
    ("winningDriver", seasonDetailsRecord.winningDriver |> nullable(StandingsTableResponse.encodeResponse)),
    ("races", seasonDetailsRecord.races |> nullable(SeasonResultsResponse.encodeResponse)),
  ])
);

let encodeResponses = (responsesRecord: responses) : Js.Json.t => Json.Encode.(
  object_([
    ("seasonsList", responsesRecord.seasonsList |> nullable(StandingsTableResponse.encodeResponse)),
    ("seasonDetails", responsesRecord.seasonDetails |> nullable(encodeSeasonDetails)),
  ])
);