import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Message } from './message';

describe('Message', () => {
  const messageData = {
    title: 'Test Title',
    text: 'Test Message Text',
  };

  it('renders title and text', () => {
    render(<Message message={messageData} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Message Text')).toBeInTheDocument();
  });
});
