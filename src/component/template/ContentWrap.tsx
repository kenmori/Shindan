import React from "react";
import styled from "styled-components";
import COLOR from "component/const/Color";

type Props = {
  background?: string;
};

export const Component: React.FC<Props> = (props) => {
  return <Content background={props.background}>{props.children}</Content>;
};

const Content = styled.h2<{ background?: string }>`
  padding: 16px;
  color: ${COLOR.font};
  font-size: 14px;
  background: ${({ background }) => (background ? background : `#fff`)};
`;

export default Component;
