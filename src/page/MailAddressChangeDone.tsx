import * as React from "react";
import * as ReactRedux from "react-redux";
import * as Operation from "store/ui/mailAddressChange/operations";
import * as ActionsModal from "store/application/actions";
import Modal from "component/atom/Modal";
import * as Selector from "../store/application/selectors";
import { RouteComponentProps } from "react-router-dom";

type Props = {} & RouteComponentProps<{ token: string }>;

export function Component(props: Props) {
  const dispatch = ReactRedux.useDispatch();
  const token = props.location.search.split("=")[1]; // TODO
  const modalStatus = ReactRedux.useSelector(Selector.modalSelector);
  React.useEffect(() => {
    dispatch(Operation.patchMaillAddresChangeRegister({ token }));
  }, [dispatch, token]);
  const onClose = () => {
    props.history.push("/");
    window.location.reload(); // TODO 更新を反映する為に。ひょっとしたら今はいらないかも
    dispatch(ActionsModal.closeModal());
  };
  return (
    <div>
      {modalStatus.modal.type === "nomal" && (
        <>
          <h2>メールアドレス変更が完了しました</h2>
        </>
      )}
      {modalStatus.modal.type === "error" && (
        <>
          <h2>メールアドレス変更が完了していません</h2>
        </>
      )}
      {modalStatus.modal.type === "success" && (
        <>
          <h2>メールアドレス変更が完了しました</h2>
        </>
      )}
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
