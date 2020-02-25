import * as Redux from "redux";
import * as ModalActions from "./actions";
import * as ModalReducer from "./reducers";

export type Actions = ReturnType<typeof ModalActions.openModal>;

export type State = {
  modal: ModalReducer.State;
};

export const reducer = Redux.combineReducers<State>({
  modal: ModalReducer.reuducer
});
