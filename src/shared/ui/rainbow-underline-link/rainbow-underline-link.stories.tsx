import type { Meta, StoryObj } from '@storybook/react-vite';
import { RainbowUnderlineLink } from './rainbow-underline-link';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof RainbowUnderlineLink> = {
  title: 'shared/ui/RainbowUnderlineLink',
  component: RainbowUnderlineLink,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'View More',
    link: '/updates',
  },
};

export const TeamLink: Story = {
  args: {
    text: 'See Team Members',
    link: '/team-member',
  },
};
