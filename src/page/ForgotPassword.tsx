import * as React from "react";
import * as Helmet from "react-helmet";
import * as Yup from "yup";
import styled from "styled-components";
import { Formik } from "formik";
import * as Loading from "component/template/Loading";
import * as BaseLayout from "component/template/ContentWrap";
import * as StoreType from "store/types";
import * as ReactRedux from "react-redux";
import * as Operation from "store/ui/forgotPassword/operations";
import * as Selector from "store/ui/forgotPassword/selectors";
import * as SelectorModal from "store/application/selectors";
import * as ActionsModal from "store/application/actions";
import Modal from "component/atom/Modal";
import { splitCsrfCookie } from "modules/ApiClient";
import Header from "component/atom/Header";
import FormErrorText from "component/atom/FormErrorText";
import Label from "component/atom/Label";

type Props = {};
export function Component(_: Props) {
  const status = ReactRedux.useSelector(Selector.statusSelector);
  const modalStatus = ReactRedux.useSelector(SelectorModal.modalSelector);
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
      <Helmet.Helmet title="パスワードを忘れた方 | TerraceTech" />
      <Header>パスワードを忘れた方</Header>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("正しいメールアドレスを入力してください")
            .required("必須です"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2))
            setSubmitting(false);
          }, 400);
          dispatch(
            Operation.postForgotPasswordRequest({
              input: values,
              cookie: splitCsrfCookie(),
            })
          );
        }}
      >
        {(formik) => (
          <BaseLayout.Component>
            <form onSubmit={formik.handleSubmit}>
              <Label htmlfor="email">E-mail</Label>
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
                  パスワード再発行
                </ButtonStyled>
              </ButtonWrap>
            </form>
          </BaseLayout.Component>
        )}
      </Formik>
      {modalStatus.modal.type === ("success" || "error") &&
        modalStatus.modal.isOpen && (
          <Modal onClose={onClose}>
            <div>{modalStatus.modal.message}</div>
          </Modal>
        )}
    </>
  );
}

const InputWrap = styled.div`
  padding-top: 10px;
`;

const StyledInput = styled.input<{ isError: boolean | undefined | string }>`
  border: 1px solid ${(props) => (props.isError ? "#D0021B" : "#e2e2e2")};
  height: 50px;
  width: 100%;
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

const FormErrorTextWrap = styled.div`
  padding-top: 10px;
`;

const ButtonWrap = styled.div`
  padding-top: 10px;
`;

export default Component;
