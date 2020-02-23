import React from "react";
import styled from "styled-components";
import SIZE from "../const/Size";

type Props = {
  text: string;
};

export const Component: React.FC<Props> = props => {
  return <Section>{props.children}</Section>;
};

const Section = styled.h3`
  padding: 20px 0;
  text-align: left;
  font-size: ${SIZE.FONT.M}px;
  font-weight: 600;
`;

export default Component;
