import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { LinkButton } from './link-button';

describe('LinkButton', () => {
  it('renders the button text', () => {
    render(
      <MemoryRouter>
        <LinkButton text="Click Me" link="/target" />
      </MemoryRouter>,
    );
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('navigates to the correct link', () => {
    render(
      <MemoryRouter>
        <LinkButton text="Go Home" link="/home" />
      </MemoryRouter>,
    );
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/home');
  });
});
