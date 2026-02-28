import { FC, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const CenteredContainer: FC<Props> = ({ children }) => {
  return (
    <div className="mx-auto w-[85%] max-w-250 text-light md:w-[76%]">
      {children}
    </div>
  );
};
