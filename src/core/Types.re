type season = int;

type page = 
  | SeasonsList
  | SeasonDetails(season)
  | NotFound;

type error = string;
type errors = list(error); 
type result('a) = Belt.Result.t('a, error);
type future('a) = Js.Promise.t(result('a));
type uidata('a) = ('a, errors);
type uiresult('a) = Js.Promise.t(uidata('a));

type uiDataState = 
| Loading
| Loaded;

type setState('a) = ('a => 'a) => unit;