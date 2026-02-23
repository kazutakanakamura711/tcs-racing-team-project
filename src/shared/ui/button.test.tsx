import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Button } from './button';

describe('Button', () => {
  it('ボタンテキストを表示すること', () => {
    render(<Button>Click</Button>);
    expect(screen.getByRole('button', { name: 'Click' })).toBeInTheDocument();
  });

  it('variantとsizeのdata属性が設定されること', () => {
    render(
      <Button variant="outline" size="sm">
        Small
      </Button>,
    );

    const button = screen.getByRole('button', { name: 'Small' });
    expect(button).toHaveAttribute('data-variant', 'outline');
    expect(button).toHaveAttribute('data-size', 'sm');
  });

  it('asChildでリンクとして描画できること', () => {
    render(
      <Button asChild>
        <a href="/updates">Go Updates</a>
      </Button>,
    );

    const link = screen.getByRole('link', { name: 'Go Updates' });
    expect(link).toHaveAttribute('href', '/updates');
  });
});
