import * as Types from "./types";
import * as Entity from "../../domain/application/modal/entity";
export type Actions = ReturnType<typeof openModal>;
export const openModal = (payload: Entity.ModalState) => {
  return {
    type: Types.OPEN_MODAL,
    payload
  };
};

export const closeModal = () => {
  return {
    type: Types.CLOSE_MODAL
  };
};
