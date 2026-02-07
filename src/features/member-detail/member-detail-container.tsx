import { MainLayout } from '@/shared/ui';
import { About, Carousel, MemberDetailHeroImage, ProfileContent } from './ui';
import { useMemberDetailContainer } from './model/hooks/use-member-detail-container';

export const MemberDetailContainer = () => {
  const { parsedId, t, member, memberList, heroImageSrc, isTablet, navigate } =
    useMemberDetailContainer();

  if (!parsedId || !member) return null;

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
