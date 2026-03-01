import { FC } from 'react';

interface Props {
  heroImageSrc: string | undefined;
}

export const ScheduleHeroImage: FC<Props> = ({ heroImageSrc }) => {
  return (
    <>
      <div
        className="
          relative
          h-auto md:h-[calc(100vh-55px)]
          mb-16 md:mb-32
          mt-0 md:mt-13
        "
      >
        <img
          alt=""
          src={heroImageSrc}
          className="
            mt-27 md:mt-0
            w-auto md:w-full
            h-auto! md:h-full!
            object-contain md:object-cover
          "
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-10" />
      </div>
    </>
  );
};
