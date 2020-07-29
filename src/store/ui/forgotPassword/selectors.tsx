import * as Store from "../../index";
export const statusSelector = (
  state: Store.RootState
): Store.UiState["forgotPassword"]["status"] => {
  return state.ui.forgotPassword.status;
};
