import { Meta, StoryObj } from "@storybook/react";

import { Icon, IconProps } from "./Icon";

const meta: Meta<IconProps> = {
  title: "Molecules/Icon",
  component: Icon,
  argTypes: {},
};

export default meta;

export const Primary: StoryObj<IconProps> = {
  args: {
    name: "star",
  },
};
