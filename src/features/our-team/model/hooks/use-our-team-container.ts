import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@/shared/hooks/use-media-query';
import { mediaQuery } from '@/shared/utils/break-point/break-point';
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

  const isTablet = useMediaQuery(mediaQuery.tablet);
  const heroImageSrc = isTablet
    ? '/images/team/img-team-top-sp.webp'
    : '/images/team/img-team-top-pc.webp';

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
