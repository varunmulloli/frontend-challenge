let renderSeasonsList = (maybeState: option(State.state), errors: list(string)) : React.element => {
  switch maybeState {
  | Some(state) => <SeasonsList listFromServer=state.seasonsList errorsFromServer=errors />
  | None => <SeasonsList listFromServer=None errorsFromServer=errors />
  };
};

let renderSeasonDetails = (maybeState: option(State.state), errors: list(string)) : React.element => {
  switch maybeState {
  | Some(state) => <SeasonDetails winnerFromServer=state.winningDriver detailsFromServer=state.seasonDetails errorsFromServer=errors />
  | None => <SeasonDetails winnerFromServer=None detailsFromServer=None errorsFromServer=errors />
  };
};

let componentToRender = (page: Types.page) : ((option(State.state), list(string)) => React.element) => {
  switch page {
  | Types.SeasonsList => renderSeasonsList
  | Types.SeasonDetails(_) => renderSeasonDetails
  | Types.NotFound => (_,_) => <NotFound />
  };
};