import * as React from "react";
import * as ReactRedux from "react-redux";
import * as Operation from "store/ui/signup/operations";
import * as ActionsModal from "store/application/actions";
import { splitCsrfCookie } from "modules/ApiClient";
import * as Yup from "yup";
import { Formik } from "formik";
import Header from "component/atom/Header";
import Label from "component/atom/Label";
import Modal from "component/atom/Modal";
import Text from "component/atom/Text";
import FormErrorText from "component/atom/FormErrorText";
import * as BaseLayout from "component/template/ContentWrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Terms from "component/template/Terms";
import * as Selector from "../store/application/selectors";
import * as H from "history";
import Color from "component/const/Color";
enum TermState {
  INIT,
  NOTREAD,
  ALLREADYREAD
}

type Props = {
  history: H.History<any>;
};

export function Component(props: Props) {
  const dispatch = ReactRedux.useDispatch();
  const [redTermState, setTermRead] = React.useState({
    isAllreadyReadTerm: TermState.INIT
  });
  // const validationSchema = yup.object().shape({
  //   email: yup.string().email().required()
  // })
  const modalStatus = ReactRedux.useSelector(Selector.modalSelector);
  const [modalState, setModal] = React.useState({ isModalShown: false });

  const onCloseTerm = () => {
    setModal({ isModalShown: false });
    setTermRead({ isAllreadyReadTerm: TermState.ALLREADYREAD });
  };
  const onClose = () => {
    window.location.reload();
    dispatch(ActionsModal.closeModal());
    props.history.push("/");
  };
  const handleApprove = React.useCallback(() => {
    if (
      redTermState.isAllreadyReadTerm === 0 ||
      redTermState.isAllreadyReadTerm === 1
    ) {
      setTermRead({ isAllreadyReadTerm: TermState.ALLREADYREAD });
    } else {
      setTermRead({ isAllreadyReadTerm: TermState.NOTREAD });
    }
  }, [redTermState.isAllreadyReadTerm]);
  const handleNotApprove = React.useCallback(() => {
    setModal({ isModalShown: false });
    setTermRead({ isAllreadyReadTerm: TermState.NOTREAD });
    window.location.reload(); // TODO したくない
  }, [setModal, setTermRead]);
  console.log(
    redTermState.isAllreadyReadTerm,
    "redTermState.isAllreadyReadTerm"
  );
  console.log(
    redTermState.isAllreadyReadTerm,
    redTermState.isAllreadyReadTerm === 0
  );
  return (
    <>
      <Header>新規登録</Header>
      {modalStatus.modal.type === "nomal" && (
        <>
          <Formik
            initialValues={{ password: "", email: "" }}
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
                ),
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
                Operation.submit({ input: values, cookie: splitCsrfCookie() })
              );
            }}
          >
            {formik => (
              <BaseLayout.Component>
                <form onSubmit={formik.handleSubmit}>
                  <Label htmlfor={"email"}>E-mail</Label>
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
                    <Label htmlfor={"password"}>password</Label>
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

                  <ContentWrap top={`30`}>
                    <input
                      name="checkbox"
                      type="checkbox"
                      onClick={handleApprove}
                      checked={redTermState.isAllreadyReadTerm === 2}
                    />
                    <Text size={14}>
                      会員登録をすることにより
                      {/* <span
                        style={{
                          color: '#4A90E2',
                          textDecoration: 'underline'
                        }}
                        onClick={() =>
                          setTermRead({ isAllreadyReadTerm: TermState.NOTREAD })
                        }
                      > */}
                      <Link
                        to="https://content.TerraceTech-fc.com/kiyaku"
                        style={{
                          color: "rgb(74, 144, 226)",
                          textDecoration: "underline"
                        }}
                      >
                        利用規約
                      </Link>
                      {/* </span> */}と
                      <Link
                        to="https://content.TerraceTech-fc.com/privacy-policy"
                        style={{
                          color: "rgb(74, 144, 226)",
                          textDecoration: "underline"
                        }}
                      >
                        プライバシーポリシー
                      </Link>
                      に同意いたします。
                    </Text>
                  </ContentWrap>
                  <ButtonWrap>
                    <ButtonStyled
                      type="submit"
                      disabled={
                        redTermState.isAllreadyReadTerm === TermState.INIT ||
                        redTermState.isAllreadyReadTerm === TermState.NOTREAD ||
                        typeof formik.errors.email === "string" ||
                        typeof formik.errors.password === "string"
                      }
                    >
                      新規登録
                    </ButtonStyled>
                  </ButtonWrap>
                </form>
                <ContentWrap top={`40`}>
                  <div
                    style={{
                      color: "#4a90e2",
                      fontSize: "14px",
                      textAlign: "center"
                    }}
                  >
                    <Link to="/login" style={{ textDecoration: "underline" }}>
                      すでにアカウントをお持ちの方
                    </Link>
                  </div>
                </ContentWrap>
                <ContentWrap top={`40`}>
                  <NormalButtonStyled>
                    <a href="https://content.TerraceTech-fc.com/landing">
                      TerraceTechの遊び方
                    </a>
                  </NormalButtonStyled>
                </ContentWrap>
              </BaseLayout.Component>
            )}
          </Formik>

          {modalState.isModalShown && (
            <Modal onClose={onCloseTerm} buttonText="同意する">
              <ModalChildren handleNotApprove={handleNotApprove} />
            </Modal>
          )}
        </>
      )}
      {modalStatus.modal.type === ("success" || "error") &&
        modalStatus.modal.isOpen && (
          <Modal onClose={onClose}>
            <div>{modalStatus.modal.message}</div>
          </Modal>
        )}
      {modalStatus.modal.type === "success" && (
        <>
          <BaseLayout.Component>
            <div>メールアドレスに送信しました</div>
          </BaseLayout.Component>
        </>
      )}
      {modalStatus.modal.type === "error" && (
        <>
          <BaseLayout.Component>
            <div>メールアドレスに送信が失敗しました</div>
          </BaseLayout.Component>
        </>
      )}
    </>
  );
}

