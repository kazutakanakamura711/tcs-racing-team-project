import type { Meta, StoryObj } from '@storybook/react-vite';
import { Title } from '../title';

const meta: Meta<typeof Title> = {
  title: 'shared/ui/Title',
  component: Title,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Updates',
    subTitle: 'Updates',
  },
};

export const WithDifferentTitle: Story = {
  args: {
    title: 'The Team',
    subTitle: 'The Team',
  },
};

export const Centered: Story = {
  args: {
    title: 'The Team',
    subTitle: 'The Team',
    isCenter: true,
  },
};

export const WithoutUnderline: Story = {
  args: {
    title: 'Updates',
    subTitle: 'Updates',
    isHiddenUnderLine: true,
  },
};
