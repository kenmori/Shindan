import * as Types from "./types";

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
