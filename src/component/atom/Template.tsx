import React from "react";
import styled from "styled-components";
import SIZE from "component/const/Size";

type Props = {};

export const Component: React.FC<Props> = props => {
  return <Header>{props.children}</Header>;
};

const Header = styled.h2`
  padding: 20px 0;
  text-align: center;
  border-bottom: 1px solid #d8d8d8;
  font-size: ${SIZE.FONT.M}px;
  font-weight: 600;
`;

export default Component;
