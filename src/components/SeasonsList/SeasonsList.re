let fetchSeasonDetailsAndOpenPage = (year: string) : unit => {
  let maybeSeason: option(Types.season) = GeneralHelper.parseInt(year);
  let pageToRender: Types.page = switch maybeSeason {
  | Some(season) => Types.SeasonDetails(season)
  | None => Types.NotFound
  };
  ignore(pageToRender |> Routes.pageURL |> ReasonReactRouter.push);
};

let renderSeason = (index: int, seasonInfo: StandingsLists.standingsLists) : React.element => {
  let season: string = seasonInfo.season -> Belt.Option.getWithDefault("????");

  let driverStandingsInfo: option(DriverStandings.driverStandings) = seasonInfo.driverStandings 
    -> GeneralHelper.flattenOptionOfList 
    -> Belt.List.head;

  let driverInfo: option(Driver.driver) = driverStandingsInfo 
    -> Belt.Option.flatMap(driverStandings => driverStandings.driver);
  
  let givenName: string = driverInfo 
    -> Belt.Option.flatMap(driver => driver.givenName) 
    -> Belt.Option.getWithDefault("");
    
  let familyName: string = driverInfo 
    -> Belt.Option.flatMap(driver => driver.familyName) 
    -> Belt.Option.getWithDefault("");

  let constructorsInfo: list(Constructor.constructor) = driverStandingsInfo 
    -> Belt.Option.flatMap(driverStandings => driverStandings.constructors)
    -> GeneralHelper.flattenOptionOfList;

  let cars: string = constructorsInfo 
    |> List.map((constructor: Constructor.constructor) => constructor.name) 
    |> GeneralHelper.flattenListOfOption
    |> GeneralHelper.joinListOfString(", ");

  let points: string = driverStandingsInfo 
    -> Belt.Option.flatMap(driverStandings => driverStandings.points) 
    -> Belt.Option.getWithDefault("");
  
  let wins: string = driverStandingsInfo 
    -> Belt.Option.flatMap(driverStandings => driverStandings.wins) 
    -> Belt.Option.getWithDefault("");

  <div className=SeasonsListCSS.seasonRow key=string_of_int(index) onClick=(_ => fetchSeasonDetailsAndOpenPage(season))>
    <div className=SeasonsListCSS.seasonYear>{React.string(season)}</div>
    <div className=SeasonsListCSS.separator></div>
    <div className=SeasonsListCSS.driverGivenName>{React.string(givenName)}</div>
    <div className=SeasonsListCSS.driverFamilyName>{React.string(familyName)}</div>
    <div className=SeasonsListCSS.car>{React.string(cars)}</div>
    <div className=Theme.spacer></div>
    <div className=SeasonsListCSS.points>{React.string(wins ++ " Wins")}</div>
    <div className=SeasonsListCSS.points>{React.string(points ++ " PTS")}</div>
    <i className=SeasonsListCSS.icon></i>
  </div>
};

let renderSeasonsList = (seasonsList: list(StandingsLists.standingsLists)) : React.element => {
  <>
    <div className=SeasonsListCSS.title>{React.string("World Championship Winners")}</div>
    { ComponentHelper.renderList(seasonsList, renderSeason) }
  </>
}; 

[@react.component]
let make = (~dispatch: Reducer.action => unit, ~seasonsListData: option(StandingsTableResponse.response)) : React.element => {
  let url: ReasonReactRouter.url = ReasonReactRouter.useUrl();

  let dispatchAction = (responses: Responses.responses, errors: Types.errors) : unit => dispatch(Reducer.FetchedSeasonsList(responses.seasonsList, errors));
  
  let (dataState: Types.uiDataState, setDataState: Types.setState(Types.uiDataState)) = React.useState(() => Types.Loaded);

  let seasonsList: list(StandingsLists.standingsLists) = seasonsListData 
    -> Belt.Option.flatMap(response => response.mrdata) 
    -> Belt.Option.flatMap(mrdata => mrdata.standingsTable)
    -> Belt.Option.flatMap(standingsTable => standingsTable.standingsLists)
    -> GeneralHelper.flattenOptionOfList
    -> List.rev;

  React.useEffect1(() => {
    switch (seasonsList) {
    | [] => ignore(ComponentHelper.fetchDataAndDispatch(url, dispatchAction, setDataState))
    | [head, ...tail] => ignore(Js.Promise.resolve())
    };
    None;
  }, [|url|]);

  <div className=SeasonsListCSS.contents>
    {
      switch (dataState) {
      | Loading => <Spinner />
      | Loaded => renderSeasonsList(seasonsList)
      };
    }
  </div>
};