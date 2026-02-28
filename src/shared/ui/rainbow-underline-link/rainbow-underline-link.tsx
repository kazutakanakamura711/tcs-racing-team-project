import { FC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  text: string;
  link: string;
};

export const RainbowUnderlineLink: FC<Props> = ({ link, text }) => {
  return (
    <div className="flex">
      <Link to={link}>
        <div
          className={[
            'relative flex items-center gap-2',
            "after:content-[''] after:absolute after:-bottom-0.75 after:left-0",
            'after:h-0.75 after:bg-cover after:bg-no-repeat',
            "after:bg-[url('/images/common/img-text-bg-rainbow.webp')]",
            'after:w-0 hover:after:w-full',
            'after:transition-[width] after:duration-500 after:ease-in-out',
          ].join(' ')}
        >
          <span className="text-light font-bold">{text}</span>
          <img src="/images/common/ico-arrow-white-brock.svg" alt="" />
        </div>
      </Link>
    </div>
  );
};
