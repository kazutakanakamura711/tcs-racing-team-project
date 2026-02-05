import { MainLayout } from '@/shared/ui/main-layout';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { parseMemberId, getMemberById, getOtherMembersList } from '@/constants';
import { useGetWindowWidth } from '@/shared/hooks/useGetWindowWidth';
import { useBreakpointValue } from '@chakra-ui/react';
import { About, Carousel, MemberDetailHeroImage, ProfileContent } from './ui';

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
  const heroImageSrc = useBreakpointValue({
    base: member?.memberPageFirstViewBackgroundImageSp,
    lg: member?.memberPageFirstViewBackgroundImagePc,
  });

  return (
    <>
      <MemberDetailHeroImage
        id={parsedId}
        t={t}
        member={member}
        heroImageSrc={heroImageSrc}
      />
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
    </>
  );
};
