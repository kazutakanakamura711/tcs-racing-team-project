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
          className="relative cursor-pointer shadow-[5px_-5px_#626063] transition-shadow duration-300 ease-in-out hover:shadow-[10px_-10px_#626063]"
          onClick={() => navigate(UPDATE_DETAIL.replace(':id', item.id))}
        >
          {isSquareImage ? (
            <AspectRatio
              ratio={1 / 1}
              // TODO: Chakraを削除したら className を削除する
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
              <span className="text-accent-pink text-xs lg:text-base shrink-0">
                News |
              </span>
              <span className="text-light text-xs lg:text-base truncate">
                {formatDate(item.publishedAt)}
              </span>
            </div>
            <p className="text-light truncate">
              {item[`title${selectedLanguage}`]}
            </p>
            <div
              className="text-light text-[10px] lg:text-base mb-2 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:1] overflow-hidden **:inline"
              dangerouslySetInnerHTML={{
                __html: cleanHtml(item[`content${selectedLanguage}`]),
              }}
            />
            <LinkUnderBarButton url="#" text="もっと見る" />
          </div>
        </div>
      ))}
    </>
  );
};
