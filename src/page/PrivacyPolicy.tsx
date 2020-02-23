import React from "react";
import { withAppContext } from "modules/ApplicationContext";
import * as BaseLayout from "component/template/ContentWrap";
import * as Helmet from "react-helmet";
import Header from "component/atom/Header";

export const Component = (_props: any) => {
  return (
    <>
      <Helmet.Helmet title="プライバシーポリシー | TerraceTech" />
      <Header>プライバシーポリシー</Header>
      <BaseLayout.Component></BaseLayout.Component>
    </>
  );
};

export default withAppContext(Component);
