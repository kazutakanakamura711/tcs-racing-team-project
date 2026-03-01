import { FC } from 'react';

interface Props {
  message: {
    title: string;
    text: string;
  };
}

export const Message: FC<Props> = ({ message }) => {
  return (
    <div className="relative my-23">
      <div className="mx-auto size-53.5 opacity-50">
        <img
          src="/images/common/ico-team-logo.webp"
          className="object-cover"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center gap-4 text-center absolute left-1/2 top-1/2 z-2 w-full -translate-x-1/2 -translate-y-1/2">
        <p className="font-bold text-light md:text-5xl">{message.title}</p>
        <p className="mx-auto font-bold text-light text-xs md:max-w-147.5 md:text-lg">
          {message.text}
        </p>
      </div>
    </div>
  );
};
