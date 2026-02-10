import { CenteredContainer } from '@/shared/ui';
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
      <CenteredContainer>
        <ProfileContent id={parsedId} t={t} />
      </CenteredContainer>
      <About id={parsedId} t={t} member={member} />
      <CenteredContainer>
        <Carousel
          isTablet={isTablet}
          navigate={navigate}
          memberList={memberList}
        />
      </CenteredContainer>
    </>
  );
};
