import React from "react";
import styled from "styled-components";
import SIZE from "component/const/Size";

type Props = { htmlfor: string };

export const Component: React.FC<Props> = props => {
  return <Label htmlFor={props.htmlfor}>{props.children}</Label>;
};

const Label = styled.label`
  font-size: ${SIZE.FONT.M}px;
`;

export default Component;
