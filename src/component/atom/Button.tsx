import React, { useCallback } from "react";
import styled from "styled-components";
type Props = {
  disabled?: boolean;
  text: string;
  onClick(): void;
};
const Button: React.FC<Props> = ({ disabled = false, text, onClick }) => {
  const handleClick = useCallback(() => {
    onClick();
  }, [onClick]);
  return (
    <ButtonStyled disabled={disabled} onClick={handleClick}>
      {text}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  width: 150px;
  border: none;
  padding: 18px;
  font-size: 18px;
  cursor: pointer;
`;

export default Button;
