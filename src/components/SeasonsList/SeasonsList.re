let renderSeasonsList = (index: int, seasonInfo: StandingsLists.standingsLists) : React.element => {
  let season = seasonInfo.season -> Belt.Option.getWithDefault("????");
  let driverStandingsInfo = seasonInfo.driverStandings 
    -> GeneralHelper.flattenOptionOfList 
    -> Belt.List.head;
  let driverInfo = driverStandingsInfo 
    -> Belt.Option.flatMap(driverStandings => driverStandings.driver);
  let constructorsInfo: list(Constructor.constructor) = driverStandingsInfo 
    -> Belt.Option.flatMap(driverStandings => driverStandings.constructors)
    -> GeneralHelper.flattenOptionOfList;
  
  let givenName = driverInfo 
    -> Belt.Option.flatMap(driver => driver.givenName) 
    -> Belt.Option.getWithDefault("");
    
  let familyName = driverInfo 
    -> Belt.Option.flatMap(driver => driver.familyName) 
    -> Belt.Option.getWithDefault("");
  
  let nationality = driverInfo 
    -> Belt.Option.flatMap(driver => driver.nationality) 
    -> Belt.Option.getWithDefault("");

  let cars = constructorsInfo 
    |> List.map((constructor: Constructor.constructor) => constructor.name) 
    |> GeneralHelper.flattenListOfOption
    |> GeneralHelper.joinListOfString(", ");

  let points = driverStandingsInfo 
    -> Belt.Option.flatMap(driverStandings => driverStandings.points) 
    -> Belt.Option.getWithDefault("");
  
  let wins = driverStandingsInfo 
    -> Belt.Option.flatMap(driverStandings => driverStandings.wins) 
    -> Belt.Option.getWithDefault("");

  <div className=SeasonsListCSS.seasonRow key=string_of_int(index)>
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

[@react.component]
let make = (~listFromServer: option(StandingsTableResponse.response), ~errorsFromServer: Types.errors) => {
  let seasonsList: list(StandingsLists.standingsLists) = listFromServer 
    -> Belt.Option.flatMap(response => response.mrdata) 
    -> Belt.Option.flatMap(mrdata => mrdata.standingsTable)
    -> Belt.Option.flatMap(standingsTable => standingsTable.standingsLists)
    -> GeneralHelper.flattenOptionOfList;

  <div className=SeasonsListCSS.contents>
    <div className=SeasonsListCSS.title>{React.string("World Championship Winners")}</div>
    
    {ComponentHelper.renderList(seasonsList, renderSeasonsList)}
  </div>
};