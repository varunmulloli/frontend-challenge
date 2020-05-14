type action = 
  | FetchedSeasonsList(option(StandingsTableResponse.response), Types.errors)
  | FetchedSeasonDetails(option(State.seasonDetails), Types.errors);

type state = {
  seasonsList: option(StandingsTableResponse.response),
  seasonDetails: Belt.Map.Int.t(State.seasonDetails),
  errors: Types.errors,
};

let reducer = (rState: state, rAction: action) : state => 
  switch (rAction) {
  | FetchedSeasonsList(seasonsList, errors) => { ...rState, seasonsList, errors }
  | FetchedSeasonDetails(seasonDetails, errors) => { ...rState, errors, seasonDetails: State.addToSeasonDetailsMap(rState.seasonDetails, seasonDetails) }
};

let createInitialReducerState = (initialState: State.state, initialErrors: Types.errors) : state => {
  {
    seasonsList: initialState.seasonsList,
    seasonDetails: State.addToSeasonDetailsMap(Belt.Map.Int.empty, initialState.seasonDetails),
    errors: initialErrors,
  };
};