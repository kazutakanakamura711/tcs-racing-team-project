import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Spinner } from './spinner';

describe('Spinner', () => {
  it('ローディング状態のアイコンを表示すること', () => {
    render(<Spinner />);

    expect(screen.getByRole('status', { name: 'Loading' })).toBeInTheDocument();
  });

  it('追加のclassNameを適用できること', () => {
    render(<Spinner className="size-6 text-red-500" />);

    const spinner = screen.getByRole('status', { name: 'Loading' });
    expect(spinner).toHaveClass('animate-spin');
    expect(spinner).toHaveClass('size-6');
    expect(spinner).toHaveClass('text-red-500');
  });

  it('svg属性を渡せること', () => {
    render(<Spinner data-testid="loading-spinner" strokeWidth={3} />);

    const spinner = screen.getByTestId('loading-spinner');
    expect(spinner).toHaveAttribute('stroke-width', '3');
  });
});
