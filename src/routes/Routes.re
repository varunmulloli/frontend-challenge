let seasonURLPrefix = "season";
let notFoundURLPrefix = "404";

let pageURL(p: Types.page) : string = {
  switch (p) {
  | SeasonsList => "/"
  | SeasonDetails(season) => "/" ++ seasonURLPrefix ++ "/" ++ string_of_int(season)
  | NotFound => "/" ++ notFoundURLPrefix
  };
};

let seasonPageForYear = (year: string) : Types.page => {
  switch (GeneralHelper.parseInt(year)) {
  | Some(season) => SeasonDetails(season)
  | None => NotFound
  };
};

let getPageForUrl = (url: ReasonReactRouter.url) : Types.page => {
  switch (url.path) {
  | [] => SeasonsList
  | [season, year] when season === seasonURLPrefix => seasonPageForYear(year)
  | [notFound] when notFound === notFoundURLPrefix => NotFound
  | _ => NotFound
  };
};