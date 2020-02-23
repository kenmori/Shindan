import * as Store from "../../index";
export const statusSelector = (
  state: Store.RootState
): Store.UiState["mailAddressChange"]["status"] => {
  return state.ui.mailAddressChange.status;
};
