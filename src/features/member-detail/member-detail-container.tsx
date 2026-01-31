import { Title } from '@/shared/ui/title';
import { MainLayout } from '@/shared/ui/main-layout';
import { PageLayout } from '@/shared/ui/page-layout';

import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { parseMemberId, getMemberById, getOtherMembersList } from '@/constants';
import { useGetWindowWidth } from '@/shared/hooks/useGetWindowWidth';
import { TopOurPartners } from '../top/ui/top-our-partners';
import { TopOfficialMedia } from '../top/ui/top-official-media';
import { About, Carousel, FirstView, ProfileContent } from './ui';

export const MemberDetailContainer = () => {
  const { id } = useParams();
  const { t } = useTranslation('teamMember');
  const { isTablet } = useGetWindowWidth();
  const navigate = useNavigate();

  if (!id) return null;
  const parsedId = parseMemberId(id);
  if (!parsedId) return null;

  const member = getMemberById(parsedId);
  const memberList = getOtherMembersList();

  return (
    <PageLayout>
      <FirstView id={parsedId} t={t} member={member} />
      <MainLayout>
        <ProfileContent id={parsedId} t={t} />
      </MainLayout>
      <About id={parsedId} t={t} member={member} />
      <MainLayout>
        <Carousel
          isTablet={isTablet}
          navigate={navigate}
          memberList={memberList}
        />
      </MainLayout>
      <Title title="Our Partners" subTitle="Our Partners" />
      <TopOurPartners />
      <TopOfficialMedia />
    </PageLayout>
  );
};
