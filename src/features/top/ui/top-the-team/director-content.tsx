import { FC } from 'react';
import { NavigateFunction } from 'react-router-dom';

type Props = {
  post: string;
  name: string;
  comment: string;
  link: string;
  imagePath: string;
  navigate: NavigateFunction;
};

export const DirectorContent: FC<Props> = ({
  link,
  post,
  name,
  comment,
  imagePath,
  navigate,
}) => {
  return (
    <div
      className="group w-full cursor-pointer"
      style={{
        background: `linear-gradient(rgba(26, 26, 26, 1), rgba(26, 26, 26, 0.8), rgba(0, 0, 0, 0.3)), url(/images/common/img-bg-lattice.webp)`,
        backgroundSize: '80%',
      }}
      onClick={() => navigate(link)}
    >
      <div className="relative w-[71%] md:w-[90%] mx-auto">
        <div className="w-[86%] mx-auto">
          <div className="min-h-70 md:min-h-114.25 py-25 relative">
            {/* テキスト */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 z-2">
              <p className="text-light text-[10px] md:text-base mb-2 md:mb-3.5!">
                {post}
              </p>
              <p className="text-light font-bold text-2xl md:text-[52px] mb-2! md:mb-17.5!">
                {name}
              </p>
              <p className="text-light text-[10px] md:text-base w-1/2 whitespace-pre-line">
                {comment}
              </p>
            </div>

            {/* 人物画像 */}
            <div className="absolute bottom-0 -right-15 md:right-0 w-full md:w-1/2 max-w-95 overflow-hidden">
              {imagePath && (
                <img
                  className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                  src={imagePath}
                  alt={name}
                />
              )}
            </div>

            {/* 矢印 */}
            <div className="absolute bottom-12.5 right-0 w-2.5 h-9 transition-[right] duration-300 ease-in-out group-hover:-right-2.5">
              <img
                className="block w-full"
                src="/images/common/ico-arrow-white-brock.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* 下線 */}
        <hr className="border! border-white! opacity-40" />
      </div>
    </div>
  );
};
