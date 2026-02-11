import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useBreakpointValue } from '@chakra-ui/react';
import {
  getOurTeamPageTheRiderSectionList,
  getOurTeamTheStaffMainList,
  getOurTeamTheStaffSubList,
} from '@/shared/constants';

export const useOurTeamContainer = () => {
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

  return {
    t,
    navigate,
    riders,
    mainStaffs,
    subStaffs,
    message,
    heroImageSrc,
  };
};
