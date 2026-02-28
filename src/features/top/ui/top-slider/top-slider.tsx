import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/shared/ui';
import { useEffect, useState } from 'react';

export interface SliderImage {
  id: number;
  src: { sp: string; pc: string };
  alt: string;
  isMovie?: boolean;
}

export const TopSlider: React.FC<{
  isTablet: boolean;
  images: SliderImage[];
}> = ({ isTablet, images }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <>
      <div className="relative">
        <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
          <CarouselContent className="ml-0">
            {images.map(image => (
              <CarouselItem key={image.id} className="pl-0">
                {/* TODO: Chakraを削除したら!を外す */}
                <div className="relative w-full overflow-hidden h-[calc(100vh-110px)]! md:h-[calc(100vh-50px)]!">
                  {image.isMovie ? (
                    <>
                      {isTablet ? (
                        // モバイル: 縦表示
                        // TODO: Chakraを削除したら!を外す
                        <h1 className="absolute font-bold! opacity-30 z-10 top-0 left-0 -rotate-90 text-[40px]! w-[calc(100vh-115px)] h-full bg-white bg-clip-text text-transparent">
                          Asia Union TCS Racing Team
                        </h1>
                      ) : (
                        // PC: 横表示
                        // TODO: Chakraを削除したら!を外す
                        <h1 className="absolute font-bold! opacity-30 z-10 top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[7vw]! text-center w-full bg-white bg-clip-text text-transparent">
                          Asia Union TCS Racing Team
                        </h1>
                      )}
                      <video
                        key={isTablet ? 'sp' : 'pc'}
                        // TODO: Chakraを削除したら!を外す
                        className="object-cover w-full h-[calc(100vh-110px)]! md:h-[calc(100vh-50px)]!"
                        src={isTablet ? image.src.sp : image.src.pc}
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        お使いのブラウザはビデオタグをサポートしていません。
                      </video>
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-black opacity-50 z-10" />
                      {isTablet ? (
                        // モバイル: 縦表示
                        // TODO: Chakraを削除したら!を外す
                        <h1 className="absolute font-bold! opacity-30 z-20 top-0 left-0 -rotate-90 text-[40px]! w-[calc(100vh-115px)] h-full bg-white bg-clip-text text-transparent">
                          Asia Union TCS Racing Team
                        </h1>
                      ) : (
                        // PC: 横表示
                        // TODO: Chakraを削除したら!を外す
                        <h1 className="absolute font-bold! opacity-30 z-20 top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[7vw]! text-center w-full bg-white bg-clip-text text-transparent">
                          Asia Union TCS Racing Team
                        </h1>
                      )}
                      {/* TODO: Chakraを削除したら!を外す */}
                      <img
                        className="block w-full object-cover h-[calc(100vh-110px)]! md:h-[calc(100vh-50px)]!"
                        src={isTablet ? image.src.sp : image.src.pc}
                        alt={image.alt}
                      />
                    </>
                  )}

                  {/* PCオーバーレイテキスト */}
                  {!isTablet && (
                    <>
                      <div className="absolute top-1/2 left-64 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center z-30">
                        <span className="text-white font-bold text-xl">
                          TCS <span className="ml-4">Racing Team</span>
                        </span>
                      </div>
                      <div className="absolute top-[85%] left-1/2 -translate-x-1/2 hidden md:flex justify-center w-full text-white font-bold text-2xl text-center z-30">
                        <span>日本からアジアへ</span>
                        <span>そして世界へ</span>
                      </div>
                    </>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* 前ボタン: PCのみ */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 hidden md:block"
            onClick={() => api?.scrollPrev()}
            aria-label="Previous slide"
          >
            <img
              className="w-7 h-15 rotate-180"
              src="/images/common/ico-arrow-white-brock.svg"
              alt=""
            />
          </button>

          {/* 次ボタン: PCのみ */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 hidden md:block"
            onClick={() => api?.scrollNext()}
            aria-label="Next slide"
          >
            <img
              className="w-7 h-15"
              src="/images/common/ico-arrow-white-brock.svg"
              alt=""
            />
          </button>
        </Carousel>

        {/* ドットナビゲーション: モバイルのみ */}
        {isTablet && (
          <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-3 z-30">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full cursor-pointer ${current === index ? 'bg-dot-active' : 'bg-dot-inactive'}`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        )}
      </div>

      <p className="absolute hidden md:block bottom-[3%] left-0 w-full text-center text-white animate-[bounce_1s_ease-in-out_infinite] after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-12.5 after:h-12.5 after:w-0.5 after:bg-white">
        SCROLL
      </p>
    </>
  );
};
