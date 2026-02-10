import type { Meta, StoryObj } from '@storybook/react-vite';
import { CenterSpinner } from './center-spinner';

const meta: Meta<typeof CenterSpinner> = {
  title: 'shared/ui/CenterSpinner',
  component: CenterSpinner,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
