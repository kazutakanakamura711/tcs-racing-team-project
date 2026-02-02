import { LinkButton } from '@/shared/ui/link-button';
import { MainLayout } from '@/shared/ui/main-layout';
import { Member, MemberId } from '@/constants';
import { Box, Divider, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import { NavigateFunction } from 'react-router-dom';

interface Props {
  staffList: Member[];
  navigate: NavigateFunction;
}

export const TopStaff: React.FC<Props> = ({ staffList, navigate }) => {
  return (
    <Box mb="116px">
      <MainLayout>
        <Grid
          templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
          gap={{ base: '16px', lg: 12 }}
          mb="16px"
          justifyItems="center"
        >
          {staffList.map(staff => (
            <GridItem
              key={staff.id}
              w="full"
              h="auto"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                position="relative"
                mb="16px"
                h="100%"
                cursor={
                  staff.id === MemberId.YusukeFukumitsu ? 'pointer' : 'default'
                }
                onClick={() => {
                  if (staff.id === MemberId.YusukeFukumitsu) {
                    navigate(`/member-page/${staff.id}`);
                  }
                }}
              >
                <Image
                  src={staff.gradationImagesPath}
                  alt={staff.nameJa}
                  margin="auto"
                  w="full"
                  maxW={{ base: 'full', lg: '216px' }}
                  h="auto"
                  objectFit="cover"
                />
                <Box
                  position="absolute"
                  top="104%"
                  left="10%"
                  transform="translateY(-100%)"
                >
                  <Text fontSize={{ base: '10px', lg: '16px' }}>
                    {staff.memberType}
                  </Text>
                  <Text fontSize={{ base: '10px', lg: '16px' }}>
                    {staff.nameJa}
                  </Text>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
        <LinkButton link="/team-member" text="Overview" />
      </MainLayout>
      <Divider orientation="horizontal" mt="64px" mx="auto" w="90%" />
    </Box>
  );
};
