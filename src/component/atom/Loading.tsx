import React from "react";
import gif from "../../assets/img/loading.gif";
import styled from "styled-components";
type Props = {};

// 適当
const Loading: React.FC<Props> = () => {
  return (
    <Div>
      <img
        src={gif}
        style={{ verticalAlign: "middle", position: "relative", top: "50%" }}
        alt="loading中です"
        width="50"
      />
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  text-align: center;
  height: 100vh;
`;

export default Loading;
