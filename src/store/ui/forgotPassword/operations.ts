import * as Actions from "./actions";
import client, { isSuccessResponse } from "modules/ApiClient";
import * as Store from "../../index";
import * as ActionsModal from "../../application/actions";
import * as ApplicationActions from "../../application/actions";
import * as EntitiyModal from "../../../domain/application/modal/entity";

export const postForgotPasswordRequest = (values: {
  input: { email: string };
  cookie: string;
}): Store.RootThunkAction<Promise<void>> => async (
  dispatch: any,
  _: any,
  _ctx: any
) => {
  try {
    const res = await client.post(
      "/users/password/change-request",
      values.input,
      { headers: { "X-CSRF-Token": `${values.cookie}` } }
    );
    if (isSuccessResponse(res)) {
      dispatch(
        ActionsModal.openModal({
          type: EntitiyModal.ModalType.Success,
          message: "メールアドレスにパスワード変更メールを送信しました",
        })
      );
      // dispatch(Actions.init())
    } else {
      dispatch(
        ApplicationActions.openModal({
          type: EntitiyModal.ModalType.Error,
          message: "",
        })
      );
    }
  } catch (e) {
    if (e.status === 409) {
      dispatch(
        ApplicationActions.openModal({
          type: EntitiyModal.ModalType.Error,
          message: `既にメールアドレスに送信しました ${e.message}`,
        })
      );
    } else if (e.message === "Request failed with status code 403") {
      // FIXME 時間がなくこちらで対応してしまった
      dispatch(
        ApplicationActions.openModal({
          type: EntitiyModal.ModalType.Error,
          message: `登録されていません ${e.message}`,
        })
      );
    } else {
      dispatch(
        ApplicationActions.openModal({
          type: EntitiyModal.ModalType.Error,
          message: `エラーが発生しました。 ${e.message}`,
        })
      );
    }
  }
  // dispatch(Actions.postForgotPassword(res.message))
};

export const clear = (): Store.RootThunkAction<void> => async (
  dispatch: any
) => {
  dispatch(Actions.initForgotPassword());
};

const isSuccessPasswordForgotDone = (res: any) => {
  return res.status === 200;
};
export const registerPassowrd = (values: {
  token: string;
  password: string;
}): Store.RootThunkAction<Promise<void>> => async (
  dispatch: any,
  _: any,
  _ctx: any
) => {
  try {
    const res = await client.patch("/users/password", values);

    if (isSuccessPasswordForgotDone(res)) {
      dispatch(
        ActionsModal.openModal({
          type: EntitiyModal.ModalType.Success,
          message: "パスワード変更が完了しました",
          go: "/login",
        })
      );
    } else {
      dispatch(
        ApplicationActions.openModal({
          type: EntitiyModal.ModalType.Error,
          message: "パスワード忘れが完了できませんでした",
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
