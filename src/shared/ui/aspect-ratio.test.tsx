import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AspectRatio } from './aspect-ratio';

describe('AspectRatio', () => {
  it('childrenを表示し、data-slot属性が設定されること', () => {
    render(
      <AspectRatio data-testid="aspect-ratio" ratio={16 / 9}>
        <div>Content</div>
      </AspectRatio>,
    );

    const root = screen.getByTestId('aspect-ratio');
    expect(root).toHaveAttribute('data-slot', 'aspect-ratio');
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('classNameと追加属性を渡せること', () => {
    render(
      <AspectRatio
        data-testid="aspect-ratio"
        className="rounded-md overflow-hidden"
        data-state="test"
      >
        <div>Box</div>
      </AspectRatio>,
    );

    const root = screen.getByTestId('aspect-ratio');
    expect(root).toHaveClass('rounded-md');
    expect(root).toHaveClass('overflow-hidden');
    expect(root).toHaveAttribute('data-state', 'test');
  });
});
