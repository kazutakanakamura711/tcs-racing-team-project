import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter, NavigateFunction } from 'react-router-dom';
import { ImageCard } from './image-card';
import { NewsItem } from '@/entities/news';

const sampleNews = [
  {
    id: 'news-1',
    publishedAt: '2026-01-01T00:00:00.000Z',
    titleJa: 'サンプルニュースタイトル',
    contentJa: '<p>サンプルニュース本文です。1行で省略表示されます。</p>',
    eyecatch: { url: '/images/top/img-top-slider-01.webp' },
    category: null,
  } as unknown as NewsItem,
];

const meta: Meta<typeof ImageCard> = {
  title: 'shared/ui/ImageCard',
  component: ImageCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
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
    updateArray: sampleNews,
    selectedLanguage: 'Ja',
    navigate: (() => {}) as NavigateFunction,
    isSquareImage: false,
  },
};

export const SquareImage: Story = {
  args: {
    updateArray: sampleNews,
    selectedLanguage: 'Ja',
    navigate: (() => {}) as NavigateFunction,
    isSquareImage: true,
  },
};
