import * as React from "react";
import styled from "styled-components";
import * as BaseLayout from "component/template/ContentWrap";

export function Component() {
  const handleButton = () => {
    window.location.href = "/";
  };
  return (
    <>
      <BaseLayout.Component>
        <Text>エラーが発生しました</Text>
        <ButtonStyled onClick={handleButton}>トップページへ</ButtonStyled>
      </BaseLayout.Component>
    </>
  );
}

const Text = styled.div`
  text-align: center;
  height: 100px;
  vertical-align: middle;
  margin: 100px 0 0;
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
  margin: 0 auto 0px;
`;
