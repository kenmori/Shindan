import React from "react";
import styled from "styled-components";
import COLOR from "component/const/Color";

type Props = {
  handleClickLogOut(): void;
};
const Logout: React.FC<Props> = props => {
  return (
    <ButtonStyled>
      <StyledLink onClick={() => props.handleClickLogOut()}>
        ログアウト
      </StyledLink>
    </ButtonStyled>
  );
};

const ButtonStyled = styled.div`
  font-size: 10px;
  color: #de5528;
  border-radius: 4px;
  border: 1px solid ${COLOR.primary};
`;

const StyledLink = styled.div`
  padding: 8px 18px;
  display: inline-block;
`;

export default Logout;
