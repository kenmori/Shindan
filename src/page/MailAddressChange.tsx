import * as React from "react";
// import * as Context from 'modules/ApplicationContext'
import * as Helmet from "react-helmet";
import styled from "styled-components";
import FormErrorText from "component/atom/FormErrorText";
import { splitCsrfCookie } from "modules/ApiClient";
import Modal from "component/atom/Modal";
import * as Entity from "../domain/application/modal/entity";
import * as Loading from "component/template/Loading";
import * as StoreType from "store/types";
import * as ReactRedux from "react-redux";
import * as Operation from "store/ui/mailAddressChange/operations";
import * as Selector from "store/ui/mailAddressChange/selectores";
import * as SelectorApplication from "store/application/selectors";
import * as Yup from "yup";
import { Formik } from "formik";
import * as ActionsModal from "store/application/actions";
import Header from "component/atom/Header";
import * as BaseLayout from "component/template/ContentWrap";
import Label from "component/atom/Label";

type Props = {
  modal: Entity.ModalState;
};
export function Component(_: Props) {
  // const applicationContext = React.useContext(Context.default)
  const status = ReactRedux.useSelector(Selector.statusSelector);
  const modalStatus = ReactRedux.useSelector(SelectorApplication.modalSelector);
  const dispatch = ReactRedux.useDispatch();

  React.useEffect(() => {
    if (status === StoreType.Status.Pristine) {
      dispatch(Operation.clear());
    }
  }, [status, dispatch]);
  if (status === StoreType.Status.Pristine) {
    return <Loading.Component />;
  }
  const onClose = () => {
    dispatch(ActionsModal.closeModal());
  };
  return (
    <>
      <Helmet.Helmet title="メールアドレス変更 | TerraceTech" />
      <Header>メールアドレス変更</Header>
      {/* <div>
        現在のメールアドレス: {applicationContext.applicationState.user.email}
      </div> */}
      <Formik
        initialValues={{ email: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("正しいメールアドレスを入力してください")
            .required("必須です")
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2))
            setSubmitting(false);
          }, 400);
          dispatch(
            Operation.postMailAddressChangeRequest({
              input: values,
              cookie: splitCsrfCookie()
            })
          );
        }}
      >
        {formik => (
          <BaseLayout.Component>
            <form onSubmit={formik.handleSubmit}>
              <LabelWrap>
                <Label htmlfor="email">変更するメールアドレス</Label>
              </LabelWrap>
              <InputWrap>
                <StyledInput
                  isError={formik.touched.email && formik.errors.email}
                  id="email"
                  {...formik.getFieldProps("email")}
                />
              </InputWrap>
              {formik.touched.email && formik.errors.email ? (
                <FormErrorTextWrap>
                  <FormErrorText>{formik.errors.email}</FormErrorText>
                </FormErrorTextWrap>
              ) : null}
              <ButtonWrap>
                <ButtonStyled
                  type="submit"
                  disabled={
                    typeof formik.errors.email === "string" ||
                    !formik.touched.email
                  }
                >
                  メールアドレス変更送信
                </ButtonStyled>
              </ButtonWrap>
              {/* <button
                type="submit"
                disabled={
                  typeof formik.errors.email === 'string' ||
                  !formik.touched.email
                }
              >
                Submit
              </button> */}
            </form>
          </BaseLayout.Component>
        )}
      </Formik>
      {modalStatus.modal.isOpen && (
        <Modal onClose={onClose}>
          <>
            <div>{modalStatus.modal.message}</div>
          </>
        </Modal>
      )}
    </>
  );
}

const InputWrap = styled.div`
  padding-top: 10px;
`;
const FormErrorTextWrap = styled.div`
  padding-top: 10px;
`;
const LabelWrap = styled.div`
  padding-top: 16px;
`;

const ButtonWrap = styled.div`
  padding-top: 10px;
`;

const ButtonStyled = styled.button`
  background: #f2b440;
  font-family: HiraginoSans-W6;
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 1px;
  text-align: center;
  padding: 18px 0;
  width: 80%;
  display: block;
  margin: 0 auto;
  &:disabled {
    background: #9b9b9b;
    text-shadow: none;
  }
`;

const StyledInput = styled.input<{ isError: boolean | undefined | string }>`
  border: 1px solid ${props => (props.isError ? "#D0021B" : "#e2e2e2")};
  height: 50px;
  width: 100%;
`;
