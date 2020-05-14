let renderRacesList = (index: int, races: Races.races) : React.element => {
  let gpName: string = races.raceName -> Belt.Option.getWithDefault("????");

  let date: string = races.date -> Belt.Option.getWithDefault("????");

  let resultDetails: option(Results.results) = races.results 
    -> GeneralHelper.flattenOptionOfList 
    -> Belt.List.head;
  
  let driverInfo: option(Driver.driver) = resultDetails -> Belt.Option.flatMap(result => result.driver);
  let givenName: string = driverInfo 
    -> Belt.Option.flatMap(driver => driver.givenName) 
    -> Belt.Option.getWithDefault("");
  let familyName: string = driverInfo 
    -> Belt.Option.flatMap(driver => driver.familyName) 
    -> Belt.Option.getWithDefault("");
  let winningDriver: string = givenName ++ " " ++ familyName;

  let car: string = resultDetails
    -> Belt.Option.flatMap(result => result.constructor)
    -> Belt.Option.flatMap(constructor => constructor.name)
    -> Belt.Option.getWithDefault("????")
    -> String.uppercase;
  
  let laps: string = resultDetails
    -> Belt.Option.flatMap(result => result.laps)
    -> Belt.Option.getWithDefault("??");
  
  let time: string = resultDetails
    -> Belt.Option.flatMap(result => result.time)
    -> Belt.Option.flatMap(time => time.time)
    -> Belt.Option.getWithDefault("????");

  <tr key=string_of_int(index)>
    <td>{React.string(gpName)}</td>
    <td className=SeasonDetailsCSS.dateColumn>{React.string(date)}</td>
    <td>{React.string(winningDriver)}</td>
    <td>{React.string(car)}</td>
    <td>{React.string(laps)}</td>
    <td>{React.string(time)}</td>
  </tr>
};

[@react.component]
let make = (~dispatch: Reducer.action => unit, ~seasonDetailsData: option(Responses.seasonDetails)) : React.element => {
  let url: ReasonReactRouter.url = ReasonReactRouter.useUrl();

  let dispatchAction = (responses: Responses.responses, errors: Types.errors) : unit => dispatch(Reducer.FetchedSeasonDetails(responses.seasonDetails, errors));

  let (dataState: Types.uiDataState, setDataState: Types.setState(Types.uiDataState)) = React.useState(() => Types.Loaded);

  let raceTableInfo: option(RaceTable.raceTable) = seasonDetailsData 
    -> Belt.Option.flatMap(seasonDetails => seasonDetails.races) 
    -> Belt.Option.flatMap(response => response.mrdata) 
    -> Belt.Option.flatMap(mrdata => mrdata.raceTable);
  
  let season: string = raceTableInfo
    -> Belt.Option.flatMap(raceTable => raceTable.season)
    -> Belt.Option.getWithDefault("????");
  
  let racesList: list(Races.races) = raceTableInfo
    -> Belt.Option.flatMap(raceTable => raceTable.races)
    -> GeneralHelper.flattenOptionOfList;
  
  React.useEffect1(() => {
    switch (racesList) {
    | [] => ignore(ComponentHelper.fetchDataAndDispatch(url, dispatchAction, setDataState))
    | [head, ...tail] => ignore(Js.Promise.resolve())
    };
    None;
  }, [|url|]);
    
  <div className=SeasonDetailsCSS.contents>
    <div className=SeasonDetailsCSS.title>{React.string(season ++ " Race Results")}</div>

    <table className=SeasonDetailsCSS.detailsTable>
      <thead>
        <tr className=SeasonDetailsCSS.headerRow>
          <th>{React.string("GRAND PRIX")}</th>
          <th>{React.string("DATE")}</th>
          <th>{React.string("WINNER")}</th>
          <th>{React.string("CAR")}</th>
          <th>{React.string("LAPS")}</th>
          <th>{React.string("TIME")}</th>
        </tr>
      </thead>

      <tbody className=SeasonDetailsCSS.tableBody>
        { ComponentHelper.renderList(racesList, renderRacesList) }
      </tbody>
    </table>
  </div>
};