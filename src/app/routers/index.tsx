import { useRoutes, useLocation } from 'react-router-dom';
import { publicRoutes } from './public-routes';
import { Header } from '@/shared/ui/header/header';
import { Footer } from '@/shared/ui/footer/footer';
import { Title } from '@/shared/ui/title';
import { OurPartners } from '@/shared/ui/our-partners';
import { OfficialMedia } from '@/shared/ui/official-media';
import { OUR_PARTNERS } from '@/constants';

export const AppRoutes = () => {
  const element = useRoutes(publicRoutes);
  const location = useLocation();
  const isPartnersPage = location.pathname === OUR_PARTNERS;

  return (
    <>
      <Header />
      {element}
      {!isPartnersPage && (
        <>
          <Title title="Our Partners" subTitle="Our Partners" />
          <OurPartners />
        </>
      )}
      <OfficialMedia />
      <Footer />
    </>
  );
};
