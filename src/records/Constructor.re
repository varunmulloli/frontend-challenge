type constructor = {
  constructorId: option(string),
  url: option(string),
  name: option(string),
  nationality: option(string),
};

let decodeConstructorUnsafe = (json: Js.Json.t) : constructor => Json.Decode.{
  constructorId: json |> optional(field("constructorId", string)),
  url: json |> optional(field("url", string)),
  name: json |> optional(field("name", string)),
  nationality: json |> optional(field("nationality", string)),
};

let decodeConstructor = (json: Js.Json.t) : Types.result(constructor) => {
  try (Belt.Result.Ok(decodeConstructorUnsafe(json))) {
  | _ => Belt.Result.Error("Error in decoding JSON to: constructor")
  };
};

let encodeConstructor = (constructorItem: constructor) : Js.Json.t => Json.Encode.(
  object_([
    ("constructorId", constructorItem.constructorId |> nullable(string)),
    ("url", constructorItem.url |> nullable(string)),
    ("name", constructorItem.name |> nullable(string)),
    ("nationality", constructorItem.nationality |> nullable(string)),
  ])
);

let decodeConstructorsUnsafe = (json: Js.Json.t) : list(constructor) => Json.Decode.(
  json |> list(decodeConstructorUnsafe)
);

let decodeConstructors = (json: Js.Json.t) : Types.result(list(constructor)) => {
  try (Belt.Result.Ok(decodeConstructorsUnsafe(json))) {
  | _ => Belt.Result.Error("Error in decoding JSON to: list(constructor)")
  };
};

let encodeConstructors = (constructors: list(constructor)) : Js.Json.t => Json.Encode.(
  constructors |> list(encodeConstructor)
);