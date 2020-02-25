// import * as Store from '../../index'
import * as Actions from "./actions";
import * as Types from "./types";
import * as ReactRedux from "redux";
import * as StoreTypes from "../../types";
import produce from "immer";

export type State = {
  status: StoreTypes.Status;
};
const initialState: State = {
  status: StoreTypes.Status.Pristine
};

const actions = [Types.INIT, Types.SUBMIT];

const isActions = (action: Actions.Actions): action is Actions.Actions => {
  return actions.includes(action.type);
};

export const reducer: ReactRedux.Reducer<State, Actions.Actions> = (
  state = initialState,
  action
) => {
  if (!isActions(action)) return initialState;
  if (!state) return initialState;
  switch (action.type) {
    case Types.INIT:
      return produce<State>(state, draftState => {
        // draftState.initialData = action.payload
      });
    case Types.SUBMIT:
      return produce<State>(state, draftState => {
        // draftState.initialData = action.payload
      });
    default:
      return state;
  }
};
