import { FC } from 'react';
import { TOP } from '@/shared/constants';
import { RainbowUnderlineLink } from '@/shared/ui';

type NotFoundProps = {
  errorCode: string;
  title: string;
  description: string;
  backToTopText: string;
};

export const NotFound: FC<NotFoundProps> = ({
  errorCode,
  title,
  description,
  backToTopText,
}) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#1A1A1A] px-4 md:px-8">
      <div className="space-y-8 text-center">
        <div className="space-y-4">
          <p className="text-4xl font-bold text-light md:text-6xl">
            {errorCode}
          </p>
          <p className="text-xl font-bold text-light md:text-2xl">{title}</p>
          <p className="text-base text-gray-400 md:text-lg">{description}</p>
        </div>
        <div className="flex justify-end">
          <RainbowUnderlineLink text={backToTopText} link={TOP} />
        </div>
      </div>
    </div>
  );
};
