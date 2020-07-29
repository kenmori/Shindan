import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import COLOR from "component/const/Color";

type Props = {};

const Button: React.FC<Props> = (props) => {
  return (
    <ButtonStyled>
      <StyledLink to="/login">ログイン</StyledLink>
    </ButtonStyled>
  );
};

const ButtonStyled = styled.div`
  font-size: 10px;
  color: #de5528;
  border-radius: 4px;
  border: 1px solid ${COLOR.primary};
`;

const StyledLink = styled(Link)`
  padding: 8px 18px;
  display: inline-block;
`;

export default Button;
