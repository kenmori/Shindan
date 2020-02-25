import * as React from "react";
import * as ReactRedux from "react-redux";
import * as Operation from "store/ui/forgotPassword/operations";
import * as BaseLayout from "component/template/ContentWrap";
import * as ActionsModal from "store/application/actions";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as Selector from "../store/application/selectors";
import { RouteComponentProps } from "react-router-dom";
import Header from "component/atom/Header";
import Modal from "component/atom/Modal";
import * as Yup from "yup";
import { Formik } from "formik";
import Label from "component/atom/Label";
import FormErrorText from "component/atom/FormErrorText";

type Props = {} & RouteComponentProps<{ token: string }>;

export function Component(props: Props) {
  const dispatch = ReactRedux.useDispatch();

  const modalStatus = ReactRedux.useSelector(Selector.modalSelector);
  const onClose = () => {
    dispatch(ActionsModal.closeModal());
  };
  const token = props.location.search.split("=")[1]; // TODO
  const handleOnClickInModal = () => {
    props.history.push("/login");
    dispatch(ActionsModal.closeModal());
  };
  return (
    <div>
      {modalStatus.modal.type === "nomal" && (
        <>
          <Header>パスワード変更</Header>
          <BaseLayout.Component>
            <Formik
              initialValues={{ password: "" }}
              validationSchema={Yup.object({
                password: Yup.string()
                  .required("パスワードを入力してください.")
                  .min(10, "パスワードは少なくとも10文字以上にしてください")
                  .matches(
                    /[a-z]/,
                    "少なくとも1つ以上の小英文字を含む必要があります"
                  )
                  .matches(
                    /[A-Z]/,
                    "少なくとも1つ以上の大英文字を含む必要があります"
                  )
                  .matches(
                    /[a-zA-Z]+[^a-zA-Z\s]+/,
                    "少なくとも1つ以上の数字か特別文字(@,!,# 等)を含む必要があります"
                  )
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  // alert(JSON.stringify(values, null, 2))
                  setSubmitting(false);
                }, 400);
                dispatch(Operation.registerPassowrd({ ...values, token }));
              }}
            >
              {formik => (
                <form onSubmit={formik.handleSubmit}>
                  <LabelWrap>
                    <Label htmlfor="password">パスワード</Label>
                  </LabelWrap>
                  <InputWrap>
                    <StyledInput
                      id="password"
                      isError={
                        formik.touched.password && formik.errors.password
                      }
                      {...formik.getFieldProps("password")}
                    />
                  </InputWrap>
                  {formik.touched.password && formik.errors.password ? (
                    <FormErrorTextWrap>
                      <FormErrorText>{formik.errors.password}</FormErrorText>
                    </FormErrorTextWrap>
                  ) : null}
                  <ButtonWrap>
                    <ButtonStyled
                      type="submit"
                      disabled={
                        typeof formik.errors.password === "string" ||
                        !formik.touched.password
                      }
                    >
                      変更する
                    </ButtonStyled>
                  </ButtonWrap>
                </form>
              )}
            </Formik>
          </BaseLayout.Component>
        </>
      )}
      {modalStatus.modal.type === "success" && (
        <>
          <h2>新しいパスワードに変更しました</h2>
          <Link to="/login">ログインページへ</Link>
          <Link to="/">トップページへ</Link>
        </>
      )}

      {/* <Done.Component
        modal={modalStatus.modal}
        onClose={onClose}
        link="/login"
        h1Text="パスワード新しいパスワードを入力してください"
        linkText="ログインページへ"
      /> */}
      {modalStatus.modal.isOpen && (
        <Modal onClose={onClose}>
          <>
            <div>{modalStatus.modal.message}</div>
            <button onClick={() => handleOnClickInModal()}>
              ログインページへ
            </button>
          </>
        </Modal>
      )}
    </div>
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

const ButtonWrap = styled.div`
  padding-top: 10px;
`;
export default Component;
