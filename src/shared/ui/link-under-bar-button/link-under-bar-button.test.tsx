import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { LinkUnderBarButton } from './link-under-bar-button';

describe('LinkUnderBarButton', () => {
  it('renders text', () => {
    render(
      <MemoryRouter>
        <LinkUnderBarButton text="Read More" url="/news" />
      </MemoryRouter>,
    );
    expect(screen.getByText('Read More')).toBeInTheDocument();
  });

  it('renders correct link', () => {
    render(
      <MemoryRouter>
        <LinkUnderBarButton text="About" url="/about" />
      </MemoryRouter>,
    );
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/about');
  });
});
