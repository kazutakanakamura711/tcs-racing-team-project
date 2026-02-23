import { render } from '@testing-library/react';
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
    const { container } = render(
      <OurPartners partnersData={mockPartnersData} />,
    );

    // 現在の実装ではパートナーロゴは装飾画像として alt="" で描画されるため、img要素で確認します。
    // このウィジェットで描画対象なのは black/platinum/gold/silver/bronze の合計5件です。
    const images = Array.from(container.querySelectorAll('img'));
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
