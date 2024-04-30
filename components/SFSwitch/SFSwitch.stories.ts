import { Meta, StoryObj } from "@storybook/react";

import { SFSwitch, SFSwitchProps } from "./SFSwitch";

const meta: Meta<SFSwitchProps> = {
  title: "Components/SF-Switch",
  component: SFSwitch,
  argTypes: {},
};

export default meta;

export const Primary: StoryObj<SFSwitchProps> = {
  args: {
    name: "star",
  },
};
export const Disabled: StoryObj<SFSwitchProps> = {
  args: {
    name: "star",
    disabled: true,
  },
};
