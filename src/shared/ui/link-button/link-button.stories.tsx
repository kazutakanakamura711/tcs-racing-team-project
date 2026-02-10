import type { Meta, StoryObj } from '@storybook/react-vite';
import { LinkButton } from './link-button';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof LinkButton> = {
  title: 'shared/ui/LinkButton',
  component: LinkButton,
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
