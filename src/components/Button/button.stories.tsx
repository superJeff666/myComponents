import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "./button";

const defaultButton = () => (
  <Button onClick={action("click")}>default button</Button>
);

const buttonSize = () => (
  <div>
    <Button onClick={action("click")} size="lg">large button</Button>
    <Button onClick={action("click")} size="sm">small button</Button>
  </div>
);

const buttonType = () => (
  <div>
    <Button onClick={action("click")} btnType="primary">primary button</Button>
    <Button onClick={action("click")} btnType="danger">danger button</Button>
    <Button onClick={action("click")} btnType="link" href="https://baidu.com">
      link button
    </Button>
  </div>
);

storiesOf("Button Component", module)
  .add("Button", defaultButton)
  .add("不同尺寸的button", buttonSize)
  .add("不同类型的button", buttonType);
