import type { Meta, StoryObj } from '@storybook/react-vite';
import EmblaAutoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './carousel';

const meta: Meta<typeof Carousel> = {
  title: 'shared/ui/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const slides = ['Slide 1', 'Slide 2', 'Slide 3'];

export const Default: Story = {
  render: () => (
    <div className="w-[320px]">
      <Carousel>
        <CarouselContent>
          {slides.map(slide => (
            <CarouselItem key={slide}>
              <div className="h-40 w-full rounded-md bg-gray-100 text-gray-900 flex items-center justify-center">
                {slide}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="h-80 w-[320px]">
      <Carousel orientation="vertical" className="h-full">
        <CarouselContent className="h-full">
          {slides.map(slide => (
            <CarouselItem key={slide}>
              <div className="h-24 w-full rounded-md bg-gray-100 text-gray-900 flex items-center justify-center">
                {slide}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
};

export const AutoplayCarousel: Story = {
  render: () => (
    <div className="w-[320px]">
      <Carousel
        opts={{ loop: true }}
        plugins={[EmblaAutoplay({ delay: 2500, stopOnInteraction: false })]}
      >
        <CarouselContent>
          {slides.map(slide => (
            <CarouselItem key={slide}>
              <div className="h-40 w-full rounded-md bg-gray-100 text-gray-900 flex items-center justify-center">
                {slide}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
};
