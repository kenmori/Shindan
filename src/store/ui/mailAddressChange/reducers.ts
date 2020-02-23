import * as Redux from "redux";
import produce from "immer";
import * as StoreTypes from "../../types";

import * as Actions from "./actions";
import * as Types from "./types";

export type State = {
  status: StoreTypes.Status;
  values: { email: string };
  hasError: { messages: string[] } | null;
};

const initialState: State = {
  status: StoreTypes.Status.Pristine,
  values: { email: "" },
  hasError: null
};

const actions = [
  Types.POST_MAIL_ADDRESS_CHANGE,
  Types.INIT_MAIL_ADDRESS_CHANGE,
  Types.ONCHANGE_MAIL_ADDRESS_CHANGE
];

const isActions = (action: Actions.Actions): action is Actions.Actions => {
  return actions.includes(action.type);
};

export const reducer: Redux.Reducer<State, Actions.Actions> = (
  state = initialState,
  action
) => {
  if (!isActions(action)) return initialState;
  if (!state) return initialState;
  switch (action.type) {
    case Types.ONCHANGE_MAIL_ADDRESS_CHANGE:
      return produce<State>(state, draftState => {
        draftState.values = { email: action.payload };
        draftState.status = StoreTypes.Status.Valid;
      });
    case Types.INIT_MAIL_ADDRESS_CHANGE:
      return produce<State>(state, draftState => {
        draftState.values = { email: "" };
        draftState.status = StoreTypes.Status.Valid;
      });
    case Types.POST_MAIL_ADDRESS_CHANGE:
      return produce<State>(state, draftState => {
        draftState.values = { email: "" };
        draftState.status = StoreTypes.Status.Valid;
      });
    default:
      return state;
  }
};
