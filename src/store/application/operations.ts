import * as ApplicationActions from "./actions";
import * as Store from "../index";
import client, { isSuccessResponse } from "modules/ApiClient";
import * as H from "history";

// TODO any
// const isSuccessMe = (res: any) => {
//   return res.status === 200
// }
export const init = (
  history: H.History<any>
): Store.RootThunkAction<Promise<void>> => async (dispatch, _, _ctx) => {
  const res = await client.post("/users/me");

  if (isSuccessResponse(res)) {
    // dispatch(Actions.init())
    history.push("/players");
  } else {
    history.push("/login");
    dispatch(ApplicationActions.openModal({ message: "失敗しました" }));
  }
};

export const logout = (): Store.RootThunkAction<Promise<
  void
>> => async dispatch => {
  const res = await client.get("/auth/logout");
  if (isSuccessResponse(res)) {
    window.location.reload();
    window.location.href = "/login";

    console.log(document.cookie);
    dispatch(ApplicationActions.openModal({ message: "ログアウトしました" }));
  } else {
    dispatch(ApplicationActions.openModal({ message: "失敗しました" }));
  }
};
