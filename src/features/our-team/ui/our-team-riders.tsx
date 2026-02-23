import { CenteredContainer } from '@/shared/ui';
import { Member, OUR_TEAM_DETAIL } from '@/shared/constants';
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
                navigate(OUR_TEAM_DETAIL.replace(':id', rider.id));
              }}
            >
              <Image
                src={rider.ourTeamPageTheRiderSectionImagePath}
                h="100%"
                mx="auto"
                alt={rider.nameJa}
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
                    alt=""
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
