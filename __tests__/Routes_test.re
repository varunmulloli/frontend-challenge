open Jest;

describe("Routes", () => {
  open Expect;

  test("getPageForUrl get home page", () => {
    let url: ReasonReactRouter.url = { path: [], hash: "", search: "" };
    let page = Routes.getPageForUrl(url);
    expect(page) |> toEqual(Types.SeasonsList);
  });

  test("getPageForUrl get details page with valid season", () => {
    let url: ReasonReactRouter.url = { path: ["season","2005"], hash: "", search: "" };
    let page = Routes.getPageForUrl(url);
    expect(page) |> toEqual(Types.SeasonDetails(2005));
  });

  test("getPageForUrl get details page with invalid season", () => {
    let url: ReasonReactRouter.url = { path: ["season","xxxx"], hash: "", search: "" };
    let page = Routes.getPageForUrl(url);
    expect(page) |> toEqual(Types.NotFound);
  });

  test("getPageForUrl get 404 page", () => {
    let url: ReasonReactRouter.url = { path: ["404"], hash: "", search: "" };
    let page = Routes.getPageForUrl(url);
    expect(page) |> toEqual(Types.NotFound);
  });

  test("getPageForUrl get 404 page for unknown path", () => {
    let url: ReasonReactRouter.url = { path: ["xxxx","yyyy"], hash: "", search: "" };
    let page = Routes.getPageForUrl(url);
    expect(page) |> toEqual(Types.NotFound);
  });
});