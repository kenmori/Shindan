// import * as React from 'react'
import * as Store from "../../index";
export const statusSelector = (
  state: Store.RootState
): Store.UiState["login"]["status"] => {
  return state.ui.login.status;
};
