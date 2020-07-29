import React from "react";
import styled from "styled-components";
// import COLOR from 'component/const/Color'
import SIZE from "component/const/Size";

type Props = {};

export const Component: React.FC<Props> = (props) => {
  return (
    <Wrap>
      <CopyRight>{props.children}</CopyRight>
    </Wrap>
  );
};

const Wrap = styled.div`
  padding: 16px;
  text-align: center;
  vertical-align: middle;
`;
const CopyRight = styled.p`
  color: #000;
  font-size: ${SIZE.FONT.SS}px;
  margin: 0px;
`;

export default Component;
