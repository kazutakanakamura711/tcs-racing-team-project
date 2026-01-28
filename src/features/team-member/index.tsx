import { PageLayout } from '@/shared/ui/page-layout';
import { Message } from '@/shared/ui/message';
import { OfficialMedia } from '../top/OfficialMedia';
import { OurPartners } from '../top/OurPartners';
import { Box, Image, Text } from '@chakra-ui/react';
import { Title } from '@/shared/ui/title';
import { TeamMemberStaff } from './TeamMemberStaff';
import { TeamMemberCoreValue } from './TeamMemberCoreValue';
import { TeamMemberRiders } from './TeamMemberRiders';
import { useTranslation } from 'react-i18next';

export const TeamMemberContent = () => {
  const { t } = useTranslation('ourTeam');
  const message = {
    title: t('ourTeamMissionTitle'),
    text: t('ourTeamMissionText'),
  };

  return (
    <Box>
      <PageLayout>
        {/* sp時 */}
        <Box
          position="relative"
          display={{ base: 'block', lg: 'none' }}
          h={{ base: 'auto', lg: 'calc(100vh - 52px)' }}
        >
          <Image src="/images/team/img-team-top-sp.webp" mt="108px" />
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="#000"
            opacity={0.5}
            zIndex="1"
            display={{ base: 'none', lg: 'block' }}
          />
          <Text
            fontSize="18px"
            fontWeight="bold"
            color="#FFF"
            position="absolute"
            bottom="0"
            left="50%"
            transform="translate(-50%, -50%)"
            zIndex="2"
            display={{ base: 'none', lg: 'block' }}
          >
            熱狂的に | Go Crazy
            <Box as="span" display="block" textAlign="center" fontSize="12px">
              - 前進・革新・熱心 -
            </Box>
          </Text>
        </Box>
        {/* pc時 */}
        <Box
          position="relative"
          display={{ base: 'none', lg: 'block' }}
          h={{ base: 'auto', lg: 'calc(100vh - 52px)' }}
          mt="52px"
        >
          <Image
            src="/images/team/img-team-top-pc.webp"
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
          <Text
            fontSize="48px"
            fontWeight="bold"
            color="#FFF"
            position="absolute"
            bottom="0"
            left="50%"
            transform="translate(-50%, -50%)"
            zIndex="2"
          >
            熱狂的に | Go Crazy
            <Box as="span" display="block" textAlign="center" fontSize="30px">
              - 前進・革新・熱心 -
            </Box>
          </Text>
        </Box>

        <Message message={message} />
        <TeamMemberCoreValue />
        <Title title="The Riders" subTitle="The Riders" />
        <TeamMemberRiders />
        <TeamMemberStaff />
        <Title title="Our Partners" subTitle="Our Partners" />
        <OurPartners />
        <OfficialMedia />
      </PageLayout>
    </Box>
  );
};
