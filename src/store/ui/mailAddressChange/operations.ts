import * as Actions from "./actions";
import client, { isSuccessResponse } from "modules/ApiClient";
import * as Store from "../../index";
import * as ActionsModal from "../../application/actions";
import * as ApplicationActions from "../../application/actions";
import * as EntitiyModal from "../../../domain/application/modal/entity";

export const postMailAddressChangeRequest = (values: {
  input: { email: string };
  cookie: string;
}): Store.RootThunkAction<Promise<void>> => async (dispatch, _, _ctx) => {
  try {
    const res = await client.post(
      "/users/me/email/change-request",
      values.input,
      { headers: { "X-CSRF-Token": `${values.cookie}` } }
    );
    if (isSuccessResponse(res)) {
      dispatch(
        ActionsModal.openModal({
          type: EntitiyModal.ModalType.Success,
          message: "メールアドレスに送信しました",
        })
      );
      // dispatch(Actions.init())
    } else {
      dispatch(
        ApplicationActions.openModal({
          type: EntitiyModal.ModalType.Error,
          message: "失敗しました",
        })
      );
    }
  } catch (e) {
    if (e.status === 409) {
      dispatch(
        ApplicationActions.openModal({
          type: EntitiyModal.ModalType.Error,
          message: `既にメールアドレスに送信されました ${e.message}`,
        })
      );
    } else {
      dispatch(
        ApplicationActions.openModal({
          type: EntitiyModal.ModalType.Error,
          message: `エラーが発生しました。暫く経ってからご利用ください ${e.message}`,
        })
      );
    }
  }
};

export const clear = (): Store.RootThunkAction<void> => async (dispatch) => {
  dispatch(Actions.initMailAddressChange());
};

const isSuccessMaillAddresChangeDone = (res: any) => {
  return res.status === 200;
};

export const patchMaillAddresChangeRegister = (values: {
  token: string;
}): Store.RootThunkAction<Promise<void>> => async (dispatch, _, _ctx) => {
  // TODO
  try {
    const res = await client.patch("/users/email", values);
    console.log(res);
    if (isSuccessMaillAddresChangeDone(res)) {
      dispatch(
        ActionsModal.openModal({
          type: EntitiyModal.ModalType.Success,
          message: "メールアドレス変更が完了しました",
        })
      );
    } else {
      dispatch(
        ApplicationActions.openModal({
          type: EntitiyModal.ModalType.Error,
          message: "失敗しました",
        })
      );
    }
  } catch (e) {
    dispatch(
      ApplicationActions.openModal({
        type: EntitiyModal.ModalType.Error,
        message: `エラーが発生しました。暫く経ってからご利用ください ${e.message}`,
      })
    );
  }
};
