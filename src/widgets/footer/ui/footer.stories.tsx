import type { Meta, StoryObj } from '@storybook/react-vite';
import { Footer } from './footer';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof Footer> = {
  title: 'widgets/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
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

export const Desktop: Story = {
  args: {
    isTablet: false,
    fontSize: '24px',
  },
};

export const Mobile: Story = {
  args: {
    isTablet: true,
    fontSize: '10px',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
