import { FC } from 'react';
import { MemberContent } from './member-content';
import { NavigateFunction } from 'react-router-dom';

type Props = {
  leftName: string;
  leftComment: string;
  leftImage: string;
  leftBg: string;
  leftLink: string;
  rightName?: string;
  rightComment?: string;
  rightImage?: string;
  rightBg?: string;
  rightLink?: string;
  navigate: NavigateFunction;
};

export const Member: FC<Props> = ({
  leftName,
  leftComment,
  leftImage,
  leftBg,
  leftLink,
  rightName,
  rightComment,
  rightImage,
  rightBg,
  rightLink,
  navigate,
}) => {
  return (
    <div
      className="w-full"
      style={{
        background: `linear-gradient(rgba(26, 26, 26, 1), rgba(26, 26, 26, 0.8), rgba(0, 0, 0, 0.3)), url(/images/common/img-bg-lattice.webp)`,
        backgroundSize: '80%',
      }}
    >
      <div className="w-[71%] md:w-[90%] mx-auto md:border-b md:border-white">
        <div className="w-[86%] mx-auto relative">
          <div className="block md:flex md:justify-between">
            <MemberContent
              backgroundUrl={leftBg}
              name={leftName}
              comment={leftComment}
              imageUrl={leftImage}
              link={leftLink}
              navigate={navigate}
            />

            {/* 縦線: PCのみ */}
            <div className="hidden md:block absolute w-px h-4/5 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            {rightName && rightLink && (
              <MemberContent
                backgroundUrl={rightBg}
                name={rightName}
                comment={rightComment!}
                imageUrl={rightImage}
                link={rightLink}
                navigate={navigate}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
