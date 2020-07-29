const createSearchPath = (searchState: { [key: string]: string | null }) => {
  let path = "";
  // すべて検索されていない場合
  if (
    searchState.sports === null &&
    searchState.team === null &&
    searchState.page === null
  ) {
    path = "";
  } else {
    // スポーツだけが検索されていない場合
    if (searchState.sports === null && searchState.team && searchState.page) {
      path = `?sports=${1}&team=${searchState.team}&page=${searchState.page}`;
    } else if (
      searchState.sports === null &&
      searchState.team === null &&
      typeof searchState.page === "string"
    ) {
      //　ページだけが検索されている
      path = `?sports=${1}&team=${1}&page=${searchState.page}`;
    } else if (
      typeof searchState.team === "string" &&
      typeof searchState.page === null
    ) {
      // 検索されていない
      path = `?sports=${1}&team=${searchState.team}&page=${1}`;
    } else {
      if (
        searchState.sports &&
        typeof searchState.team === "string" &&
        searchState.page === null
      ) {
        path = `?sports=${searchState.sports}&team=${
          searchState.team
        }&page=${1}`;
        //　ページだけが検索されていない
      } else if (
        searchState.sports &&
        typeof searchState.team === "string" &&
        typeof searchState.page === "string"
      ) {
        //　全て検索されている
        path = `?sports=${searchState.sports}&team=${searchState.team}&page=${searchState.page}`;
      } else if (
        searchState.sports &&
        typeof searchState.team === null &&
        typeof searchState.page === "string"
      ) {
        path = `?sports=${searchState.sports}&team=${1}&page=${
          searchState.page
        }`;
      } else if (
        searchState.sports === null &&
        searchState.team === null &&
        searchState.page
      ) {
        path = `?sports=${1}&team=${1}&page=${searchState.page}`;
      } else if (
        searchState.sports &&
        searchState.team === null &&
        searchState.page === null
      ) {
        path = `?sports=${searchState.sports}&team=${1}&page=${1}`;
      } else if (
        searchState.sports === null &&
        searchState.team &&
        searchState.page === null
      ) {
        path = `?sports=${1}&team=${searchState.team}&page=${1}`;
      }
    }
  }
  return path;
};

export default createSearchPath;
