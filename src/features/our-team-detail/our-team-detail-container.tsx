import { CenteredContainer } from '@/shared/ui';
import { NotFoundPage } from '@/pages/not-found-page';
import {
  OurTeamDetailAbout,
  OurTeamDetailOtherMembers,
  OurTeamDetailProfileContent,
} from './ui';
import { useOurTeamDetailContainer } from './model/hooks/use-our-team-detail-container';
import { OurTeamDetailHeroImage } from './ui/our-team-detail-hero-image';
import { Box } from '@chakra-ui/react';

export const OurTeamDetailContainer = () => {
  const { parsedId, t, member, memberList, heroImageSrc, isTablet, navigate } =
    useOurTeamDetailContainer();

  if (!parsedId || !member) return <NotFoundPage />;

  return (
    <Box mt={{ base: '110px', lg: '50px' }}>
      <OurTeamDetailHeroImage
        member={member}
        t={t}
        heroImageSrc={heroImageSrc}
      />
      {/* Profile / Result エリア */}
      <Box mt={{ base: '64px', lg: '96px' }}>
        <CenteredContainer>
          <OurTeamDetailProfileContent id={member.id} t={t} />
        </CenteredContainer>
      </Box>
      {/* Aboutエリア */}
      <OurTeamDetailAbout member={member} t={t} />
      {/* Other Membersエリア */}
      <CenteredContainer>
        <OurTeamDetailOtherMembers
          isTablet={isTablet}
          memberList={memberList}
          navigate={navigate}
        />
      </CenteredContainer>
    </Box>
  );
};
