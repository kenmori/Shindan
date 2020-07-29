import React from "react";
import { withAppContext } from "modules/ApplicationContext";
import * as Helmet from "react-helmet";
import * as ReactRedux from "react-redux";

export const Component = (_props: any) => {
  const dispatch = ReactRedux.useDispatch();
  React.useEffect(() => {}, [dispatch]);
  return (
    <>
      <Helmet.Helmet title="■ | TerraceTech" />
      <h2>■</h2>
    </>
  );
};

export default withAppContext(Component);
