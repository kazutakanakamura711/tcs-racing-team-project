import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { RainbowUnderlineLink } from './rainbow-underline-link';

describe('RainbowUnderlineLink', () => {
  it('renders the button text', () => {
    render(
      <MemoryRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <RainbowUnderlineLink text="Click Me" link="/target" />
      </MemoryRouter>,
    );
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('navigates to the correct link', () => {
    render(
      <MemoryRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <RainbowUnderlineLink text="Go Home" link="/home" />
      </MemoryRouter>,
    );
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/home');
  });
});
