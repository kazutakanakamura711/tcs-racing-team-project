import { CenteredContainer } from '@/shared/ui';
import { FC } from 'react';

type Props = {
  title: string;
  middleTitle: string;
  subTitle: string;
};

export const OurTeamTitle: FC<Props> = ({ title, middleTitle, subTitle }) => {
  return (
    <CenteredContainer>
      {/* Container Box */}
      <div className="relative min-h-40 mb-14">
        {/* Subtitle (Background Stroke Text) */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#1A1A1A] text-[68px] md:text-[108px] z-0 whitespace-nowrap"
          style={{
            textShadow:
              '1px 1px 0 #C0C0C0, -1px -1px 0 #C0C0C0, -1px 1px 0 #C0C0C0, 1px -1px 0 #C0C0C0, 0px 1px 0 #C0C0C0, 0 -1px 0 #C0C0C0, -1px 0 0 #C0C0C0, 1px 0 0 #C0C0C0',
          }}
        >
          {subTitle}
        </div>

        {/* Main Title Wrapper */}
        <div className="absolute top-22 left-1/2 -translate-x-1/2 text-white text-[28px] md:text-[40px] font-bold z-1 text-center w-full">
          {title}

          {/* Middle Title with Rainbow Underline */}
          <div className="relative inline-block w-full text-[28px] md:text-[40px]">
            {middleTitle}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-21.75 h-0.75 bg-cover bg-no-repeat bg-[url('/images/common/img-text-bg-rainbow.webp')]" />
          </div>
        </div>
      </div>
    </CenteredContainer>
  );
};
