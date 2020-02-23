import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as BaseLayout from "component/template/ContentWrap";

export function Component() {
  return (
    <>
      <BaseLayout.Component>
        <Text>ページが存在しません</Text>
        <ButtonStyled to="/">トップページへ</ButtonStyled>
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
const ButtonStyled = styled(Link)`
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
