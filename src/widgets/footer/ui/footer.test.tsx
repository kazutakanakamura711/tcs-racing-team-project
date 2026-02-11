import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { Footer } from './footer';

describe('Footer', () => {
  it('有用なリンクのセクションがレンダリングされること', () => {
    render(
      <MemoryRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Footer isTablet={false} fontSize="14px" />
      </MemoryRouter>,
    );
    expect(screen.getByText('USEFUL LINKS')).toBeInTheDocument();
    expect(screen.getByText('News')).toHaveAttribute('href', '/updates');
    expect(screen.getByText('Team')).toHaveAttribute('href', '/our-team');
    expect(screen.getByText('Schedule')).toHaveAttribute('href', '/schedule');
    expect(screen.getByText('Partner')).toHaveAttribute(
      'href',
      '/our-partners',
    );
  });

  it('read moreセクションがレンダリングされること', () => {
    render(
      <MemoryRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Footer isTablet={false} fontSize="14px" />
      </MemoryRouter>,
    );
    expect(screen.getByText('READ MORE ABOUT')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toHaveAttribute('href', '/contact');
  });

  it('フォロー用テキストがレンダリングされること', () => {
    render(
      <MemoryRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Footer isTablet={false} fontSize="14px" />
      </MemoryRouter>,
    );
    // テキストは条件付きで<br/>によって分割されますが、testing-libraryのテキストマッチャーは通常それを処理するか、正規表現を使用します。
    // "FOLLOW US AND CHECK THE TEAM ACTIVITY AND DAILY LIFE"
    expect(screen.getByText(/FOLLOW US AND/)).toBeInTheDocument();
    expect(screen.getByText(/TEAM ACTIVITY AND/)).toBeInTheDocument();
  });

  it('著作権テキストがレンダリングされること', () => {
    render(
      <MemoryRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Footer isTablet={false} fontSize="14px" />
      </MemoryRouter>,
    );
    expect(screen.getByText(/Copyright.*TCS Racing Team/)).toBeInTheDocument();
  });
});
