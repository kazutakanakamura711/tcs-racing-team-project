import { MainLayout } from '@/shared/ui/main-layout';
import { Box, VStack } from '@chakra-ui/react';
import { ScheduleItem } from '@/shared/ui/schedule-item';
import { LinkButton } from '@/shared/ui/link-button';
import { ScheduleTitle } from './schedule-title';
import { useGetSchedule } from '@/shared/hooks/useGetSchedule';
import { useLanguage } from '@/state/languageState/useLanguage';

export interface ScheduleItem {
  id: number;
  [key: `title${string}`]: string;
  [key: `location${string}`]: string;
  [key: `startDate${string}`]: string;
  [key: `endDate${string}`]: string;
  url?: string;
}

const limit = 6;

export const TopSchedule = () => {
  const { raceScheduleList, eventScheduleList } = useGetSchedule({ limit });
  const [selectedLanguage] = useLanguage();
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
