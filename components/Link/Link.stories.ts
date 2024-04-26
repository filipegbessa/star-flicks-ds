import { Meta, StoryObj } from "@storybook/react";

import { Link, LinkProps } from "./Link";

const meta: Meta<LinkProps> = {
  title: "Molecules/Link",
  component: Link,
  argTypes: {},
  args: {
    children: "Link",
    href: "/",
  },
};

export default meta;

export const Primary: StoryObj<LinkProps> = {
  args: {},
};

export const Disabled: StoryObj<LinkProps> = {
  args: {
    disabled: true,
  },
};

export const Violet: StoryObj<LinkProps> = {
  args: {
    className: "theme-violet",
  },
};
