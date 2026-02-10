import { Title } from '@/shared/ui/title';
import { Box } from '@chakra-ui/react';
import { Schedule, ScheduleHeroImage } from './ui';
import { CenteredContainer } from '@/shared/ui';
import { useScheduleContainer } from './model/hooks/use-schedule-container';

export const ScheduleContainer = () => {
  const {
    selectedLanguage,
    raceScheduleList,
    eventScheduleList,
    heroImageSrc,
  } = useScheduleContainer();

  if (!raceScheduleList || !eventScheduleList)
    return <Box>データがありません。</Box>;

  return (
    <>
      <ScheduleHeroImage heroImageSrc={heroImageSrc} />
      <CenteredContainer>
        <Title title="Schedule" subTitle="Schedule" />
      </CenteredContainer>
      <Schedule
        raceScheduleList={raceScheduleList}
        eventScheduleList={eventScheduleList}
        selectedLanguage={selectedLanguage}
      />
      <CenteredContainer>
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
      </CenteredContainer>
    </>
  );
};
