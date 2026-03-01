import { FC } from 'react';

interface Props {
  heroImageSrc: string | undefined;
}

export const UpdatesDetailHeroImage: FC<Props> = ({ heroImageSrc }) => {
  return (
    <div className="mt-27.5 md:mt-12.5 w-full relative">
      <img className="w-full block" src={heroImageSrc} alt="" />
      <div className="absolute inset-0 bg-black opacity-50 z-1" />
    </div>
  );
};
