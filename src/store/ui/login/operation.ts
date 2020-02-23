// import * as Actions from './actions'
// import { AxiosPromise } from 'axios'
import client, { isSuccessResponse } from "modules/ApiClient";
import * as H from "history";
// import postApi from 'modules/postApi'
import * as ApplicationActions from "../../application/actions";
// import * as Types from './types'
import * as Store from "../../index";
import * as EntitiyModal from "../../../domain/application/modal/entity";

// axios.defaults.headers.post['Content-Type'] =
//   'application/x-www-form-urlencoded'
// Types.SignUpForm は payload型。reducerでも当てられている
// TODO any
export const submit = (
  values: any,
  history: H.History<any>
): Store.RootThunkAction<Promise<void>> => async (
  dispatch: any,
  _: any,
  _ctx: any
) => {
  try {
    const res: any = await client.post("/auth/login", values);
    if (isSuccessResponse(res)) {
      history.push("/");
      window.location.reload();
    } else {
      dispatch(ApplicationActions.openModal({ message: "" }));
    }
  } catch (e) {
    dispatch(
      ApplicationActions.openModal({
        type: EntitiyModal.ModalType.Error,
        message: `パスワードかメールアドレス一致しません ${e.message}`
      })
    );
  }
  // .then(e => {
  //   console.log('success', e)
  //   history.push('/')
  // })
  // .catch(e => {
  //   if (e.isAxiosError) {
  //     dispatch(ApplicationActions.openModal({ message: e.message }))
  //   }
  // history.push('/error')
};
// .catch(e => {

//   if(e.status === 400) {
//     dispatch(ApplicationActions.openModal(e.message))
//   }})
// }

// const isStatusOK = (res: any) => {
//   return res.status === 200
// }
// const isError = (res: any): res is TerraceTechAPI.ErrorResponse => {
//   return res.status !== 200
// }
