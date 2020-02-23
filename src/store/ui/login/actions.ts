import * as Types from "./types";

// type InitialPayload = {
//   form: Types.SignUpForm
// }

export type Actions = ReturnType<typeof submit> | ReturnType<typeof init>;

export function submit(payload: any) {
  return {
    type: Types.SUBMIT,
    payload
  };
}

export function init() {
  return {
    type: Types.INIT
  };
}
