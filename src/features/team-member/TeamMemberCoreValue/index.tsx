import { Box, Divider, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { TeamMemberTitle } from '../components/TeamMemberTitle';
import { useTranslation } from 'react-i18next';

export const TeamMemberCoreValue: FC = () => {
  const { t } = useTranslation('ourTeam');

  return (
    <Box mb="192px" color="white">
      <Divider orientation="horizontal" mx="auto" w="76%" />
      <Box
        background={`linear-gradient(rgba(26, 26, 26, 1), rgba(0, 0, 0, 0.3)), url(/images/common/img-bg-lattice.webp)`}
        backgroundSize="80%"
        pt="74px"
        pb={{ base: '92px', lg: '118px' }}
      >
        <TeamMemberTitle
          title='"存在意義・使命"'
          middleTitle="Mission"
          subTitle="Mission"
        />
        <VStack
          spacing="48px"
          m="0 auto"
          mt="128px"
          w={{ base: '76%', lg: '418px' }}
        >
          <Text
            textAlign="center"
            fontSize={{ base: '16px', md: '17px', lg: '18px' }}
          >
            {t('ourTeamMission')}
          </Text>
        </VStack>
      </Box>
      <Divider orientation="horizontal" mx="auto" w="76%" />
      <Box
        background={`linear-gradient(rgba(0, 0, 0, 0.3), rgba(26, 26, 26, 1), rgba(0, 0, 0, 0.3)), url(/images/common/img-bg-lattice.webp)`}
        backgroundSize="80%"
        pt="74px"
        pb={{ base: '92px', lg: '118px' }}
      >
        <TeamMemberTitle
          title='"将来像・方向性"'
          middleTitle="Vision"
          subTitle="Vision"
        />
        <VStack
          spacing="48px"
          m="0 auto"
          mt="128px"
          w={{ base: '76%', lg: '648px' }}
        >
          <Text
            textAlign="center"
            fontSize={{ base: '16px', md: '17px', lg: '18px' }}
          >
            {t(`ourTeamVision.${0}`)}
          </Text>
          <Text
            textAlign="center"
            fontSize={{ base: '16px', md: '17px', lg: '18px' }}
          >
            {t(`ourTeamVision.${1}`)}
          </Text>
          <Text
            textAlign="center"
            fontSize={{ base: '16px', md: '17px', lg: '18px' }}
          >
            {t(`ourTeamVision.${2}`)}
          </Text>
        </VStack>
      </Box>
      <Divider orientation="horizontal" mx="auto" w="76%" />
      <Box
        background={`linear-gradient(rgba(0, 0, 0, 0.3), rgba(26, 26, 26, 1)), url(/images/common/img-bg-lattice.webp)`}
        backgroundSize="80%"
        pt="74px"
        pb={{ base: '92px', lg: '118px' }}
      >
        <TeamMemberTitle
          title='"価値観・行動指針"'
          middleTitle="Value"
          subTitle="Value"
        />
        <VStack
          spacing="48px"
          m="0 auto"
          mt="128px"
          w={{ base: '76%', lg: '648px' }}
        >
          <Box>
            <Text
              textAlign="center"
              fontSize={{ base: '16px', md: '17px', lg: '18px' }}
              fontWeight="bold"
            >
              {t(`ourTeamValueTitle.${0}`)}
            </Text>
            <Text
              textAlign="center"
              fontSize={{ base: '16px', md: '17px', lg: '18px' }}
            >
              {t('ourTeamValueBusiness')}
            </Text>
          </Box>
          <Box>
            <Text
              textAlign="center"
              fontSize={{ base: '16px', md: '17px', lg: '18px' }}
              fontWeight="bold"
            >
              {t(`ourTeamValueTitle.${1}`)}
            </Text>
            <Text
              textAlign="center"
              fontSize={{ base: '16px', md: '17px', lg: '18px' }}
            >
              {t('ourTeamValueChallenge')}
            </Text>
          </Box>
          <Box>
            <Text
              textAlign="center"
              fontSize={{ base: '16px', md: '17px', lg: '18px' }}
              fontWeight="bold"
            >
              {t(`ourTeamValueTitle.${2}`)}
            </Text>
            <Text
              textAlign="center"
              fontSize={{ base: '16px', md: '17px', lg: '18px' }}
            >
              {t('ourTeamValueFeeling')}
            </Text>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};
