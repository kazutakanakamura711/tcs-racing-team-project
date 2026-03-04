import { CenteredContainer } from '@/shared/ui';
import { NotFoundPage } from '@/pages/not-found-page';
import {
  OurTeamDetailAbout,
  OurTeamDetailOtherMembers,
  OurTeamDetailProfileContent,
} from './ui';
import { useOurTeamDetailContainer } from './model/hooks/use-our-team-detail-container';
import { OurTeamDetailHeroImage } from './ui/our-team-detail-hero-image';

export const OurTeamDetailContainer = () => {
  const { parsedId, t, member, memberList, heroImageSrc, isTablet, navigate } =
    useOurTeamDetailContainer();

  if (!parsedId || !member) return <NotFoundPage />;

  return (
    <div className="mt-27.5 md:mt-12.5">
      <OurTeamDetailHeroImage
        member={member}
        t={t}
        heroImageSrc={heroImageSrc}
      />
      {/* Profile / Result エリア */}
      <div className="mt-16 md:mt-24">
        <CenteredContainer>
          <OurTeamDetailProfileContent id={member.id} t={t} />
        </CenteredContainer>
      </div>
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
    </div>
  );
};
