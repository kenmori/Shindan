import * as React from "react";
import * as ReactRedux from "react-redux";
import * as Operation from "store/ui/signup/operations";
import * as ActionsModal from "store/application/actions";
import Modal from "component/atom/Modal";
import * as Selector from "../store/application/selectors";
import { RouteComponentProps } from "react-router-dom";

type Props = {} & RouteComponentProps<{ token: string }>;

export function Component(props: Props) {
  const dispatch = ReactRedux.useDispatch();
  // const token = props.match.params.token
  const modalStatus = ReactRedux.useSelector(Selector.modalSelector);
  const token = props.location.search.split("=")[1]; // TODO
  React.useEffect(() => {
    const token = props.location.search.split("=")[1]; // TODO
    dispatch(Operation.done({ token }));
  }, [dispatch, token, props.location.search]);
  const onClose = () => {
    props.history.push("/");
    window.location.reload();
    dispatch(ActionsModal.closeModal());
  };
  return (
    <div>
      {modalStatus.modal.isOpen && (
        <Modal onClose={onClose}>
          <>
            <div>{modalStatus.modal.message}</div>
          </>
        </Modal>
      )}
    </div>
  );
}

export default Component;
