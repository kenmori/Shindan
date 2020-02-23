import * as Types from "./types";

export type Actions =
  | ReturnType<typeof postMailAddressChange>
  | ReturnType<typeof initMailAddressChange>
  | ReturnType<typeof onChangeMailAddressChange>;

export function postMailAddressChange(payload: any) {
  return {
    type: Types.POST_MAIL_ADDRESS_CHANGE,
    payload
  };
}

export function initMailAddressChange() {
  return {
    type: Types.INIT_MAIL_ADDRESS_CHANGE
  };
}

export function onChangeMailAddressChange(payload: "") {
  return {
    type: Types.ONCHANGE_MAIL_ADDRESS_CHANGE,
    payload
  };
}
