import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom'; // SnsIcon might use Link? No, typically anchor. But checking context.
import { OfficialMedia } from './official-media';

describe('OfficialMedia', () => {
  const socialLinks = {
    facebook: 'https://facebook.com/tcs',
    instagram: 'https://instagram.com/tcs',
    youtube: 'https://youtube.com/tcs',
    tiktok: 'https://tiktok.com/tcs',
  };

  it('メインタイトルがレンダリングされること', () => {
    render(
      <MemoryRouter>
        <OfficialMedia socialLinks={socialLinks} />
      </MemoryRouter>,
    );
    expect(screen.getByText('Official Media')).toBeInTheDocument();
    expect(screen.getByText('Asia Union TCS Racing Team')).toBeInTheDocument();
  });

  it('ソーシャルリンクがレンダリングされること', () => {
    render(
      <MemoryRouter>
        <OfficialMedia socialLinks={socialLinks} />
      </MemoryRouter>,
    );
    // SnsIconは通常、アンカータグをレンダリングします。
    const stateLink = screen.getByRole('link', { name: 'Facebook' }); // SnsIconがaria-labelまたはimg altを名前として持っていると仮定
    expect(stateLink).toHaveAttribute('href', 'https://facebook.com/tcs');

    // aria-label/alt名が"Facebook"でない場合、hrefで探す必要があるかもしれません
    // フォールバックチェック
    const links = screen.getAllByRole('link');
    const fbLink = links.find(
      l => l.getAttribute('href') === 'https://facebook.com/tcs',
    );
    expect(fbLink).toBeInTheDocument();
  });
});
