import { useRoutes, useLocation } from 'react-router-dom';
import { publicRoutes } from './public-routes';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { OurPartners } from '@/widgets/our-partners';
import { OfficialMedia } from '@/widgets/official-media';
import { Title, CenteredContainer } from '@/shared/ui';
import { OUR_PARTNERS } from '@/shared/constants';
import { Box } from '@chakra-ui/react';

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
          <CenteredContainer>
            <Title title="Our Partners" subTitle="Our Partners" />
          </CenteredContainer>
          <CenteredContainer>
            <OurPartners />
          </CenteredContainer>
        </>
      )}
      <Box display={'flex'} flexDirection={'column'} gap={28}>
        <OfficialMedia />
        <Footer />
      </Box>
    </>
  );
};
