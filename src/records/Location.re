type location = {
  lat: option(string),
  long: option(string),
  locality: option(string),
  country: option(string),
};

let decodeLocationUnsafe = (json: Js.Json.t) : location => Json.Decode.{
  lat: json |> optional(field("lat", string)),
  long: json |> optional(field("long", string)),
  locality: json |> optional(field("locality", string)),
  country: json |> optional(field("country", string)),
};

let decodeLocation = (json: Js.Json.t) : Types.result(location) => {
  try (Belt.Result.Ok(decodeLocationUnsafe(json))) {
  | _ => Belt.Result.Error("Error in decoding JSON to: location")
  };
};

let encodeLocation = (locationItem: location) : Js.Json.t => Json.Encode.(
  object_([
    ("lat", locationItem.lat |> nullable(string)),
    ("long", locationItem.long |> nullable(string)),
    ("locality", locationItem.locality |> nullable(string)),
    ("country", locationItem.country |> nullable(string)),
  ])
);
