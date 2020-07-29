import React from "react";
import styled from "styled-components";

type Props = {
  size: number;
};

export const Component: React.FC<Props> = (props) => {
  return <StyledText size={props.size}>{props.children}</StyledText>;
};

const StyledText = styled.span<{ size: number }>`
  font-size: ${({ size }) => size}px;
`;

export default Component;
