import { CenteredContainer } from '@/shared/ui';
import { NotFoundPage } from '@/pages/not-found-page';
import {
  OurTeamDetailAbout,
  OurTeamDetailOtherMembers,
  OurTeamDetailHeroImage,
  OurTeamDetailProfileContent,
} from './ui';
import { useOurTeamDetailContainer } from './model/hooks/use-our-team-detail-container';

export const OurTeamDetailContainer = () => {
  const { parsedId, t, member, memberList, heroImageSrc, isTablet, navigate } =
    useOurTeamDetailContainer();

  if (!parsedId || !member) return <NotFoundPage />;

  return (
    <>
      <OurTeamDetailHeroImage
        id={parsedId}
        t={t}
        member={member}
        heroImageSrc={heroImageSrc}
      />
      <CenteredContainer>
        <OurTeamDetailProfileContent id={parsedId} t={t} />
      </CenteredContainer>
      <OurTeamDetailAbout id={parsedId} t={t} member={member} />
      <CenteredContainer>
        <OurTeamDetailOtherMembers
          isTablet={isTablet}
          navigate={navigate}
          memberList={memberList}
        />
      </CenteredContainer>
    </>
  );
};
