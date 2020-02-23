import React from "react";
import styled from "styled-components";

type Props = {
  onClick(): void;
};

export const Component: React.FC<Props> = props => {
  return (
    <InputWrap>
      <StyledInput onClick={props.onClick} />
    </InputWrap>
  );
};

const InputWrap = styled.div`
  padding-top: 10px;
`;

const StyledInput = styled.input`
  border: 1px solid #e2e2e2;
  height: 50px;
`;

export default Component;
