open Jest;

describe("GeneralHelper", () => {
  open Expect;

  test("parseInt valid input", () => {
    let value = GeneralHelper.parseInt("1234");
    expect(value) |> toBe(Some(1234));
  });

  test("parseInt invalid input", () => {
    let value = GeneralHelper.parseInt("abcd");
    expect(value) |> toBe(None);
  });

  test("parseInt empty input", () => {
    let value = GeneralHelper.parseInt("");
    expect(value) |> toBe(None);
  });

  test("flattenOptionOfList has value", () => {
    let value = GeneralHelper.flattenOptionOfList(Some([1,2,3]));
    expect(value) |> toEqual([1,2,3]);
  });

  test("flattenOptionOfList has empty value", () => {
    let value = GeneralHelper.flattenOptionOfList(Some([]));
    expect(value) |> toEqual([]);
  });

  test("flattenOptionOfList has no value", () => {
    let value = GeneralHelper.flattenOptionOfList(None);
    expect(value) |> toEqual([]);
  });

  test("flattenListOfOption has some values", () => {
    let value = GeneralHelper.flattenListOfOption([Some(1),None,Some(2),None]);
    expect(value) |> toEqual([1,2]);
  });

  test("flattenListOfOption has only vaild values", () => {
    let value = GeneralHelper.flattenListOfOption([Some("a"),Some("b"),Some("c")]);
    expect(value) |> toEqual(["a","b","c"]);
  });

  test("flattenListOfOption has only invaild values", () => {
    let value = GeneralHelper.flattenListOfOption([None,None]);
    expect(value) |> toEqual([]);
  });

  test("flattenListOfOption has no values", () => {
    let value = GeneralHelper.flattenListOfOption([]);
    expect(value) |> toEqual([]);
  });

  test("joinListOfString has no values", () => {
    let value = GeneralHelper.joinListOfString(",",[]);
    expect(value) |> toBe("");
  });

  test("joinListOfString has only one value", () => {
    let value = GeneralHelper.joinListOfString(",",["a"]);
    expect(value) |> toBe("a");
  });

  test("joinListOfString has many values", () => {
    let value = GeneralHelper.joinListOfString(" ",["a","b","c","d"]);
    expect(value) |> toBe("a b c d");
  });
});