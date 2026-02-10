import type { Meta, StoryObj } from '@storybook/react-vite';
import { LinkUnderBarButton } from './link-under-bar-button';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof LinkUnderBarButton> = {
  title: 'shared/ui/LinkUnderBarButton',
  component: LinkUnderBarButton,
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
    text: 'Read More',
    url: '/updates',
  },
};

export const Centered: Story = {
  args: {
    text: 'View Details',
    url: '/team-member',
    isCenter: true,
  },
};
