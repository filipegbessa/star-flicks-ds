import { Meta, StoryObj } from "@storybook/react";

import { SFHeader, SFHeaderProps } from "./SFHeader";

const meta: Meta<SFHeaderProps> = {
  title: "Organisms/SF-Header",
  component: SFHeader,
  argTypes: {},
};

export default meta;

export const Primary: StoryObj<SFHeaderProps> = {
  args: {
    name: "star",
  },
};
