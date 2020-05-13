type driver = {
  driverId: option(string),
  permanentNumber: option(string),
  code: option(string),
  url: option(string),
  givenName: option(string),
  familyName: option(string),
  dateOfBirth: option(string),
  nationality: option(string),
};

let decodeDriverUnsafe = (json: Js.Json.t) : driver => Json.Decode.{
  driverId: json |> optional(field("driverId", string)),
  permanentNumber: json |> optional(field("permanentNumber", string)),
  code: json |> optional(field("code", string)),
  url: json |> optional(field("url", string)),
  givenName: json |> optional(field("givenName", string)),
  familyName: json |> optional(field("familyName", string)),
  dateOfBirth: json |> optional(field("dateOfBirth", string)),
  nationality: json |> optional(field("nationality", string)),
};

let decodeDriver = (json: Js.Json.t) : Types.result(driver) => {
  try (Belt.Result.Ok(decodeDriverUnsafe(json))) {
  | _ => Belt.Result.Error("Error in decoding JSON to: driver")
  };
};

let encodeDriver = (driverItem: driver) : Js.Json.t => Json.Encode.(
  object_([
    ("driverId", driverItem.driverId |> nullable(string)),
    ("permanentNumber", driverItem.permanentNumber |> nullable(string)),
    ("code", driverItem.code |> nullable(string)),
    ("url", driverItem.url |> nullable(string)),
    ("givenName", driverItem.givenName |> nullable(string)),
    ("familyName", driverItem.familyName |> nullable(string)),
    ("dateOfBirth", driverItem.dateOfBirth |> nullable(string)),
    ("nationality", driverItem.nationality |> nullable(string)),
  ])
);
