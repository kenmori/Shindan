type SearchStateType = {
  [key in "sort_type" | "limit" | "offset" | "sort_direction"]?: null | string;
} & { sports?: string[]; teams?: string[] };

export const searchParam = (state: SearchStateType): string => {
  var path = "";
  var first = true;
  for (let [key, value] of Object.entries(state)) {
    if (Array.isArray(value)) {
      value.forEach((v, i) => {
        console.log(key, value);
        if (v !== "") {
          if (first) {
            path += `?${key}=${v}`;
          } else {
            path += `&${key}=${v}`;
          }
        } else {
          path += "";
        }
        first = false;
      });
    } else {
      if (!!value) {
        if (first) {
          path += `?${key}=${value}`;
        } else {
          path += `&${key}=${value}`;
        }
      } else {
        path += "";
      }
      first = false;
    }
  }
  return path;
};

export default searchParam;
