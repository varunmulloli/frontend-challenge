type time = {
  millis: option(string),
  time: option(string),
};

let decodeTimeUnsafe = (json: Js.Json.t) : time => Json.Decode.{
  millis: json |> optional(field("millis", string)),
  time: json |> optional(field("time", string)),
};

let decodeTime = (json: Js.Json.t) : Types.result(time) => {
  try (Belt.Result.Ok(decodeTimeUnsafe(json))) {
  | _ => Belt.Result.Error("Error in decoding JSON to: time")
  };
};

let encodeTime = (timeItem: time) : Js.Json.t => Json.Encode.(
  object_([
    ("millis", timeItem.millis |> nullable(string)),
    ("time", timeItem.time |> nullable(string)),
  ])
);
