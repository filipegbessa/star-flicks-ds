import { Meta, StoryObj } from "@storybook/react";

import { SFTypography, SFTypographyProps } from "./SFTypography";

const meta: Meta<SFTypographyProps> = {
  title: "Atom/SF-Typography",
  component: SFTypography,
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: {
        type: "select",
      },
    },
    size: {
      options: ["xs", "sm", "md", "xl", "title1", "title2", "title3"],
      control: {
        type: "select",
      },
    },
  },
  args: {},
};

export default meta;

export const Primary: StoryObj<SFTypographyProps> = {
  args: {
    variant: "primary",
    size: "md",
    children: "Texto",
  },
};
