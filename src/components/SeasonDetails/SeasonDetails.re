let renderRacesList = (index: int, races: Races.races) : React.element => {
  let gpName = races.raceName -> Belt.Option.getWithDefault("????");

  let date = races.date -> Belt.Option.getWithDefault("????");

  let resultDetails = races.results 
    -> GeneralHelper.flattenOptionOfList 
    -> Belt.List.head;
  
  let driverInfo = resultDetails
    -> Belt.Option.flatMap(result => result.driver);
  let givenName = driverInfo 
    -> Belt.Option.flatMap(driver => driver.givenName) 
    -> Belt.Option.getWithDefault("");
  let familyName = driverInfo 
    -> Belt.Option.flatMap(driver => driver.familyName) 
    -> Belt.Option.getWithDefault("");
  let winningDriver = givenName ++ " " ++ familyName;

  let car = resultDetails
    -> Belt.Option.flatMap(result => result.constructor)
    -> Belt.Option.flatMap(constructor => constructor.name)
    -> Belt.Option.getWithDefault("????")
    -> String.uppercase;
  
  let laps = resultDetails
    -> Belt.Option.flatMap(result => result.laps)
    -> Belt.Option.getWithDefault("??");
  
  let time = resultDetails
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
let make = (~winnerFromServer: option(string), ~detailsFromServer: option(SeasonResultsResponse.response), ~errorsFromServer: Types.errors) => {
  let raceTableInfo = detailsFromServer 
    -> Belt.Option.flatMap(response => response.mrdata) 
    -> Belt.Option.flatMap(mrdata => mrdata.raceTable);

  let season = raceTableInfo
    -> Belt.Option.flatMap(raceTable => raceTable.season)
    -> Belt.Option.getWithDefault("????");

  let racesList: list(Races.races) = raceTableInfo
    -> Belt.Option.flatMap(raceTable => raceTable.races)
    -> GeneralHelper.flattenOptionOfList;
    
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
        {ComponentHelper.renderList(racesList, renderRacesList)}
      </tbody>
    </table>
  </div>
};