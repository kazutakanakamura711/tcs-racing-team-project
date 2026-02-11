import type { Meta, StoryObj } from '@storybook/react-vite';
import { NotFound } from './not-found';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof NotFound> = {
  title: 'shared/ui/NotFound',
  component: NotFound,
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

export const Default: Story = {
  args: {
    errorCode: '404',
    title: 'Page Not Found',
    description:
      "The page you are looking for doesn't exist or has been moved.",
    backToTopText: 'Back to Top',
  },
};

export const Japanese: Story = {
  args: {
    errorCode: '404',
    title: 'ページが見つかりません',
    description:
      'お探しのページは削除されたか、名前が変更されたか、一時的に利用できない可能性があります。',
    backToTopText: 'トップページに戻る',
  },
};

export const CustomError: Story = {
  args: {
    errorCode: '500',
    title: 'Internal Server Error',
    description: 'Something went wrong on our end. Please try again later.',
    backToTopText: 'Back to Top',
  },
};
