import searchParam from "./Createurl";

describe("searchParam", () => {
  test('何も指定されていない場合、""が返ること', () => {
    const result = searchParam({});
    expect(result).toBe("");
  });
  test("teamが1つだけ検索されている場合", () => {
    const result = searchParam({ team: ["1"] });
    expect(result).toBe("?team=1");
  });
  test("teamが2つ検索されている場合", () => {
    const result = searchParam({ team: ["1", "2"] });
    expect(result).toBe("?team=1&team=2");
  });
  test("teamが空配列で渡っている場合", () => {
    const result = searchParam({ team: [] });
    expect(result).toBe("");
  });
  test("sportsが1つ検索されている場合", () => {
    const result = searchParam({ sports: ["1"] });
    expect(result).toBe("?sports=1");
  });
  // test('teamが{}だけ検索されている場合', () => {
  //   const result = searchParam({ team: ["fafafafa"] })
  //   expect(result).toBe('')
  // })
  test("sportsが2つ検索されている場合", () => {
    const result = searchParam({ sports: ["1", "2"] });
    expect(result).toBe("?sports=1&sports=2");
  });
  test("sportsが空配列で渡っている場合", () => {
    const result = searchParam({ sports: [] });
    expect(result).toBe("");
  });
  test("sportsがundefinedで渡っている場合", () => {
    const result = searchParam({ sports: undefined });
    expect(result).toBe("");
  });
  test("sort_directionがASCで渡っている場合", () => {
    const result = searchParam({ sort_direction: "ASC" });
    expect(result).toBe("?sort_direction=ASC");
  });
  test("sort_directionがASCで渡っている場合", () => {
    const result = searchParam({ sort_direction: "DESC" });
    expect(result).toBe("?sort_direction=DESC");
  });
  test('sort_directionが""で渡っている場合', () => {
    const result = searchParam({ sort_direction: "" });
    expect(result).toBe("");
  });
  test('offsetが""で渡っている場合', () => {
    const result = searchParam({ offset: "" });
    expect(result).toBe("");
  });
  test("offsetが30で渡っている場合", () => {
    const result = searchParam({ offset: "30" });
    expect(result).toBe("?offset=30");
  });
  test("sort_typeがnear_match_dateで渡っている場合", () => {
    const result = searchParam({ sort_type: "near_match_date" });
    expect(result).toBe("?sort_type=near_match_date");
  });
  test("sort_typeがunit_priceで渡っている場合", () => {
    const result = searchParam({ sort_type: "unit_price" });
    expect(result).toBe("?sort_type=unit_price");
  });
  test("複数指定渡っている場合", () => {
    const result = searchParam({
      sort_type: "unit_price",
      sports: ["2"],
      offset: "30",
      sort_direction: "DESC",
      team: ["1", "4"]
    });
    expect(result).toBe(
      "?sort_type=unit_price&sports=2&offset=30&sort_direction=DESC&team=1&team=4"
    );
  });
});
