import { FC } from 'react';

interface Props {
  heroImageSrc: string | undefined;
}

export const OurTeamHeroImage: FC<Props> = ({ heroImageSrc }) => {
  return (
    <div className="relative h-auto md:h-[calc(100vh-52px)] mt-0 md:mt-13">
      <img
        src={heroImageSrc}
        className="w-auto md:w-full h-auto md:h-full! md:object-cover mt-27 md:mt-0"
        alt=""
      />
      <div className="hidden md:block absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-10" />
      <h1 className="hidden md:block absolute bottom-32 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 text-[48px]! font-bold! text-light">
        熱狂的に | Go Crazy
        <span className="block text-center text-[30px]">
          - 前進・革新・熱心 -
        </span>
      </h1>
    </div>
  );
};
