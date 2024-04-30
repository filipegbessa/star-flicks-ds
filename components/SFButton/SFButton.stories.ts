import type { Meta, StoryObj } from '@storybook/react';
import { SFButton } from './SFButton';

const meta = {
  title: 'Components/SF-Button',
  component: SFButton,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {},
} satisfies Meta<typeof SFButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};