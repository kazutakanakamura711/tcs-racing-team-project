import type { Meta, StoryObj } from '@storybook/react-vite';
import { OurPartners } from './our-partners';
import { partnersImages } from '@/shared/constants';

const meta: Meta<typeof OurPartners> = {
  title: 'widgets/OurPartners',
  component: OurPartners,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    partnersData: partnersImages,
  },
};
