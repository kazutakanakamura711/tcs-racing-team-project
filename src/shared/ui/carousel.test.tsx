import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import useEmblaCarousel from 'embla-carousel-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './carousel';

vi.mock('embla-carousel-react', () => ({
  default: vi.fn(),
}));

type EmblaEventName = 'select' | 'reInit';
type EmblaEventCallback = (api: unknown) => void;

const createMockApi = (options?: {
  canScrollPrev?: boolean;
  canScrollNext?: boolean;
}) => {
  const listeners = new Map<EmblaEventName, EmblaEventCallback>();

  const api = {
    canScrollPrev: vi.fn(() => options?.canScrollPrev ?? true),
    canScrollNext: vi.fn(() => options?.canScrollNext ?? true),
    scrollPrev: vi.fn(),
    scrollNext: vi.fn(),
    on: vi.fn((event: EmblaEventName, callback: EmblaEventCallback) => {
      listeners.set(event, callback);
    }),
    off: vi.fn((event: EmblaEventName) => {
      listeners.delete(event);
    }),
    emit: (event: EmblaEventName, payload: unknown) => {
      listeners.get(event)?.(payload);
    },
  };

  return api;
};

let currentApi = createMockApi();

describe('Carousel', () => {
  beforeEach(() => {
    currentApi = createMockApi();
    const mockUseEmblaCarousel = vi.mocked(useEmblaCarousel);
    mockUseEmblaCarousel.mockReturnValue([vi.fn(), currentApi] as never);
  });

  it('カルーセルのランドマークとスライドを表示すること', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );

    expect(screen.getByRole('region')).toHaveAttribute(
      'aria-roledescription',
      'carousel',
    );
    expect(screen.getByText('Slide 1')).toBeInTheDocument();
    expect(screen.getByText('Slide 2')).toBeInTheDocument();
  });

  it('setApi に Embla API を渡すこと', async () => {
    const setApi = vi.fn();

    render(
      <Carousel setApi={setApi}>
        <CarouselContent>
          <CarouselItem>Slide</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );

    await waitFor(() => {
      expect(setApi).toHaveBeenCalledTimes(1);
      expect(setApi).toHaveBeenCalledWith(
        expect.objectContaining({
          scrollPrev: expect.any(Function),
          scrollNext: expect.any(Function),
        }),
      );
    });
  });

  it('前へ/次へボタンとキーボード操作でスクロールすること', async () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>,
    );

    const previousButton = screen.getByRole('button', {
      name: 'Previous slide',
    });
    const nextButton = screen.getByRole('button', { name: 'Next slide' });
    const region = screen.getByRole('region');

    await waitFor(() => {
      expect(previousButton).not.toBeDisabled();
      expect(nextButton).not.toBeDisabled();
    });

    fireEvent.click(previousButton);
    fireEvent.click(nextButton);
    fireEvent.keyDown(region, { key: 'ArrowLeft' });
    fireEvent.keyDown(region, { key: 'ArrowRight' });
    fireEvent.keyDown(region, { key: 'Enter' });

    expect(currentApi.scrollPrev).toHaveBeenCalledTimes(2);
    expect(currentApi.scrollNext).toHaveBeenCalledTimes(2);
  });

  it('vertical向きのクラスと無効状態が反映されること', async () => {
    currentApi = createMockApi({ canScrollPrev: false, canScrollNext: false });
    vi.mocked(useEmblaCarousel).mockReturnValue([vi.fn(), currentApi] as never);

    render(
      <Carousel orientation="vertical">
        <CarouselContent data-testid="content">
          <CarouselItem data-testid="item">Slide</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>,
    );

    const content = screen.getByTestId('content');
    const item = screen.getByTestId('item');
    const previousButton = screen.getByRole('button', {
      name: 'Previous slide',
    });
    const nextButton = screen.getByRole('button', { name: 'Next slide' });

    expect(content).toHaveClass('-mt-4');
    expect(content).toHaveClass('flex-col');
    expect(item).toHaveClass('pt-4');
    expect(previousButton).toHaveClass('-top-12');
    expect(nextButton).toHaveClass('-bottom-12');

    await waitFor(() => {
      expect(previousButton).toBeDisabled();
      expect(nextButton).toBeDisabled();
    });
  });

  it('apiがない場合はsetApiされず、ボタン操作でエラーにならないこと', () => {
    vi.mocked(useEmblaCarousel).mockReturnValue([vi.fn(), undefined] as never);
    const setApi = vi.fn();

    render(
      <Carousel setApi={setApi}>
        <CarouselContent>
          <CarouselItem>Slide</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>,
    );

    const previousButton = screen.getByRole('button', {
      name: 'Previous slide',
    });
    const nextButton = screen.getByRole('button', { name: 'Next slide' });
    const region = screen.getByRole('region');

    expect(previousButton).toBeDisabled();
    expect(nextButton).toBeDisabled();
    expect(setApi).not.toHaveBeenCalled();

    fireEvent.click(previousButton);
    fireEvent.click(nextButton);
    fireEvent.keyDown(region, { key: 'ArrowLeft' });
    fireEvent.keyDown(region, { key: 'ArrowRight' });
  });

  it('orientation未指定の場合は横向きクラスになること', () => {
    render(
      <Carousel>
        <CarouselContent data-testid="content">
          <CarouselItem data-testid="item">Slide</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );

    expect(screen.getByTestId('content')).toHaveClass('-ml-4');
    expect(screen.getByTestId('item')).toHaveClass('pl-4');
  });

  it('selectイベントがundefinedを受けても処理が継続すること', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );

    expect(currentApi.canScrollPrev).toHaveBeenCalledTimes(1);
    expect(currentApi.canScrollNext).toHaveBeenCalledTimes(1);

    currentApi.emit('select', undefined);

    expect(currentApi.canScrollPrev).toHaveBeenCalledTimes(1);
    expect(currentApi.canScrollNext).toHaveBeenCalledTimes(1);
  });

  it('Carouselコンテキスト外で利用するとエラーになること', () => {
    const renderWithoutProvider = () => render(<CarouselContent />);

    expect(renderWithoutProvider).toThrow(
      'useCarousel must be used within a <Carousel />',
    );
  });
});
