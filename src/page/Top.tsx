import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import * as Helmet from "react-helmet";

type Props = {} & RouteComponentProps;

export function Component(props: Props) {
  return (
    <>
      <Helmet.Helmet title="Topページ | TerraceTech" />
      <div>fafa</div>
    </>
  );
}
