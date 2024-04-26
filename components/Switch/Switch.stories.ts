import { Meta, StoryObj } from "@storybook/react";

import { Switch, SwitchProps } from "./Switch";

const meta: Meta<SwitchProps> = {
  title: "Molecules/Switch",
  component: Switch,
  argTypes: {},
};

export default meta;

export const Primary: StoryObj<SwitchProps> = {
  args: {
    name: "star",
  },
};
export const Disabled: StoryObj<SwitchProps> = {
  args: {
    name: "star",
    disabled: true,
  },
};
