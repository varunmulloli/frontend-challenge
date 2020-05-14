type seasonDetailsMap = Belt.Map.Int.t(Responses.seasonDetails);

let createEmptyResponses = () : Responses.responses => Responses.createResponses(());

let flattenResponsesResult = (result: Types.result(Responses.responses)) : Types.uidata(Responses.responses) => {
  switch (result) {
  | Belt.Result.Ok(responses) => (responses, [])
  | Belt.Result.Error(error) => (createEmptyResponses(), [error])
  };
};

let createResponsesFromSeasonsList = (seasonsListResult: Types.result(StandingsTableResponse.response)) : Types.uiresult(Responses.responses) => {
  Belt.Result.map(seasonsListResult, seasonsList => Responses.createResponses(~seasonsList, ())) 
  |> flattenResponsesResult 
  |> Js.Promise.resolve;
};

let createSeasonDetails = (races: option(SeasonResultsResponse.response), winningDriver: option(string)) : Responses.seasonDetails => {
  { races, winningDriver };
};

let createResponsesFromSeasonDetailsAndWinner = ((details: Types.result(SeasonResultsResponse.response), winner: Types.result(string))) : Types.uiresult(Responses.responses) => {
  let seasonDetailsUIData: Types.uidata(Responses.seasonDetails) = 
    switch ((details, winner)) {
    | (Belt.Result.Ok(races), Belt.Result.Ok(winningDriver)) => (createSeasonDetails(Some(races), Some(winningDriver)), [])
    | (Belt.Result.Ok(races), Belt.Result.Error(error)) => (createSeasonDetails(Some(races), None), [error])
    | (Belt.Result.Error(error), Belt.Result.Ok(winningDriver)) => (createSeasonDetails(None, Some(winningDriver)), [error])
    | (Belt.Result.Error(error1), Belt.Result.Error(error2)) => (createSeasonDetails(None, None), [error1, error2])
    };
  
  let (seasonDetails: Responses.seasonDetails, errors: Types.errors) = seasonDetailsUIData;
  Js.Promise.resolve((Responses.createResponses(~seasonDetails, ()), errors));
};

let addToSeasonDetailsMap = (currentMap: seasonDetailsMap, seasonDetailsInfo: option(Responses.seasonDetails)) : seasonDetailsMap => {
  let addToMap = (seasonDetails: Responses.seasonDetails) : seasonDetailsMap => {
    let season: option(Types.season) = seasonDetails.races
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