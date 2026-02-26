import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/shared/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef, useState, useEffect } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { Member, OUR_TEAM_DETAIL } from '@/shared/constants';

interface Props {
  memberList: Member[];
  navigate: NavigateFunction;
}

export const OurTeamDetailCarousel: React.FC<Props> = ({
  navigate,
  memberList,
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        opts={{ loop: true, align: 'start' }}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {memberList.map(member => (
            <CarouselItem key={member.id} className="pl-2 basis-1/4">
              <div
                className="w-full aspect-square overflow-hidden cursor-pointer"
                onClick={() => {
                  navigate(OUR_TEAM_DETAIL.replace(':id', member.id));
                }}
              >
                {member.gradationImagesPath && (
                  <img
                    className="block w-full h-full object-cover"
                    src={member.gradationImagesPath}
                    alt={member.nameJa}
                  />
                )}
              </div>
              <p className="text-base text-white text-center mt-1">
                {member.nameEn.toUpperCase()}
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* ドットナビゲーション */}
      <div className="flex justify-center gap-3 mt-4">
        {memberList.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full cursor-pointer ${current === index ? 'bg-dot-active' : 'bg-dot-inactive'}`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};
