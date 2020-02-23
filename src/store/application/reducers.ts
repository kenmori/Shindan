import * as ReactRedux from "redux";
import * as Type from "./types";
import * as Actions from "./actions";
import produce from "immer";
import * as Entity from "../../domain/application/modal/entity";

export type State = {
  modal: Entity.ModalState;
};

const initialState = {
  modal: {
    isOpen: false,
    message: "",
    type: Entity.ModalType.Normal,
    go: "",
    back: ""
  }
};
export const reuducer: ReactRedux.Reducer<State, Actions.Actions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case Type.OPEN_MODAL:
      return produce(state, draftState => {
        draftState.modal.isOpen = true;
        draftState.modal.message = action.payload.message;
        draftState.modal.type = action.payload.type;
      });
    case Type.CLOSE_MODAL:
      return produce(state, draftState => {
        draftState.modal.isOpen = false;
        draftState.modal.message = "";
        draftState.modal.type = Entity.ModalType.Normal;
      });
    default:
      return state;
  }
};
