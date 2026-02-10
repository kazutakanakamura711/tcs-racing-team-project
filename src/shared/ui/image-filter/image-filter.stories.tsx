import type { Meta, StoryObj } from '@storybook/react-vite';
import { ImageFilter } from './image-filter';

const meta: Meta<typeof ImageFilter> = {
  title: 'shared/ui/ImageFilter',
  component: ImageFilter,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: '/images/common/ico-team-logo.webp',
  },
};

export const WithHoverEffect: Story = {
  args: {
    src: '/images/common/ico-team-logo.webp',
    isHoverEffectEnabled: true,
  },
};
