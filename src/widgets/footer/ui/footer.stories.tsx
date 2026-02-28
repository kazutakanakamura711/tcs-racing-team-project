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

export const Desktop: Story = {};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
