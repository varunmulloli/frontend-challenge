type circuit = {
  circuitId: option(string),
  url: option(string),
  circuitName: option(string),
  location: option(Location.location),
};

let decodeCircuitUnsafe = (json: Js.Json.t) : circuit => Json.Decode.{
  circuitId: json |> optional(field("circuitId", string)),
  url: json |> optional(field("url", string)),
  circuitName: json |> optional(field("circuitName", string)),
  location: json |> optional(field("Location", Location.decodeLocationUnsafe)),
};

let decodeCircuit = (json: Js.Json.t) : Types.result(circuit) => {
  try (Belt.Result.Ok(decodeCircuitUnsafe(json))) {
  | _ => Belt.Result.Error("Error in decoding JSON to: circuit")
  };
};

let encodeCircuit = (circuitItem: circuit) : Js.Json.t => Json.Encode.(
  object_([
    ("circuitId", circuitItem.circuitId |> nullable(string)),
    ("url", circuitItem.url |> nullable(string)),
    ("circuitName", circuitItem.circuitName |> nullable(string)),
    ("Location", circuitItem.location |> nullable(Location.encodeLocation)),
  ])
);
