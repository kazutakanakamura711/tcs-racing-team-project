import { TopSlider } from './ui/top-slider/top-slider';
import { Title } from '@/shared/ui/title';
import { TopUpdates } from './ui/top-updates/top-updates';
import { TopTheTeam } from './ui/top-the-team';
import { TopStaff } from './ui/top-staff/top-staff';
import { Box } from '@chakra-ui/react';
import { Message } from '@/shared/ui/message';
import { TopSchedule } from './ui/top-schedule/top-schedule';
import { useTopContainer } from './model/hooks/use-top-container';

export const TopContainer = () => {
  const {
    tTopTheTeam,
    message,
    isTablet,
    navigate,
    staffList,
    raceScheduleList,
    eventScheduleList,
    selectedLanguage,
    updateFirstArray,
    updateSecondArray,
    updateThirdArray,
    director,
    riderPairs,
    topSliderImages,
  } = useTopContainer();

  return (
    <>
      <Box
        position="relative"
        h={{ base: 'calc(100vh - 90px)', lg: 'calc(100vh - 90px)' }}
        mt={{ base: '110px', lg: '50px' }}
      >
        <TopSlider isTablet={isTablet} images={topSliderImages} />
      </Box>
      <Message message={message} />
      <Title title="Updates" subTitle="Updates" />
      <TopUpdates
        updateFirstArray={updateFirstArray}
        updateSecondArray={updateSecondArray}
        updateThirdArray={updateThirdArray}
        navigate={navigate}
        selectedLanguage={selectedLanguage}
      />
      <Title title="The Team" subTitle="The Team" />
      <TopTheTeam t={tTopTheTeam} director={director} riderPairs={riderPairs} />
      <Title title="TheStaff" subTitle="TheStaff" isCenter isHiddenUnderLine />
      <TopStaff staffList={staffList} navigate={navigate} />
      <Title title="Schedule" subTitle="Schedule" />
      <TopSchedule
        raceScheduleList={raceScheduleList}
        eventScheduleList={eventScheduleList}
        selectedLanguage={selectedLanguage}
      />
    </>
  );
};
