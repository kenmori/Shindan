import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "component/atom/Footer";
import Color from "component/const/Color";

type Props = {};
const Component: React.FC<Props> = (props) => {
  return (
    <FooterStyled>
      <ul>
        <LinkStyled to="/">
          <p>利用規約</p>
        </LinkStyled>
        <LinkStyled to="/">
          <p>運営会社</p>
        </LinkStyled>
        <LinkStyled to="/">
          <p>プライバシーポリシー</p>
        </LinkStyled>
        <LinkStyled to="/">
          <p>FAQ</p>
        </LinkStyled>
      </ul>
      {/* eslint-disable-next-line */}
      <Footer>©️TerraceTech. All Rights Reserved</Footer>
    </FooterStyled>
  );
};

const LinkStyled = styled(Link)`
  background: #4a4a4a;
  padding: 17px 0 17px 15px;
  position: relative;
  display: block;
  border-bottom: 1px solid ${Color.border};
  > p {
    color: #ffffff;
    font-size: 12px;
    margin: 0;
    line-height: 1;
  }
`;

const FooterStyled = styled.footer`
  color: #fff;
  width: 100%;
`;

export default Component;
