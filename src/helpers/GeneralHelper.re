let parseInt = (s: string) : option(int) => {
  try (Some(int_of_string(s))) {
  | _ => None
  };
};

let flattenOptionOfList = (o: option(list('a))) : list('a) => {
  switch (o) {
  | Some(l) => l
  | None => []
  };
};

let flattenListOfOption = (l: list(option('a))) : list('a) => {
  List.fold_right(
    (next: option('a), agg: list('a)) => 
      switch (next) {
      | Some(x) => [x, ...agg]
      | None => agg
      },
    l,
    []
  );
};

let rec joinListOfString = (separator: string, l: list(string)) : string => {
  switch(l) {
  | [] => ""
  | [tail] => tail
  | [head, ...tail] => head ++ separator ++ joinListOfString(separator, tail)
  };
};