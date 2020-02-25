import * as React from "react";
import Modal from "component/atom/Modal";
import { Link } from "react-router-dom";
import * as Entity from "../../domain/application/modal/entity";

type Props = {
  modal: Entity.ModalState;
  onClose(): void;
  h1Text: string;
  link: string;
  linkText: string;
};

export function Component(props: Props) {
  return (
    <div>
      {props.h1Text}
      <Link to={props.link}>{props.linkText}</Link>
      {props.modal.isOpen && (
        <Modal onClose={props.onClose}>
          <>
            <div>{props.modal.message}</div>
          </>
        </Modal>
      )}
    </div>
  );
}
export default Component;
