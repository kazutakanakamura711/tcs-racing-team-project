import { Title } from '@/shared/ui/title';
import { Box, useBreakpointValue } from '@chakra-ui/react';
import { Schedule, ScheduleHeroImage } from './ui';
import { MainLayout } from '@/shared/ui/main-layout';
import { useGetSchedule } from '@/shared/hooks/useGetSchedule';
import { useLanguage } from '@/state/languageState/useLanguage';
import { limit } from '@/constants';

export const ScheduleContainer = () => {
  const [selectedLanguage] = useLanguage();
  const { raceScheduleList, eventScheduleList } = useGetSchedule({ limit });
  const heroImageSrc = useBreakpointValue({
    base: '/images/schedule/img-schedule-top-sp.webp',
    lg: '/images/schedule/img-schedule-top-pc.webp',
  });

  if (!raceScheduleList || !eventScheduleList)
    return <Box>データがありません。</Box>;

  return (
    <>
      <ScheduleHeroImage heroImageSrc={heroImageSrc} />
      <Title title="Schedule" subTitle="Schedule" />
      <Schedule
        raceScheduleList={raceScheduleList}
        eventScheduleList={eventScheduleList}
        selectedLanguage={selectedLanguage}
      />
      <MainLayout>
        <Box mb={{ base: '144px', lg: '192px' }}>
          {/* <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
            gap={0}
            color="#FFF"
            fontWeight="bold"
          >
            {winCounterData.map((item, index) => (
              <WinCounter
                key={index}
                count={item.count}
                text={item.text}
                isLastContent={index === winCounterData.length - 1}
              />
            ))}
          </Grid> */}
        </Box>
      </MainLayout>
    </>
  );
};
