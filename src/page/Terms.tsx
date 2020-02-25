import React from "react";
import * as BaseLayout from "component/template/ContentWrap";
import Header from "component/atom/Header";
import * as Helmet from "react-helmet";

export function Component() {
  return (
    <>
      <Helmet.Helmet title="利用規約 | TerraceTech" />
      <Header>利用規約</Header>
      <BaseLayout.Component>
        {/* <Button text="もっとみる" onClick={() => {}} /> */}
      </BaseLayout.Component>
    </>
  );
}
export default Component;
