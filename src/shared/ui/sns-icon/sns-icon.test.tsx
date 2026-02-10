import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { SnsIcon } from './sns-icon';

describe('SnsIcon', () => {
  const props = {
    href: 'https://twitter.com',
    icon: '/images/icon.png',
    label: 'Twitter',
  };

  it('renders link with correct href and target', () => {
    render(
      <MemoryRouter>
        <SnsIcon {...props} />
      </MemoryRouter>,
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://twitter.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders image with correct src and alt', () => {
    render(
      <MemoryRouter>
        <SnsIcon {...props} />
      </MemoryRouter>,
    );
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', '/images/icon.png');
    expect(image).toHaveAttribute('alt', 'Twitter');
  });
});
