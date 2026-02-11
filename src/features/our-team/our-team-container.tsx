import { CenteredContainer, Message, Title } from '@/shared/ui';
import {
  OurTeamRiders,
  OurTeamStaff,
  OurTeamSummary,
  OurTeamHeroImage,
} from './ui';
import { useOurTeamContainer } from './model/hooks/use-our-team-container';

export const OurTeamContainer = () => {
  const { t, navigate, riders, mainStaffs, subStaffs, message, heroImageSrc } =
    useOurTeamContainer();

  return (
    <>
      <OurTeamHeroImage heroImageSrc={heroImageSrc} />
      <CenteredContainer>
        <Message message={message} />
      </CenteredContainer>
      <OurTeamSummary t={t} />
      <CenteredContainer>
        <Title title="The Riders" subTitle="The Riders" />
      </CenteredContainer>
      <OurTeamRiders riders={riders} navigate={navigate} />
      <OurTeamStaff
        mainStaffs={mainStaffs}
        subStaffs={subStaffs}
        navigate={navigate}
      />
    </>
  );
};
