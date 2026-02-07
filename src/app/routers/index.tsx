import { useRoutes, useLocation } from 'react-router-dom';
import { publicRoutes } from './public-routes';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { Title, OurPartners, OfficialMedia } from '@/shared/ui';
import { OUR_PARTNERS } from '@/shared/constants';

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
