type fastestLap = {
  rank: option(string),
  lap: option(string),
  time: option(Time.time),
  averageSpeed: option(AverageSpeed.averageSpeed),
};

let decodeFastestLapUnsafe = (json: Js.Json.t) : fastestLap => Json.Decode.{
  rank: json |> optional(field("rank", string)),
  lap: json |> optional(field("lap", string)),
  time: json |> optional(field("Time", Time.decodeTimeUnsafe)),
  averageSpeed: json |> optional(field("AverageSpeed", AverageSpeed.decodeAverageSpeedUnsafe)),
};

let decodeFastestLap = (json: Js.Json.t) : Types.result(fastestLap) => {
  try (Belt.Result.Ok(decodeFastestLapUnsafe(json))) {
  | _ => Belt.Result.Error("Error in decoding JSON to: fastestLap")
  };
};

let encodeFastestLap = (fastestLapItem: fastestLap) : Js.Json.t => Json.Encode.(
  object_([
    ("rank", fastestLapItem.rank |> nullable(string)),
    ("lap", fastestLapItem.lap |> nullable(string)),
    ("Time", fastestLapItem.time |> nullable(Time.encodeTime)),
    ("AverageSpeed", fastestLapItem.averageSpeed |> nullable(AverageSpeed.encodeAverageSpeed)),
  ])
);
