import { FC } from 'react';
import { NewsItem } from '@/entities/news';
import { formatDate } from '@/shared/utils/date-format/date-format';
import { NavigateFunction } from 'react-router-dom';
import { noImageUrl, UPDATE_DETAIL } from '@/shared/constants';
import { cleanHtml } from '@/shared/utils/clean-html/clean-html';
import { AspectRatio, ImageFilter, LinkUnderBarButton } from '@/shared/ui';

export interface ImageCardProps {
  updateArray: NewsItem[];
  navigate: NavigateFunction;
  selectedLanguage: string;
  isSquareImage?: boolean;
}

export const ImageCard: FC<ImageCardProps> = ({
  updateArray,
  navigate,
  selectedLanguage,
  isSquareImage,
}) => {
  if (!updateArray) return <p className="text-light">データがありません。</p>;

  return (
    <>
      {updateArray.map((item, index) => (
        <div
          key={index}
          className="group relative cursor-pointer"
          onClick={() => navigate(UPDATE_DETAIL.replace(':id', item.id))}
        >
          {/* 背面カード（影） */}
          <div className="absolute inset-0 translate-x-1.25 -translate-y-1.25 bg-[#626063]" />

          {/* 前面カード */}
          <div className="relative transition-transform duration-300 ease-in-out hover:-translate-x-1.25 hover:translate-y-1.25">
            {isSquareImage ? (
              <AspectRatio
                ratio={1 / 1}
                className="[&_img]:h-full [&_img]:object-cover [&>div]:h-full"
              >
                <ImageFilter
                  src={item.eyecatch?.url || noImageUrl}
                  isHoverEffectEnabled={true}
                />
              </AspectRatio>
            ) : (
              <ImageFilter
                src={item.eyecatch?.url || noImageUrl}
                isHoverEffectEnabled={true}
              />
            )}
            <div className="absolute bottom-0 p-4 z-10 w-full">
              <div className="flex items-center overflow-hidden gap-1">
                <span className="text-accent-pink text-xs md:text-base shrink-0">
                  News |
                </span>
                <span className="text-light text-xs md:text-base truncate">
                  {formatDate(item.publishedAt)}
                </span>
              </div>
              <p className="text-light truncate">
                {item[`title${selectedLanguage}`]}
              </p>
              <div
                className="text-light text-[10px] md:text-base mb-2 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:1] overflow-hidden **:inline"
                dangerouslySetInnerHTML={{
                  __html: cleanHtml(item[`content${selectedLanguage}`]),
                }}
              />
              <LinkUnderBarButton url="#" text="もっと見る" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
