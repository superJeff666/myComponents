import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "./button";

const defaultButton = () => (
  <Button onClick={action("click")}>default button</Button>
);

const buttonSize = () => (
  <>
    <Button onClick={action("click")} size="lg">large button</Button>
    <Button onClick={action("click")} size="sm">small button</Button>
  </>
);

const buttonType = () => (
  <>
    <Button onClick={action("click")} btnType="primary">primary button</Button>
    <Button onClick={action("click")} btnType="danger">danger button</Button>
    <Button onClick={action("click")} btnType="link" href="https://baidu.com">
      link button
    </Button>
  </>
);

storiesOf("Button Component", module)
  .add("默认 Button", defaultButton)
  .add("不同尺寸的button", buttonSize)
  .add("不同类型的button", buttonType);
