import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import Button from "./Button";

const components = storiesOf("atoms", module);

components
  .addDecorator(withKnobs)
  .add("Button", () => (
    <Button
      disabled={boolean("Disabled", false)}
      onClick={action("click")}
      text={text("テキスト", "登録する")}
    />
  ));
