import { FC } from 'react';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

interface Props {
  children: React.ReactNode;
}

export const PageLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
