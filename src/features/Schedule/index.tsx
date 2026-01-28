import { PageLayout } from '@/shared/ui/page-layout';
import { Title } from '@/shared/ui/title';
import { Box, Image } from '@chakra-ui/react';
import { Schedule } from './Schedule';
import { OurPartners } from '../top/OurPartners';
import { OfficialMedia } from '../top/OfficialMedia';
import { MainLayout } from '@/shared/ui/main-layout';

export const ScheduleComponent = () => {
  return (
    <PageLayout>
      {/* sp時 */}
      <Box
        position="relative"
        display={{ base: 'block', lg: 'none' }}
        h={{ base: 'auto', lg: 'calc(100vh - 55px)' }}
        mb="64px"
      >
        <Image
          src="/images/schedule/img-schedule-top-sp.webp"
          mt="108px"
          objectFit="contain"
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="#000"
          opacity={0.5}
          zIndex="1"
        />
      </Box>
      {/* pc時 */}
      <Box
        position="relative"
        display={{ base: 'none', lg: 'block' }}
        h={{ base: 'auto', lg: 'calc(100vh - 55px)' }}
        mb="128px"
        mt="52px"
      >
        <Image
          src="/images/schedule/img-schedule-top-pc.webp"
          w="100%"
          h="100%"
          objectFit="cover"
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="#000"
          opacity={0.5}
          zIndex="1"
        />
      </Box>
      <Title title="Schedule" subTitle="Schedule" />
      <Schedule />
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
      <Title title="Our partners" subTitle="Our partners" />
      <OurPartners />
      <OfficialMedia />
    </PageLayout>
  );
};