type PropsModalChildren = {
  handleNotApprove(): void;
};

const ModalChildren = (props: PropsModalChildren) => {
  return (
    <>
      {TermState.NOTREAD && (
        <Stylee>
          <Terms />
          <ContentWrap>
            <NormalButtonStyledInModal onClick={props.handleNotApprove}>
              同意しない
            </NormalButtonStyledInModal>
          </ContentWrap>
        </Stylee>
      )}
    </>
  );
};

const ButtonWrap = styled.div`
  padding-top: 20px;
`;

const ContentWrap = styled.div<{ top?: string | undefined }>`
  padding-top: ${props => props.top || `10`}px;
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
const NormalButtonStyled = styled.button`
  background: #fff;
  border: 1px solid ${Color.border};
  font-size: 16px;
  color: #000;
  letter-spacing: 1px;
  text-align: center;
  padding: 18px 0;
  width: 80%;
  display: block;
  margin: 10px auto 0;
`;

// widthだけが上と違います。共通化お願いします
const NormalButtonStyledInModal = styled.button`
  border: 1px solid ${Color.border};
  font-size: 16px;
  color: #000;
  letter-spacing: 1px;
  text-align: center;
  padding: 18px 0;
  width: 90%;
  display: block;
  margin: 10px auto 0;
`;

const InputWrap = styled.div`
  padding-top: 10px;
`;
const FormErrorTextWrap = styled.div`
  padding-top: 10px;
`;
const LabelWrap = styled.div`
  padding-top: 16px;
`;

const StyledInput = styled.input<{ isError: boolean | undefined | string }>`
  border: 1px solid ${props => (props.isError ? "#D0021B" : "#e2e2e2")};
  height: 50px;
  width: 100%;
`;

const Stylee = styled.div``;

export default Component;
