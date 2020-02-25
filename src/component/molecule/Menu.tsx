import React from "react";
import styled from "styled-components";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import SIZE from "component/const/Size";
import COLOR from "component/const/Color";

type Props = {
  isOpen: boolean;
  isAuthenticated: boolean;
  handleOnClickLogOut(): void;
  setMenu({ isOpen: boolean }: { isOpen: boolean }): void;
} & RouteComponentProps;

const Menu: React.FC<Props> = props => {
  const handleSetMenu = React.useCallback(() => {
    props.setMenu({ isOpen: false });
    props.history.push("/");
  }, [props]);

  const handleLogout = React.useCallback(() => {
    props.handleOnClickLogOut();
  }, [props]);
  return (
    <MenuStyled isOpen={props.isOpen}>
      {props.isOpen && (
        <ul>
          {props.isAuthenticated ? (
            <LinkWrap>
              <LinkStyled to="/forgotpassword" onClick={handleSetMenu}>
                パスワード変更
              </LinkStyled>
            </LinkWrap>
          ) : (
            <>
              <LinkWrap>
                <LinkDummy>
                  <Alink href="https://kenjimorita.jp">武骨日記</Alink>
                </LinkDummy>
              </LinkWrap>
            </>
          )}

          {props.isAuthenticated && (
            <LinkWrap>
              <LinkStyled to="/changemailaddress" onClick={handleSetMenu}>
                メールアドレス変更
              </LinkStyled>
            </LinkWrap>
          )}
          {props.isAuthenticated && (
            <>
              <LinkWrap>
                <LinkDummy>
                  <Alink href="https://kenjimorita.jp">武骨日記</Alink>
                </LinkDummy>
              </LinkWrap>
              <LinkWrap>
                <LinkDummy>
                  <Logout onClick={handleLogout}>ログアウト</Logout>
                </LinkDummy>
              </LinkWrap>
            </>
          )}
        </ul>
      )}
    </MenuStyled>
  );
};

const MenuStyled = styled.div<{ isOpen: boolean }>`
  position: ${props => (props.isOpen ? "fixed" : "none")};
  background: ${props => (props.isOpen ? "#fff" : "none")};
  width: ${props => (props.isOpen ? "100%" : "auto")};
  height: ${props => (props.isOpen ? "100%" : "auto")};
  opacity: ${props => (props.isOpen ? "90%" : "none")};
  z-index: ${props => (props.isOpen ? "1000" : "0")};
  li: {
    padding-top: 10px;
  }
`;

const LinkWrap = styled.li`
  border-bottom: 1px solid ${COLOR.border};
`;

const LinkStyled = styled(Link)`
  padding: 20px 16px;
  display: inline-block;
  font-size: ${SIZE.FONT.M}px;
  color: ${COLOR.primary};
  width: 100%;
`;
const Logout = styled.div`
  width: 100%;
  padding: 20px 16px;
`;
const Alink = styled.a`
  display: block;
  width: 100%;
  padding: 20px 16px;
`;
const LinkDummy = styled.div`
  display: inline-block;
  font-size: ${SIZE.FONT.M}px;
  color: ${COLOR.primary};
  width: 100%;
`;
export default withRouter(Menu);
