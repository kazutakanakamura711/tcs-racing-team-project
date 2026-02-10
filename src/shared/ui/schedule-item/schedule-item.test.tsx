import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { ScheduleItem } from './schedule-item';

describe('ScheduleItem', () => {
  const defaultProps = {
    url: '/schedule/1',
    title: 'Grand Prix',
    startDate: '2024.10.10',
    endDate: '2024.10.12',
    location: 'Suzuka Circuit',
  };

  it('日付、タイトル、場所がレンダリングされること', () => {
    render(
      <MemoryRouter>
        <ScheduleItem {...defaultProps} />
      </MemoryRouter>,
    );
    expect(screen.getByText('2024.10.10')).toBeInTheDocument();
    expect(screen.getByText('2024.10.12')).toBeInTheDocument();
    expect(screen.getByText('Grand Prix')).toBeInTheDocument();
    expect(screen.getByText('Suzuka Circuit')).toBeInTheDocument();
  });

  it('正しいURLを持つリンクがレンダリングされること', () => {
    render(
      <MemoryRouter>
        <ScheduleItem {...defaultProps} />
      </MemoryRouter>,
    );
    // Linkコンポーネントはコンテンツをラップします。
    // role="link" またはアンカータグが存在することを確認します。
    // コンポーネント構造: Link -> Box -> ...
    // タイトルがリンク内にあるかを確認します。
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/schedule/1');
  });

  it('endDateがない場合でも正しくレンダリングされること', () => {
    render(
      <MemoryRouter>
        <ScheduleItem {...defaultProps} endDate={undefined} />
      </MemoryRouter>,
    );
    expect(screen.getByText('2024.10.10')).toBeInTheDocument();
    expect(screen.queryByText('〜')).not.toBeInTheDocument();
  });
});
