import { Meta, StoryObj } from "@storybook/react";

import { SFInput, SFInputProps } from "./SFInput";

const meta: Meta<SFInputProps> = {
  title: "Molecules/SFInput",
  component: SFInput,
  argTypes: {},
  args: {
    label: "Label",
  },
};

export default meta;

export const Primary: StoryObj<SFInputProps> = {
  args: {},
};

export const Disabled: StoryObj<SFInputProps> = {
  args: {
    disabled: true,
  },
};
