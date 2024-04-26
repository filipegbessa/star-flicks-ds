import { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "Molecules/Button",
  component: Button,
  argTypes: {
    children: {
      type: "string",
    },
    disabled: {
      type: "boolean",
    },
    className: {
      type: "string",
    },
  },
  args: {
    children: "Botão",
  },
};

export default meta;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    variant: "primary",
    size: "md",
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    variant: "primary",
    disabled: true,
    size: "md",
  },
};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: "secondary",
    size: "md",
  },
};

export const Violet: StoryObj<ButtonProps> = {
  args: {
    className: "theme-violet",
    variant: "secondary",
    size: "md",
  },
};
