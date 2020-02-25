import * as Types from "./types";
import * as Redux from "redux";
import * as Actions from "./actions";
import produce from "immer";
import * as StoreTypes from "../../types";

export type State = {
  status: StoreTypes.Status;
  email: string;
  password: string;
};
export const initialState = {
  status: StoreTypes.Status.Pristine,
  email: "",
  password: ""
};

const actions = [Types.INIT, Types.SUBMIT];

const isAction = (action: Actions.Actions): action is Actions.Actions => {
  return actions.includes(action.type);
};

export const reducer: Redux.Reducer<State, Actions.Actions> = (
  state,
  action
) => {
  if (!isAction(action)) return initialState;
  if (!state) return initialState;
  switch (action.type) {
    case Types.SUBMIT:
      return produce<State>(state, draftState => {
        draftState.email = "";
        draftState.password = "";
      });
    case Types.INIT:
      return produce<State>(state, draftState => {
        draftState.email = "";
        draftState.password = "";
      });
    default:
      return state;
  }
};
