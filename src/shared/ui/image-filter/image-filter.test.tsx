import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ImageFilter } from './image-filter';

describe('ImageFilter', () => {
  it('renders image with correct src', () => {
    const src = '/images/test.jpg';
    const { container } = render(<ImageFilter src={src} />);
    const image = container.querySelector('img');
    expect(image).toHaveAttribute('src', src);
  });

  it('renders with hover effect enabled', () => {
    const src = '/images/hover.jpg';
    const { container } = render(
      <ImageFilter src={src} isHoverEffectEnabled={true} />,
    );
    const image = container.querySelector('img');
    expect(image).toBeInTheDocument();
  });
});
