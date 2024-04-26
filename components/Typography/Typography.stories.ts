import { Meta, StoryObj } from "@storybook/react";

import { Typography, TypographyProps } from "./Typography";

const meta: Meta<TypographyProps> = {
  title: "Atom/Typography",
  component: Typography,
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
    }
  },
  args: {},
};

export default meta;

export const Primary: StoryObj<TypographyProps> = {
  args: {
    variant: "primary",
    size: "md",
    children: "Texto",
  },
};
