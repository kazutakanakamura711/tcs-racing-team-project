import { FC } from 'react';

interface SmallTitleProps {
  title: string;
}

export const OurTeamSmallTitle: FC<SmallTitleProps> = ({ title }) => {
  return (
    <div className="mb-11.5 md:mb-17 text-center">
      <h2 className="text-light text-[32px]! font-bold!">{title}</h2>
    </div>
  );
};
