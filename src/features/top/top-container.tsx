import { TopSlider } from './ui/top-slider/top-slider';
import { Title } from '@/shared/ui/title';
import { TopUpdates } from './ui/top-updates/top-updates';
import { TopTheTeam } from './ui/top-the-team';
import { TopStaff } from './ui/top-staff/top-staff';
import { Box } from '@chakra-ui/react';
import { Message } from '@/shared/ui/message';
import { useTranslation } from 'react-i18next';
import { TopSchedule } from './ui/top-schedule/top-schedule';
import { useGetWindowWidth } from '@/shared/hooks/useGetWindowWidth';
import { useNavigate } from 'react-router-dom';
import { getTopTheStaffList } from '@/constants';
import { useGetSchedule } from '@/shared/hooks/useGetSchedule';
import { useLanguage } from '@/state/languageState/useLanguage';
import { useUpDateContents } from './model/hooks/useUpDateContents';
import { topSliderImages, getDirector, getRiders, Member } from '@/constants';

const limit = 6;

export const TopContainer = () => {
  const { t } = useTranslation('topMessage');
  const { t: tTopTheTeam } = useTranslation('topTheTeam');
  const message = {
    title: 'Asia Union TCS Racing Team',
    text: t('teamDescription'),
  };

  const { isTablet } = useGetWindowWidth();
  const navigate = useNavigate();
  const staffList = getTopTheStaffList();
  const { raceScheduleList, eventScheduleList } = useGetSchedule({ limit });
  const [selectedLanguage] = useLanguage();
  const { updateFirstArray, updateSecondArray, updateThirdArray } =
    useUpDateContents();

  // memberType で director と riders を取得
  const director = getDirector();
  const riders = getRiders();

  // riders を2人ずつのペアに分割
  const riderPairs: [Member, Member | undefined][] = [];
  for (let i = 0; i < riders.length; i += 2) {
    riderPairs.push([riders[i], riders[i + 1]]);
  }

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
