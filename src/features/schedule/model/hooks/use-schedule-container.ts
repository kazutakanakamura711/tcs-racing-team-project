import { useGetSchedule } from '@/shared/hooks/use-get-schedule';
import { useLanguage } from '@/shared/hooks/use-language';
import { useMediaQuery } from '@/shared/hooks/use-media-query';
import { mediaQuery } from '@/shared/utils/break-point/break-point';

export const useScheduleContainer = () => {
  const [selectedLanguage] = useLanguage();
  const { raceScheduleList, eventScheduleList } = useGetSchedule({
    limit: 100,
  });
  const isTablet = useMediaQuery(mediaQuery.tablet);
  const heroImageSrc = isTablet
    ? '/images/schedule/img-schedule-top-sp.webp'
    : '/images/schedule/img-schedule-top-pc.webp';

  return {
    selectedLanguage,
    raceScheduleList,
    eventScheduleList,
    heroImageSrc,
  };
};
