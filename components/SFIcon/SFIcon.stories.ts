import { Meta, StoryObj } from "@storybook/react";

import { SFIcon, SFIconProps } from "./SFIcon";

const meta: Meta<SFIconProps> = {
  title: "Atom/SF-Icon",
  component: SFIcon,
  argTypes: {},
};

export default meta;

export const Primary: StoryObj<SFIconProps> = {
  args: {
    name: "star",
  },
};
