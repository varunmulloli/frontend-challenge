type averageSpeed = {
  units: option(string),
  speed: option(string),
};

let decodeAverageSpeedUnsafe = (json: Js.Json.t) : averageSpeed => Json.Decode.{
  units: json |> optional(field("units", string)),
  speed: json |> optional(field("speed", string)),
};

let decodeAverageSpeed = (json: Js.Json.t) : Types.result(averageSpeed) => {
  try (Belt.Result.Ok(decodeAverageSpeedUnsafe(json))) {
  | _ => Belt.Result.Error("Error in decoding JSON to: averageSpeed")
  };
};

let encodeAverageSpeed = (averageSpeedItem: averageSpeed) : Js.Json.t => Json.Encode.(
  object_([
    ("units", averageSpeedItem.units |> nullable(string)),
    ("speed", averageSpeedItem.speed |> nullable(string)),
  ])
);
