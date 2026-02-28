import type { Meta, StoryObj } from '@storybook/react-vite';
import { AspectRatio } from './aspect-ratio';

const meta: Meta<typeof AspectRatio> = {
  title: 'shared/ui/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Ratio16By9: Story = {
  args: {
    ratio: 16 / 9,
  },
  render: args => (
    <div className="w-90">
      <AspectRatio {...args} className="overflow-hidden rounded-md border">
        <div className="flex size-full items-center justify-center bg-muted text-sm">
          16:9
        </div>
      </AspectRatio>
    </div>
  ),
};

export const Ratio1By1: Story = {
  args: {
    ratio: 1,
  },
  render: args => (
    <div className="w-65">
      <AspectRatio {...args} className="overflow-hidden rounded-md border">
        <div className="flex size-full items-center justify-center bg-muted text-sm">
          1:1
        </div>
      </AspectRatio>
    </div>
  ),
};
