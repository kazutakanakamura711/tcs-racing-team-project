import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { OurPartners } from './our-partners';
import { Partner, PartnerCategory } from '@/shared/constants/partners-images';

describe('OurPartners', () => {
  const mockPartnersData: Record<PartnerCategory, Partner[]> = {
    black: [
      {
        imagePath: '/images/black.png',
        link: 'https://example.com',
        commonLogoImageWidth: '100px',
        partnersPageLogoImageWidth: '100px',
      },
    ],
    platinum: [
      {
        imagePath: '/images/platinum.png',
        link: 'https://example.com',
        commonLogoImageWidth: '100px',
        partnersPageLogoImageWidth: '100px',
      },
    ],
    gold: [
      {
        imagePath: '/images/gold.png',
        link: 'https://example.com',
        commonLogoImageWidth: '100px',
        partnersPageLogoImageWidth: '100px',
      },
    ],
    silver: [
      {
        imagePath: '/images/silver.png',
        link: 'https://example.com',
        commonLogoImageWidth: '100px',
        partnersPageLogoImageWidth: '100px',
      },
    ],
    bronze: [
      {
        imagePath: '/images/bronze.png',
        link: 'https://example.com',
        commonLogoImageWidth: '100px',
        partnersPageLogoImageWidth: '100px',
      },
    ],
    supporters: [
      {
        imagePath: '/images/supporters.png',
        link: 'https://example.com',
        commonLogoImageWidth: '100px',
        partnersPageLogoImageWidth: '100px',
      },
    ],
    suppliers: [
      {
        imagePath: '/images/suppliers.png',
        link: 'https://example.com',
        commonLogoImageWidth: '100px',
        partnersPageLogoImageWidth: '100px',
      },
    ],
  };

  it('全てのカテゴリのパートナー画像がレンダリングされること', () => {
    render(<OurPartners partnersData={mockPartnersData} />);

    // 画像がレンダリングされているか確認します。altテキストは全て"OurPartners"なので、数を確認します。
    // モックデータには合計5つの画像があります。
    const images = screen.getAllByAltText('OurPartners');
    expect(images).toHaveLength(5);

    // 特定の画像が正しいマッピングであることを確認するためにソースを検証します
    // 注意: getByAttributeはscreen上で直接利用できない場合があるので、一般的なクエリを使用します
    const blackImage = images.find(
      img => img.getAttribute('src') === '/images/black.png',
    );
    expect(blackImage).toBeInTheDocument();

    const bronzeImage = images.find(
      img => img.getAttribute('src') === '/images/bronze.png',
    );
    expect(bronzeImage).toBeInTheDocument();
  });
});
