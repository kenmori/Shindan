import * as React from "react";
import * as ReactRedux from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import { Formik } from "formik";
import * as Operation from "store/ui/login/operation";
import * as ActionsModal from "store/application/actions";
import * as Helmet from "react-helmet";
import * as H from "history";
import Modal from "component/atom/Modal";
import * as Selector from "../store/application/selectors";
import Header from "component/atom/Header";
import Label from "component/atom/Label";
import styled from "styled-components";
import COLOR from "component/const/Color";
import FormErrorText from "component/atom/FormErrorText";
import * as BaseLayout from "component/template/ContentWrap";

type Props = {
  // @ts-ignore
  history: H.History<any>;
};
export function Component(props: Props) {
  const dispatch = ReactRedux.useDispatch();
  const modalStatus = ReactRedux.useSelector(Selector.modalSelector);
  return (
    <>
      <Helmet.Helmet title="ログインページ | TerraceTech" />
      <Header>ログイン</Header>
      <div>
        <Formik
          initialValues={{ password: "", email: "" }}
          validationSchema={Yup.object({
            password: Yup.string().required("パスワードを入力してください."),
            email: Yup.string().required("メールアドレスを入力してください"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(Operation.submit(values, props.history));
          }}
        >
          {(formik) => (
            <>
              <BaseLayout.Component>
                <form onSubmit={formik.handleSubmit}>
                  <LabelWrap>
                    <Label htmlfor="email">E-mail</Label>
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
                  <LabelWrap>
                    <Label htmlfor="password">パスワード</Label>
                    <ForgotLinkWrap>
                      <Link to="/forgotpassword">パスワード忘れた方</Link>
                    </ForgotLinkWrap>
                  </LabelWrap>
                  <InputWrap>
                    <StyledInput
                      isError={
                        formik.touched.password && formik.errors.password
                      }
                      id="password"
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
                        !formik.touched.password || !!formik.errors.password
                      }
                    >
                      ログイン
                    </ButtonStyled>
                  </ButtonWrap>
                </form>
              </BaseLayout.Component>
            </>
          )}
        </Formik>
        <LinkWrap>
          <Link to="/signup">新規登録はこちら</Link>
        </LinkWrap>

        {modalStatus.modal.isOpen && (
          <Modal
            onClose={() => {
              dispatch(ActionsModal.closeModal());
            }}
          >
            <>
              <div>{modalStatus.modal.message}</div>
            </>
          </Modal>
        )}
      </div>
    </>
  );
}

const LinkWrap = styled.div`
  padding: 30px 0;
  text-align: center;
  > a {
    text-decoration: underline;
    font-size: 14px;
    color: ${COLOR.textlink};
  }
`;

const ButtonWrap = styled.div`
  padding-top: 10px;
  margin-top: 30px;
`;
const ForgotLinkWrap = styled.span`
  font-size: 14px;
  color: #4a90e2;
  text-align: right;
  position: absolute;
  right: 16px;
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
const LabelWrap = styled.div`
  padding-top: 16px;
`;
const InputWrap = styled.div`
  padding-top: 10px;
`;

const FormErrorTextWrap = styled.div`
  padding-top: 10px;
`;

const StyledInput = styled.input<{ isError: boolean | undefined | string }>`
  border: 1px solid ${(props) => (props.isError ? "#D0021B" : "#e2e2e2")};
  height: 50px;
  width: 100%;
`;

export default Component;
