import React, { ReactElement } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

type Props = {
  onClose(): void;
  children: ReactElement;
  buttonText?: string;
};
function Modal(props: Props) {
  const rootEl = document.getElementById("modal") as Element;
  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        left: 0,
      }}
    >
      <div
        style={{
          position: "fixed",
          width: "90%",
          padding: "16px",
          height: "60%",
          backgroundColor: "white",
        }}
      >
        <ContentStyle>{props.children}</ContentStyle>
        <ButtonStyled onClick={props.onClose}>
          {props.buttonText || "閉じる"}
        </ButtonStyled>
      </div>
    </div>,
    rootEl
  );
}

// TODO ButtonStyledの共通化
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
`;

const ContentStyle = styled.div`
  font-size: 14px;
  padding: 50px 20px;
`;

export default Modal;
