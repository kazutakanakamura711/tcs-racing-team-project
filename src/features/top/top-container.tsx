import { Title, Message, CenteredContainer } from '@/shared/ui';
import { useTopContainer } from './model/hooks/use-top-container';
import { Box } from '@chakra-ui/react';
import { TopSchedule, TopSlider, TopStaff, TopTheTeam, TopUpdates } from './ui';

export const TopContainer = () => {
  const {
    tTopTheTeam,
    tTeamMember,
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
        mt={{ base: '110px', md: '50px' }}
      >
        <TopSlider isTablet={isTablet} images={topSliderImages} />
      </Box>
      <CenteredContainer>
        <Message message={message} />
      </CenteredContainer>
      <CenteredContainer>
        <Title title="Updates" subTitle="Updates" />
      </CenteredContainer>
      <TopUpdates
        updateFirstArray={updateFirstArray}
        updateSecondArray={updateSecondArray}
        updateThirdArray={updateThirdArray}
        navigate={navigate}
        selectedLanguage={selectedLanguage}
      />
      <CenteredContainer>
        <Title title="The Team" subTitle="The Team" />
      </CenteredContainer>
      <TopTheTeam
        t={tTopTheTeam}
        tTeamMember={tTeamMember}
        director={director}
        riderPairs={riderPairs}
        navigate={navigate}
      />
      <CenteredContainer>
        <Title
          title="TheStaff"
          subTitle="TheStaff"
          isCenter
          isHiddenUnderLine
        />
      </CenteredContainer>
      <TopStaff staffList={staffList} navigate={navigate} />
      <CenteredContainer>
        <Title title="Schedule" subTitle="Schedule" />
      </CenteredContainer>
      <TopSchedule
        raceScheduleList={raceScheduleList}
        eventScheduleList={eventScheduleList}
        selectedLanguage={selectedLanguage}
      />
    </>
  );
};
