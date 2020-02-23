import * as Types from "./types";

export type Actions =
  | ReturnType<typeof postForgotPassword>
  | ReturnType<typeof initForgotPassword>
  | ReturnType<typeof onChangePassword>;

export function postForgotPassword(payload: any) {
  return {
    type: Types.POST_FORGOT_PASSWORD,
    payload
  };
}

export function initForgotPassword() {
  return {
    type: Types.INIT_FORGOT_PASSWORD
  };
}

export function onChangePassword(payload: "") {
  return {
    type: Types.ONCHANGE_PASSWORD,
    payload
  };
}
