import { forEach, keys } from "lodash";
import axios from "axios";

let postApi = (path: any, params: any, headers: any) => {
  if (!params) {
    params = {};
  }
  let _params = new URLSearchParams();
  forEach(keys(params), (val: any) => {
    _params.append(val, params[val]);
  });
  if (!headers) {
    headers = {};
  }
  return axios({
    method: "POST",
    url: path,
    data: _params,
    headers: headers
  });
};

export default postApi;
