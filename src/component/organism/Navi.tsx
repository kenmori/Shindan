import React from "react";
import styled from "styled-components";
// NOTE SPAではaタグは使いたくないが、メニューがリロードしたさいに自動で閉じられるのと、バグがあったので一旦aタグを使っている
// import { Link } from 'react-router-dom'
import { ReactComponent as Menu } from "assets/img/menu.svg";
import { ReactComponent as Batsu } from "assets/img/batsu.svg";

type Props = {
  isAuthenticated: boolean;
  handleOnClickMenu(): void;
  isMenuOpen: boolean;
};
const Navi: React.FC<Props> = (props) => {
  const [state, setState] = React.useState("/");
  React.useEffect(() => {
    setState(window.location.pathname);
  }, []);

  return (
    <StyledNavi>
      <Ul>
        <li>
          <A onClick={() => props.handleOnClickMenu()}>
            {props.isMenuOpen ? (
              <>
                <Span>メニュー</Span>
                <Batsu />
              </>
            ) : (
              <>
                <Span>メニュー</Span>
                <Menu />
              </>
            )}
          </A>
        </li>
        <li>
          <A href="/">
            <Span isActive={state === "/"}>トップページ</Span>
            {state === "/" ? "" : ""}
          </A>
        </li>
        {props.isAuthenticated && (
          <li>
            <A href="/mypage">
              <Span isActive={state === "/mypage"}>マイページ</Span>
              {state === "/mypage" ? "" : ""}
            </A>
          </li>
        )}
      </Ul>
    </StyledNavi>
  );
};

const A = styled.a`
  text-decoration: none;
  display: block;
  padding: 7.5px 10px;
`;
const Span = styled.span<{ isActive?: boolean }>`
  font-size: 10px;
  display: block;
  color: ${(props) => (props.isActive ? "#de562b" : "#9b9b9b")};
  text-decoration: none;
  margin-bottom: 7px;
`;
const Ul = styled.ul`
  display: flex;
  width: 100%;
  background: #f4f4f4;
  justify-content: space-evenly;
  /* padding: 7px 0; */
  > li {
    text-align: center;
    width: 100%;
  }
`;
const StyledNavi = styled.nav`
  display: flex;
  justify-content: "center";
  background: #f5f5f5;
  justify-content: space-around;
`;

export default Navi;
