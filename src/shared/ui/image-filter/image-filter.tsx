import { FC } from 'react';

type Props = {
  src: string;
  isHoverEffectEnabled?: boolean;
};

export const ImageFilter: FC<Props> = ({
  src,
  isHoverEffectEnabled = false,
}) => {
  return (
    <div className={`w-full relative overflow-hidden group`}>
      <div
        className="absolute inset-0 z-5"
        style={{
          background: 'linear-gradient(to bottom, rgba(26, 26, 26, 0), #000)',
        }}
      />
      <img
        className={`block w-full min-h-71.25 max-h-94.5 object-cover ${
          isHoverEffectEnabled
            ? 'transition-transform duration-300 ease-in-out group-hover:scale-110'
            : ''
        }`}
        src={src}
        alt=""
      />
    </div>
  );
};
