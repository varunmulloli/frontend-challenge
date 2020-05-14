let renderSeasonsList = (state: Reducer.state, dispatch: Reducer.action => unit) : React.element => {
  <SeasonsList dispatch=dispatch listFromServer=state.seasonsList />
};

let renderSeasonDetails = (season: Types.season) => (state: Reducer.state, dispatch: Reducer.action => unit) : React.element => {
  let seasonDetails = Belt.Map.Int.get(state.seasonDetails, season);
  <SeasonDetails dispatch=dispatch detailsFromServer=seasonDetails />
};

let componentToRender = (page: Types.page) : ((Reducer.state, Reducer.action => unit) => React.element) => {
  switch page {
  | Types.SeasonsList => renderSeasonsList
  | Types.SeasonDetails(season) => renderSeasonDetails(season)
  | Types.NotFound => (_,_) => <NotFound />
  };
};