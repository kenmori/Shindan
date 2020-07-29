import React from "react";
import styled from "styled-components";
// import { ReactComponent as Logo } from 'assets/img/logo.svg'

type Props = {};

const Component: React.FC<Props> = (props) => {
  const handleClick = React.useCallback(() => {
    // NOTE Linkで/に遷移させた場合うまくuseEffectが効かないためにそうしている。改善したい箇所
    window.location.reload();
  }, []);
  return (
    <ButtonStyled>
      <div onClick={handleClick}>
        <img
          src="https://terracetech.jp/wp-content/uploads/2019/11/cropped-1657.png"
          alt=""
        />
      </div>
    </ButtonStyled>
  );
};

const ButtonStyled = styled.div``;

export default Component;
