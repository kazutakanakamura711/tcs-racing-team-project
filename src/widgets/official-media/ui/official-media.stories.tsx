import type { Meta, StoryObj } from '@storybook/react-vite';
import { OfficialMedia } from './official-media';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof OfficialMedia> = {
  title: 'widgets/OfficialMedia',
  component: OfficialMedia,
  parameters: {
    layout: 'centered',
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
    socialLinks: {
      facebook: 'https://facebook.com/tcs-racing',
      instagram: 'https://instagram.com/tcs-racing',
      youtube: 'https://youtube.com/@tcs-racing',
      tiktok: 'https://tiktok.com/@tcs-racing',
    },
  },
};
