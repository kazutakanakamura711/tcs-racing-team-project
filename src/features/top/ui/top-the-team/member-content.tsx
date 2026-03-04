import { AspectRatio } from '@/shared/ui';
import { FC } from 'react';
import { NavigateFunction } from 'react-router-dom';

interface Props {
  // TODO: 国旗の画像が追加されたらbackgroundUrlを必須にする
  backgroundUrl?: string;
  name: string;
  comment: string;
  imageUrl?: string;
  link: string;
  navigate: NavigateFunction;
}

export const MemberContent: FC<Props> = ({
  backgroundUrl,
  name,
  comment,
  imageUrl,
  link,
  navigate,
}) => {
  return (
    <div
      className="group w-full md:w-[calc(50%-34px)] min-h-69 py-25 relative md:border-none cursor-pointer"
      style={{
        background: `url(${backgroundUrl})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      onClick={() => navigate(link)}
    >
      {/* テキスト */}
      <div className="absolute left-0 bottom-7.5 z-2 flex flex-col">
        <p className="text-light font-bold text-sm md:text-2xl mb-4!">{name}</p>
        <p className="text-light text-[10px]! md:text-xs! whitespace-pre-line">
          {comment}
        </p>
      </div>
      {/* 人物画像 */}
      <div className="absolute bottom-0 right-0 w-full max-w-76 max-h-86 overflow-hidden">
        <AspectRatio ratio={1097 / 880}>
          {imageUrl && (
            <img
              className="h-full! mx-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
              src={imageUrl}
              alt={name}
            />
          )}
        </AspectRatio>
      </div>
      {/* 矢印 */}
      <div className="absolute bottom-5 right-0 w-2.5 h-9 transition-[right] duration-300 ease-in-out group-hover:-right-2.5">
        <img
          className="block w-full"
          src="/images/common/ico-arrow-white-brock.svg"
          alt=""
        />
      </div>
      {/* 区切り線: モバイルのみ */}
      <hr className="md:hidden absolute bottom-0 left-0 w-full border! border-white! opacity-40" />
    </div>
  );
};
