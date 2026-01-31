import { TopSlider } from './ui/top-slider/top-slider';
import { Title } from '@/shared/ui/title';
import { TopUpdates } from './ui/top-updates/top-updates';
import { TopTheTeam } from './ui/top-the-team';
import { TopStaff } from './ui/top-staff/top-staff';
import { PageLayout } from '@/shared/ui/page-layout';
import { Box } from '@chakra-ui/react';
import { Message } from '@/shared/ui/message';
import { useTranslation } from 'react-i18next';
import { TopSchedule } from './ui/top-schedule/top-schedule';
import { TopOfficialMedia } from './ui/top-official-media';
import { TopOurPartners } from './ui/top-our-partners';

export const TopContainer = () => {
  const { t } = useTranslation('topMessage');
  const message = {
    title: 'Asia Union TCS Racing Team',
    text: t('teamDescription'),
  };

  return (
    <>
      <PageLayout>
        <Box
          position="relative"
          h={{ base: 'calc(100vh - 90px)', lg: 'calc(100vh - 90px)' }}
          mt={{ base: '110px', lg: '50px' }}
        >
          <TopSlider />
        </Box>
        <Message message={message} />
        <Title title="Updates" subTitle="Updates" id="Updates" />
        <TopUpdates />
        <Title title="The Team" subTitle="The Team" id="TopTheTeam" />
        <TopTheTeam />
        <Title
          title="TheStaff"
          subTitle="TheStaff"
          id="TheStaff"
          isCenter
          isHiddenUnderLine
        />
        <TopStaff />
        <Title title="Schedule" subTitle="Schedule" id="Schedule" />
        <TopSchedule />
        <Title title="Our Partners" subTitle="Our Partners" id="Partners" />
        <TopOurPartners />
        <TopOfficialMedia />
      </PageLayout>
    </>
  );
};
