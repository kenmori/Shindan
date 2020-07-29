import createSearch from "./Search";

describe("createSaerchのテスト", () => {
  test("すべて検索されていない場合", () => {
    const result = createSearch({ team: null, page: null, sports: null });
    expect(result).toBe("");
  });
  test("スポーツだけが検索されていない場合", () => {
    const result = createSearch({ team: "2", page: "2", sports: null });
    expect(result).toBe("?sports=1&team=2&page=2");
  });

  test("ページだけが検索されている", () => {
    const result = createSearch({ team: null, page: "3", sports: null });
    expect(result).toBe("?sports=1&team=1&page=3");
  });
  test("urlにsportsだけ指定されている時", () => {
    const result = createSearch({ team: null, page: null, sports: "2" });
    expect(result).toBe("?sports=2&team=1&page=1");
  });
  test("urlにteamだけ指定されている時", () => {
    const result = createSearch({ team: "2", page: null, sports: null });
    expect(result).toBe("?sports=1&team=2&page=1");
  });
  test("urlにteamとsportsが指定されている時", () => {
    const result = createSearch({ team: "2", page: null, sports: "3" });
    expect(result).toBe("?sports=3&team=2&page=1");
  });
  test("urlにpageだけが指定されている時", () => {
    const result = createSearch({ team: null, page: "2", sports: null });
    expect(result).toBe("?sports=1&team=1&page=2");
  });
  test("urlにteamとsportsとページ指定されている時", () => {
    const result = createSearch({ team: "2", page: "2", sports: "3" });
    expect(result).toBe("?sports=3&team=2&page=2");
  });
});
