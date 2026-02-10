import { CenteredContainer, Message, Title } from '@/shared/ui';
import { useTranslation } from 'react-i18next';
import {
  TeamMemberRiders,
  TeamMemberStaff,
  TeamMemberSummary,
  TeamMemberHeroImage,
} from './ui';
import { useNavigate } from 'react-router-dom';
import { useBreakpointValue } from '@chakra-ui/react';
import {
  getOurTeamPageTheRiderSectionList,
  getOurTeamTheStaffMainList,
  getOurTeamTheStaffSubList,
} from '@/shared/constants';

export const TeamMemberContainer = () => {
  const { t } = useTranslation('ourTeam');
  const navigate = useNavigate();
  const riders = getOurTeamPageTheRiderSectionList();
  const mainStaffs = getOurTeamTheStaffMainList();
  const subStaffs = getOurTeamTheStaffSubList();

  const message = {
    title: t('ourTeamMissionTitle'),
    text: t('ourTeamMissionText'),
  };

  const heroImageSrc = useBreakpointValue({
    base: '/images/team/img-team-top-sp.webp',
    lg: '/images/team/img-team-top-pc.webp',
  });

  return (
    <>
      <TeamMemberHeroImage heroImageSrc={heroImageSrc} />
      <CenteredContainer>
        <Message message={message} />
      </CenteredContainer>
      <TeamMemberSummary t={t} />
      <CenteredContainer>
        <Title title="The Riders" subTitle="The Riders" />
      </CenteredContainer>
      <TeamMemberRiders riders={riders} navigate={navigate} />
      <TeamMemberStaff
        mainStaffs={mainStaffs}
        subStaffs={subStaffs}
        navigate={navigate}
      />
    </>
  );
};
