import { CenteredContainer } from '@/shared/ui';
import {
  Member,
  MemberId,
  OUR_TEAM,
  OUR_TEAM_DETAIL,
} from '@/shared/constants';
import { Box, Grid, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { NavigateFunction } from 'react-router-dom';

interface Props {
  riders: Member[];
  navigate: NavigateFunction;
}

export const OurTeamRiders: FC<Props> = ({ riders, navigate }) => {
  return (
    <CenteredContainer>
      <Box mb="160px">
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
          gap={8}
        >
          {riders.map(rider => (
            <Box
              key={rider.id}
              cursor="pointer"
              position="relative"
              aspectRatio="1097 / 880"
              onClick={() => {
                // TODO: 後でidがFiliYudiono,RinaZaki,AyakaHiyoshiの条件分岐を削除する
                if (
                  rider.id === MemberId.FiliYudiono ||
                  rider.id === MemberId.RinaZaki ||
                  rider.id === MemberId.AyakaHiyoshi
                ) {
                  navigate(OUR_TEAM);
                  return;
                }
                const path = OUR_TEAM_DETAIL.replace(':id', rider.id);
                navigate(path);
              }}
            >
              <Image
                src={rider.ourTeamPageTheRiderSectionImagePath}
                h="100%"
                mx="auto"
              />
              <Box
                position="absolute"
                bottom="0"
                left="50%"
                transform="translate(-50%, -50%)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                w="100%"
              >
                <Text fontSize="24px" mr="48px">
                  {rider.nameJa}
                </Text>
                <Box>
                  <Image
                    w="11px"
                    h="25px"
                    src="/images/common/ico-arrow-white-brock.svg"
                  />
                </Box>
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>
    </CenteredContainer>
  );
};
