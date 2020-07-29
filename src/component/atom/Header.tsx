import React from "react";
import styled from "styled-components";
import COLOR from "component/const/Color";
import SIZE from "component/const/Size";

type Props = {};

export const Component: React.FC<Props> = (props) => {
  return <Header>{props.children}</Header>;
};

const Header = styled.h2`
  padding: 20px 0;
  text-align: center;
  border-bottom: 1px solid ${COLOR.border};
  font-size: ${SIZE.FONT.M}px;
  font-weight: 600;
`;

export default Component;
