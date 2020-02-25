import * as Store from "../index";
export const modalSelector = (
  state: Store.RootState
): Store.ApplicationState["modal"] => {
  return state.application.modal;
};
