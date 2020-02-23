import React from "react";
import { withAppContext } from "modules/ApplicationContext";
import * as Helmet from "react-helmet";
import * as BaseLayout from "component/template/ContentWrap";
import Header from "component/atom/Header";

export const Component = (_props: any) => {
  return (
    <>
      <Helmet.Helmet title="運営会社 | TerraceTech" />
      <Header>運営会社</Header>
      <BaseLayout.Component>内容</BaseLayout.Component>
    </>
  );
};

export default withAppContext(Component);
