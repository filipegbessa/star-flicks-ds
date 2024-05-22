import { Meta, StoryObj } from '@storybook/react';

import { SFButton, SFButtonProps } from './SFButton';

const meta: Meta<SFButtonProps> = {
  title: 'Components/SF-Button',
  component: SFButton,
  argTypes: {
    children: {
      type: 'string',
    },
    disabled: {
      type: 'boolean',
    },
    className: {
      type: 'string',
    },
  },
  args: {
    title: 'Botão',
  },
};

export default meta;

export const Primary: StoryObj<SFButtonProps> = {
  args: {
    variant: 'primary',
    size: 'md',
  },
};

export const Secondary: StoryObj<SFButtonProps> = {
  args: {
    variant: 'secondary',
    size: 'md',
  },
};

export const Tertiary: StoryObj<SFButtonProps> = {
  args: {
    variant: 'tertiary',
    size: 'md',
  },
};

export const Disabled: StoryObj<SFButtonProps> = {
  args: {
    variant: 'primary',
    disabled: true,
    size: 'md',
  },
};

export const Violet: StoryObj<SFButtonProps> = {
  args: {
    className: 'theme-violet',
    variant: 'secondary',
    size: 'md',
  },
};
