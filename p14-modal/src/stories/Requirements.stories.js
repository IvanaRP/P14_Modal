import React from "react";
import { storiesOf } from "@storybook/react";

import { Requirements } from "../components/Requirements";

const stories = storiesOf("Modal Box", module);

stories.add("Modal", () => {
  return <Requirements />;
});
