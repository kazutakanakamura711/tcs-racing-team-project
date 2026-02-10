import type { Meta, StoryObj } from '@storybook/react-vite';
import { SnsIcon } from './sns-icon';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof SnsIcon> = {
  title: 'shared/ui/SnsIcon',
  component: SnsIcon,
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

export const Instagram: Story = {
  args: {
    href: 'https://instagram.com',
    icon: '/images/common/ico-instagram-bg-white.webp',
    label: 'Instagram',
  },
};

export const Facebook: Story = {
  args: {
    href: 'https://facebook.com',
    icon: '/images/common/ico-facebook-bg-white.webp',
    label: 'Facebook',
  },
};

export const YouTube: Story = {
  args: {
    href: 'https://youtube.com',
    icon: '/images/common/ico-youtube-bg-white.webp',
    label: 'YouTube',
  },
};

export const TikTok: Story = {
  args: {
    href: 'https://tiktok.com',
    icon: '/images/common/ico-tiktok-bg-white.webp',
    label: 'TikTok',
  },
};
