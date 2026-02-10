import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ChakraProvider } from '@chakra-ui/react';
import { ImageFilter } from './image-filter';

describe('ImageFilter', () => {
  it('renders image with correct src', () => {
    const src = '/images/test.jpg';
    const { container } = render(
      <ChakraProvider>
        <ImageFilter src={src} />
      </ChakraProvider>,
    );
    // alt="" の画像は role="img" を持たないため、タグ名で検索します
    const image = container.querySelector('img');
    expect(image).toHaveAttribute('src', src);
  });

  it('renders with hover effect enabled', () => {
    // スタイルやホバーエフェクトの厳密なテストは難しいですが、
    // プロパティを渡してもクラッシュしないこと、画像が表示されることを確認します。
    // Chakra UIのスタイルプロパティ（_hoverなど）は計算されたスタイルとして適用されます。
    const src = '/images/hover.jpg';
    const { container } = render(
      <ChakraProvider>
        <ImageFilter src={src} isHoverEffectEnabled={true} />
      </ChakraProvider>,
    );
    const image = container.querySelector('img');
    expect(image).toBeInTheDocument();
  });
});
