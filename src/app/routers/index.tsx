import { useRoutes, useLocation, matchPath } from 'react-router-dom';
import { publicRoutes } from './public-routes';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { OurPartners } from '@/widgets/our-partners';
import { OfficialMedia } from '@/widgets/official-media';
import { Title, CenteredContainer } from '@/shared/ui';
import { OUR_PARTNERS } from '@/shared/constants';

export const AppRoutes = () => {
  const element = useRoutes(publicRoutes);
  const location = useLocation();
  const isPartnersPage = location.pathname === OUR_PARTNERS;

  // 定義されたルートのいずれかにマッチするかチェック（NotFoundページを除外）
  const isValidRoute = publicRoutes
    .filter(route => route.path !== '*')
    .some(route => matchPath(route.path, location.pathname));

  const shouldShowPartners = !isPartnersPage && isValidRoute;

  return (
    <>
      <Header />
      <main>
        {element}
        {shouldShowPartners && (
          <>
            <CenteredContainer>
              <Title title="Our Partners" subTitle="Our Partners" />
            </CenteredContainer>
            <CenteredContainer>
              <OurPartners />
            </CenteredContainer>
          </>
        )}
        <OfficialMedia />
      </main>
      <div className="mt-28">
        <Footer />
      </div>
    </>
  );
};
