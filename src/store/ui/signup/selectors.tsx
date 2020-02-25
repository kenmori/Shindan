import * as Store from "../../index";
export const statusSelector = (
  state: Store.RootState
): Store.UiState["signup"]["status"] => {
  return state.ui.signup.status;
};
