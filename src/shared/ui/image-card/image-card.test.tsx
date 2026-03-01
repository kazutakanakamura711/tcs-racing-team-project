import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { MemoryRouter, NavigateFunction } from 'react-router-dom';
import { ImageCard } from './image-card';
import { NewsItem } from '@/entities/news';
import { UPDATE_DETAIL } from '@/shared/constants';

const createNewsItem = (): NewsItem =>
  ({
    id: 'news-1',
    publishedAt: '2026-01-01T00:00:00.000Z',
    titleJa: 'テストタイトル',
    contentJa: '<p>テスト本文</p>',
    eyecatch: { url: '/images/test.webp' },
    category: null,
  }) as unknown as NewsItem;

describe('ImageCard', () => {
  it('ニュース情報を表示すること', () => {
    render(
      <MemoryRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <ImageCard
          updateArray={[createNewsItem()]}
          navigate={vi.fn() as unknown as NavigateFunction}
          selectedLanguage="Ja"
        />
      </MemoryRouter>,
    );

    expect(screen.getByText('News |')).toBeInTheDocument();
    expect(screen.getByText('テストタイトル')).toBeInTheDocument();
  });

  it('カードクリックで詳細ページへ遷移すること', async () => {
    const user = userEvent.setup();
    const navigate = vi.fn() as unknown as NavigateFunction;

    render(
      <MemoryRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <ImageCard
          updateArray={[createNewsItem()]}
          navigate={navigate}
          selectedLanguage="Ja"
        />
      </MemoryRouter>,
    );

    await user.click(screen.getByText('テストタイトル'));
    expect(navigate).toHaveBeenCalledWith(
      UPDATE_DETAIL.replace(':id', 'news-1'),
    );
  });
});
