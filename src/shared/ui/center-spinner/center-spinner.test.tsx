import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { CenterSpinner } from './center-spinner';

describe('CenterSpinner', () => {
  it('スピナーがレンダリングされること', () => {
    render(<CenterSpinner />);
    // ChakraのSpinnerは通常、デフォルトで"Loading..."という視覚的に隠されたテキストを持ちます
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
