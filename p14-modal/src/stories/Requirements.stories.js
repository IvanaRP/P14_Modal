import React from "react";
import { storiesOf } from "@storybook/react";

import { Requirements } from "../components/Requirements/Requirements";

const stories = storiesOf("Modal", module);

stories.add("Modal", () => {
  return <Requirements />;
});
