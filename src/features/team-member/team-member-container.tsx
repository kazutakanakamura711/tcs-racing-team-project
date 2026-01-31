import { PageLayout } from '@/shared/ui/page-layout';
import { Message } from '@/shared/ui/message';
import { TopOfficialMedia } from '../top/ui/top-official-media/top-official-media';
import { TopOurPartners } from '../top/ui/top-our-partners';
import { Box, Image, Text } from '@chakra-ui/react';
import { Title } from '@/shared/ui/title';
import { useTranslation } from 'react-i18next';
import { TeamMemberRiders, TeamMemberStaff, TeamMemberSummary } from './ui';
import { useNavigate } from 'react-router-dom';
import {
  getOurTeamPageTheRiderSectionList,
  getOurTeamTheStaffMainList,
  getOurTeamTheStaffSubList,
} from '@/constants';

export const TeamMemberContainer = () => {
  const { t } = useTranslation('ourTeam');
  const navigate = useNavigate();
  const riders = getOurTeamPageTheRiderSectionList();
  const mainStaffs = getOurTeamTheStaffMainList();
  const subStaffs = getOurTeamTheStaffSubList();

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
        <TeamMemberSummary t={t} />
        <Title title="The Riders" subTitle="The Riders" />
        <TeamMemberRiders riders={riders} navigate={navigate} />
        <TeamMemberStaff
          mainStaffs={mainStaffs}
          subStaffs={subStaffs}
          navigate={navigate}
        />
        <Title title="Our Partners" subTitle="Our Partners" />
        <TopOurPartners />
        <TopOfficialMedia />
      </PageLayout>
    </Box>
  );
};
