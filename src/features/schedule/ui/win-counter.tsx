import { WinCounterData } from '@/shared/constants';
import { FC } from 'react';

interface Props extends WinCounterData {
  isLastContent?: boolean;
}

export const WinCounter: FC<Props> = ({
  count,
  text,
  isLastContent = false,
}) => {
  return (
    <div
      className={`
        text-center md:text-left
        border-l-0 md:border-l md:border-l-current
        border-b md:border-b-0
        ${isLastContent ? 'md:border-r md:border-r-current' : ''}
        pb-12 px-9
      `}
    >
      <div className="font-bold text-[96px]">{count}</div>
      <p>{text}</p>
    </div>
  );
};
