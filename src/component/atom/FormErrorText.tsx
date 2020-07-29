import React from "react";
import styled from "styled-components";
import SIZE from "component/const/Size";

type Props = {};

export const Component: React.FC<Props> = (props) => {
  return <Error>{props.children}</Error>;
};

const Error = styled.span`
  font-size: ${SIZE.FONT.M}px;
  color: #d0021b;
`;

export default Component;
