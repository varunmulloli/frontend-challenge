type action = 
  | FetchedSeasonsList(option(StandingsTableResponse.response), Types.errors)
  | FetchedSeasonDetails(option(Responses.seasonDetails), Types.errors);

type state = {
  seasonsList: option(StandingsTableResponse.response),
  seasonDetails: Belt.Map.Int.t(Responses.seasonDetails),
  errors: Types.errors,
};

let reducer = (previousState: state, actionItem: action) : state => 
  switch (actionItem) {
  | FetchedSeasonsList(seasonsList, errors) => { ...previousState, seasonsList, errors }
  | FetchedSeasonDetails(seasonDetails, errors) => { ...previousState, errors, seasonDetails: ResponsesHelper.addToSeasonDetailsMap(previousState.seasonDetails, seasonDetails) }
};

let createInitialState = (initialResponses: Responses.responses, initialErrors: Types.errors) : state => {
  {
    seasonsList: initialResponses.seasonsList,
    seasonDetails: ResponsesHelper.addToSeasonDetailsMap(Belt.Map.Int.empty, initialResponses.seasonDetails),
    errors: initialErrors,
  };
};