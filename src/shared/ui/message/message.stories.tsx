import type { Meta, StoryObj } from '@storybook/react-vite';
import { Message } from './message';

const meta: Meta<typeof Message> = {
  title: 'shared/ui/Message',
  component: Message,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: {
      title: 'Welcome to TCS Racing',
      text: 'We are committed to excellence in motorsports',
    },
  },
};

export const LongText: Story = {
  args: {
    message: {
      title: 'Our Mission',
      text: 'To push the boundaries of speed and performance while maintaining the highest standards of safety and sportsmanship in every race we participate in.',
    },
  },
};
