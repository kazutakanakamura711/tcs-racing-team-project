import { MainLayout } from '@/shared/ui/main-layout';
import { Box, VStack } from '@chakra-ui/react';
import { ScheduleItem } from '@/shared/ui/schedule-item';
import { LinkButton } from '@/shared/ui/link-button';
import { ScheduleTitle } from './schedule-title';

import { ScheduleItem as ScheduleItemType } from '@/entities/schedule';

interface Props {
  raceScheduleList: ScheduleItemType[];
  eventScheduleList: ScheduleItemType[];
  selectedLanguage: string;
}

export const TopSchedule: React.FC<Props> = ({
  raceScheduleList,
  eventScheduleList,
  selectedLanguage,
}) => {
  if (!raceScheduleList || !eventScheduleList)
    return <Box>データがありません。</Box>;

  return (
    <Box mb="117px">
      <MainLayout>
        <Box display={{ base: 'block', lg: 'flex' }} gap="64px" mb="70px">
          <Box flex="1" mb={{ base: '81px', lg: '0px' }}>
            <ScheduleTitle text="Race" />
            <VStack gap="24px" display="grid">
              {raceScheduleList.length === 0 && (
                <Box color="white">Coming soon..</Box>
              )}
              {raceScheduleList.map(item => (
                <ScheduleItem
                  key={item.id}
                  url={item.url}
                  title={item[`title${selectedLanguage}`]}
                  startDate={item[`startDate${selectedLanguage}`]}
                  endDate={item[`endDate${selectedLanguage}`]}
                  location={item[`location${selectedLanguage}`]}
                />
              ))}
            </VStack>
          </Box>
          <Box flex="1">
            <ScheduleTitle text="Events" />
            <VStack gap="24px" display="grid">
              {eventScheduleList.length === 0 && (
                <Box color="white">Coming soon..</Box>
              )}
              {eventScheduleList.map(item => (
                <ScheduleItem
                  key={item.id}
                  url={item.url}
                  title={item[`title${selectedLanguage}`]}
                  startDate={item[`startDate${selectedLanguage}`]}
                  endDate={item[`endDate${selectedLanguage}`]}
                  location={item[`location${selectedLanguage}`]}
                />
              ))}
            </VStack>
          </Box>
        </Box>
        <LinkButton link="/schedule-page" text="Overview" />
      </MainLayout>
    </Box>
  );
};
