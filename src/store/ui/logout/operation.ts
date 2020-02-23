// import * as Actions from './actions'
import * as ApplicationActions from "../../application/actions";
import client, { isSuccessResponse } from "modules/ApiClient";
// import * as Types from './types'
import * as Store from "../../index";
// import * as Entitiy from '../../../domain/signup/entity'
// import * as ApplicationEntitiy from '../../../domain/signup/entity'

// Types.SignUpForm は payload型。reducerでも当てられている
// TODO any
export const logout = (
  values: any
): Store.RootThunkAction<Promise<void>> => async (
  dispatch: any,
  _: any,
  _ctx: any
) => {
  const res = await client.post(""); // TODO
  if (isSuccessResponse(res)) {
    dispatch(ApplicationActions.openModal({ message: "" }));
  } else {
    dispatch(ApplicationActions.openModal({ message: "失敗" }));
  }
  // dispatch(Actions.init())
};
