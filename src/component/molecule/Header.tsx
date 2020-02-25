import React from "react";
import styled from "styled-components";
import Logo from "../atom/Logo";
import Login from "../atom/Login";
import Logout from "../atom/Logout";

type Props = {
  isAuthenticated: boolean;
  handleClickLogOut(): void;
};
export function Component(props: Props) {
  return (
    <header>
      <Header>
        <LogoWrap>
          <Logo />
        </LogoWrap>
        <LoginWrap>
          {props.isAuthenticated ? (
            <Logout handleClickLogOut={props.handleClickLogOut} />
          ) : (
            <Login />
          )}
        </LoginWrap>
      </Header>
    </header>
  );
}

const LoginWrap = styled.li`
  display: inline-block;
  position: absolute;
  right: 10px;
`;

const LogoWrap = styled.li`
  display: inline-block;
`;
const Header = styled.ul`
  text-align: center;
  position: relative;
  padding: 10px;
`;

export default Component;
