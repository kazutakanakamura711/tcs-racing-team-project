import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './header';
import { Language } from '@/shared/store/language-store';

describe('Header', () => {
  const defaultProps = {
    isOpen: false,
    onOpen: vi.fn(),
    onClose: vi.fn(),
    selectedLanguage: Language.Ja,
    handleLanguageChange: vi.fn(),
    mb: '10px',
  };

  it('renders logo', () => {
    render(
      <MemoryRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Header {...defaultProps} />
      </MemoryRouter>,
    );
    expect(screen.getByAltText('logo')).toBeInTheDocument();
  });

  it('renders navigation links in desktop view', () => {
    render(
      <MemoryRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Header {...defaultProps} />
      </MemoryRouter>,
    );

    // デスクトップ表示ではナビゲーションリンクが表示されることを確認します。
    // Chakra UIのレスポンシブスタイルによってモバイルでは非表示になる可能性がありますが、
    // jest-dom/happy-domのデフォルト環境ではDOMに存在するため、取得可能です。
    expect(screen.getByText('Updates')).toBeInTheDocument();
    expect(screen.getByText('Our Team')).toBeInTheDocument();
  });

  it('calls onOpen when hamburger menu is clicked', () => {
    render(
      <MemoryRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Header {...defaultProps} />
      </MemoryRouter>,
    );

    // ハンバーガーメニューをクリックしてonOpenが呼ばれることを確認します。
    const hamburger = screen.getByTestId('hamburger-menu');
    fireEvent.click(hamburger);
    expect(defaultProps.onOpen).toHaveBeenCalled();
  });

  it('calls handleLanguageChange when language is selected', () => {
    render(
      <MemoryRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Header {...defaultProps} />
      </MemoryRouter>,
    );
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: Language.En } });
    expect(defaultProps.handleLanguageChange).toHaveBeenCalled();
  });

  it('calls onClose when a drawer menu item is clicked', () => {
    render(
      <MemoryRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Header {...defaultProps} isOpen={true} />
      </MemoryRouter>,
    );

    // ドロワー内のメニューリンクをクリック
    const drawerLinks = screen.getAllByText('Updates');
    // ドロワー内のリンク（2つ目）をクリック
    fireEvent.click(drawerLinks[1]);
    expect(defaultProps.onClose).toHaveBeenCalled();
  });
});
