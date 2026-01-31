import { MainLayout } from '@/shared/ui/main-layout';
import { Member } from '@/constants';
import { Box, Grid, Image, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { TeamMemberSmallTitle } from './team-member-small-title';
import { NavigateFunction } from 'react-router-dom';

interface Props {
  mainStaffs: Member[];
  subStaffs: Member[];
  navigate: NavigateFunction;
}

export const TeamMemberStaff: FC<Props> = ({
  mainStaffs,
  subStaffs,
  navigate,
}) => {
  return (
    <MainLayout>
      <Box mb={{ base: '200px', lg: '280px' }}>
        <TeamMemberSmallTitle title="The Staff" />
        <VStack spacing={24}>
          {/* メインスタッフ表示 */}
          <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
            gap={8}
          >
            {mainStaffs.map(staff => (
              <Box
                key={staff.id}
                cursor="pointer"
                position="relative"
                onClick={() => navigate(`/member-page/${staff.id}`)}
              >
                <Box
                  w={{ base: '100%', lg: '72%' }}
                  m="0 auto"
                  bg="black"
                  h="100%"
                >
                  <Image src={staff.gradationImagesPath} />
                </Box>
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
                  <Text fontSize="18px" mr="48px">
                    {staff.nameJa}
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

          {/* サブスタッフ表示 */}
          <Grid
            templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)' }}
            gap={{ base: 8, lg: 8 }}
          >
            {subStaffs.map(staff => (
              <Box key={staff.id} position="relative">
                <Box
                  w={{ base: '100%', lg: '72%' }}
                  m="0 auto"
                  bg="black"
                  h="100%"
                  minH="126px"
                >
                  <Image src={staff.gradationImagesPath} />
                </Box>
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
                  <Text
                    fontSize={{
                      base: staff.nameJa.length >= 7 ? '12px' : '18px',
                      lg: '18px',
                    }}
                  >
                    {staff.nameJa}
                  </Text>
                </Box>
              </Box>
            ))}
          </Grid>
        </VStack>
      </Box>
    </MainLayout>
  );
};
