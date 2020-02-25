import React from "react";
import { withAppContext } from "modules/ApplicationContext";
import * as Helmet from "react-helmet";
import Header from "component/atom/Header";

export const Component = () => {
  return (
    <>
      <Helmet.Helmet title="マイページ選手 | TerraceTech" />
      <Header>マイページ</Header>
    </>
  );
};

export default withAppContext(Component);
