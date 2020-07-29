import * as ActionsModal from "../../application/actions";
import * as ApplicationActions from "../../application/actions";
import * as EntitiyModal from "../../../domain/application/modal/entity";
import client, { isSuccessResponse } from "modules/ApiClient";
import * as Store from "../../index";

export const submit = (values: {
  input: { email: string; password: string };
  cookie: string;
}): Store.RootThunkAction<Promise<void>> => async (dispatch, _, _ctx) => {
  // TODO
  try {
    const res = await client.post("/auth/register-request", values.input, {
      headers: { "X-CSRF-Token": `${values.cookie}` },
    });
    if (isSuccessResponse(res)) {
      dispatch(
        ActionsModal.openModal({
          type: EntitiyModal.ModalType.Success,
          message: "メールアドレスに本登録メールを送信しました",
        })
      );
      // dispatch(Actions.init())
    } else {
      dispatch(
        ApplicationActions.openModal({
          type: EntitiyModal.ModalType.Error,
          message: "fafafa",
        })
      );
    }
  } catch (e) {
    dispatch(
      ApplicationActions.openModal({
        type: EntitiyModal.ModalType.Error,
        message: `エラーが発生しました。 ${e.message}`,
      })
    );
  }
};

const isSuccessRegisterDone = (res: any) => {
  return res.status === 204 || res.status === 200;
};
export const done = (values: {
  token: string;
}): Store.RootThunkAction<Promise<void>> => async (dispatch, _, _ctx) => {
  // TODO
  try {
    const res = await client.post("/auth/register", {
      token: `${values.token}`,
    });
    if (isSuccessRegisterDone(res)) {
      dispatch(
        ActionsModal.openModal({
          type: EntitiyModal.ModalType.Success,
          message: "登録完了しました",
          go: "/",
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
    if (e.response.status === 409) {
      dispatch(
        ApplicationActions.openModal({
          type: EntitiyModal.ModalType.Success,
          message: `そのユーザーは既に登録済みです ${e.message}`,
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
