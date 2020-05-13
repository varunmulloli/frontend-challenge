type mrdata = {
  xmlns: option(string),
  series: option(string),
  url: option(string),
  limit: option(string),
  offset: option(string),
  total: option(string),
  standingsTable: option(StandingsTable.standingsTable),
};

type response = {
  mrdata: option(mrdata),
};

let decodeMRDataUnsafe = (json: Js.Json.t) : mrdata => Json.Decode.{
  xmlns: json |> optional(field("xmlns", string)),
  series: json |> optional(field("series", string)),
  url: json |> optional(field("url", string)),
  limit: json |> optional(field("limit", string)),
  offset: json |> optional(field("offset", string)),
  total: json |> optional(field("total", string)),
  standingsTable: json |> optional(field("StandingsTable", StandingsTable.decodeStandingsTableUnsafe)),
};

let encodeMRData = (mrdataItem: mrdata) : Js.Json.t => Json.Encode.(
  object_([
    ("xmlns", mrdataItem.xmlns |> nullable(string)),
    ("series", mrdataItem.series |> nullable(string)),
    ("url", mrdataItem.url |> nullable(string)),
    ("limit", mrdataItem.limit |> nullable(string)),
    ("offset", mrdataItem.offset |> nullable(string)),
    ("total", mrdataItem.total |> nullable(string)),
    ("StandingsTable", mrdataItem.standingsTable |> nullable(StandingsTable.encodeStandingsTable)),
  ])
);

let decodeResponseUnsafe = (json: Js.Json.t) : response => Json.Decode.{
  mrdata: json |> optional(field("MRData", decodeMRDataUnsafe)),
};

let decodeResponse = (json: Js.Json.t) : Types.result(response) => {
  try (Belt.Result.Ok(decodeResponseUnsafe(json))) {
  | _ => Belt.Result.Error("Error in decoding JSON to: StandingsTableResponse")
  };
};

let encodeResponse = (responseItem: response) : Js.Json.t => Json.Encode.(
  object_([
    ("MRData", responseItem.mrdata |> nullable(encodeMRData)),
  ])
);

