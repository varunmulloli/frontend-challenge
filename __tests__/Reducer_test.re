open Jest;

let season = 2005;
let emptyState: Reducer.state = { seasonsList: None, seasonDetails: Belt.Map.Int.empty, errors: [] };

let standingsTable: StandingsTable.standingsTable = { driverStandings: Some("1"), standingsLists: Some([]) };
let standingsTableResponseData: StandingsTableResponse.mrdata = { xmlns: None, series: None, url: None, limit: None, offset: None, total: None, standingsTable: Some(standingsTable) };
let standingsTableResponse: StandingsTableResponse.response = { mrdata: Some(standingsTableResponseData) };

let raceTable: RaceTable.raceTable = { season: Some(string_of_int(season)), position: Some("1"), races: Some([]) };
let seasonResultsResponseData: SeasonResultsResponse.mrdata = { xmlns: None, series: None, url: None, limit: None, offset: None, total: None, raceTable: Some(raceTable) };
let seasonResultsResponse: SeasonResultsResponse.response = { mrdata: Some(seasonResultsResponseData) };

describe("Reducer", () => {
  open Expect;

  test("createInitialState with blank data", () => {
    let responses: Responses.responses = { seasonsList: None, seasonDetails: None };
    let errors: Types.errors = [];
    let state: Reducer.state = Reducer.createInitialState(responses, errors);
    expect(state) |> toEqual(emptyState);
  });

  test("reducer with FetchedSeasonsList action", () => {
    let action: Reducer.action = Reducer.FetchedSeasonsList(Some(standingsTableResponse), ["error"]);
    let state: Reducer.state = Reducer.reducer(emptyState, action);
    let expectedState: Reducer.state = { seasonsList: Some(standingsTableResponse), seasonDetails: emptyState.seasonDetails, errors: ["error"] };
    expect(state) |> toEqual(expectedState);
  });

  test("reducer with FetchedSeasonDetails action", () => {
    let seasonDetails: Responses.seasonDetails = { races: Some(seasonResultsResponse), winningDriver: Some(standingsTableResponse) };
    let action: Reducer.action = Reducer.FetchedSeasonDetails(Some(seasonDetails), ["error1","error2"]);
    let state: Reducer.state = Reducer.reducer(emptyState, action);
    let expectedState: Reducer.state = { seasonsList: None, seasonDetails: Belt.Map.Int.set(Belt.Map.Int.empty, season, seasonDetails), errors: ["error1","error2"] };
    expect(state) |> toEqual(expectedState);
  });
});