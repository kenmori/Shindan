import React from "react";
import Navi from "../organism/Navi";
import Menu from "../molecule/Menu";

type Props = {
  isAuthenticated: boolean;
  handleOnClickLogOut(): void;
};
export function Component(props: Props) {
  const [state, setMenu] = React.useState({ isOpen: false });
  console.log("isAuthenticated", props.isAuthenticated);
  const handleOnClickMenu = React.useCallback(() => {
    setMenu({ isOpen: !state.isOpen });
    if (!state.isOpen) {
      // モーダルオープン時に下の要素が動いてしまう為の一番簡単な修正。widthは適時別ファイルでお願いします
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "unset";
      document.body.style.width = "100%";
    }
  }, [state.isOpen, setMenu]);
  return (
    <nav>
      <Navi
        handleOnClickMenu={handleOnClickMenu}
        isAuthenticated={props.isAuthenticated}
        isMenuOpen={state.isOpen}
      />
      <Menu
        isOpen={state.isOpen}
        setMenu={setMenu}
        isAuthenticated={props.isAuthenticated}
        handleOnClickLogOut={props.handleOnClickLogOut}
      />
    </nav>
  );
}

export default Component;
