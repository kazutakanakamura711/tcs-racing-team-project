import { useBreakpointValue } from '@chakra-ui/react';
import { useGetSchedule } from '@/shared/hooks/use-get-schedule';
import { useLanguage } from '@/shared/hooks/use-language';

export const useScheduleContainer = () => {
  const [selectedLanguage] = useLanguage();
  const { raceScheduleList, eventScheduleList } = useGetSchedule({
    limit: 100,
  });
  const heroImageSrc = useBreakpointValue({
    base: '/images/schedule/img-schedule-top-sp.webp',
    lg: '/images/schedule/img-schedule-top-pc.webp',
  });

  return {
    selectedLanguage,
    raceScheduleList,
    eventScheduleList,
    heroImageSrc,
  };
};
