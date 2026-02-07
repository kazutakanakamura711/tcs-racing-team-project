import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { MainLayout } from '@/shared/ui/main-layout/main-layout';
import { useFooter } from '../model/use-footer';

export const Footer = () => {
  const { isTablet, fontSize } = useFooter();

  return (
    <Box pt="117px">
      <MainLayout>
        <HStack alignItems="start" mb="37px">
          <Box
            display={{ base: 'block', lg: 'flex' }}
            w="50%"
            justifyContent="space-between"
            alignItems="start"
          >
            <Box mb={{ base: '71px', lg: '0px' }}>
              <Text
                fontWeight="bold"
                fontSize={{ base: '12px', lg: '24px' }}
                mb="23px"
              >
                USEFUL LINKS
              </Text>
              <VStack align="start">
                <Link to="/update-list">News</Link>
                <Link to="/team-member">Team</Link>
                <Link to="/schedule-page">Schedule</Link>
                <Link to="/our-partners">Partner</Link>
              </VStack>
            </Box>
            <Box>
              <Text
                fontWeight="bold"
                fontSize={{ base: '12px', lg: '24px' }}
                mb="23px"
              >
                READ MORE ABOUT
              </Text>
              <VStack align="start">
                <Link to="/Contact">Contact</Link>
              </VStack>
            </Box>
          </Box>
          <Box w="50%" display="flex" justifyContent="center">
            <Link
              to="#"
              style={{
                color: '#fff',
                fontWeight: 'bold',
                textAlign: 'left',
                fontSize,
              }}
            >
              FOLLOW US AND {isTablet && <br />}CHECK THE{!isTablet && <br />}
              TEAM {isTablet && <br />}ACTIVITY AND {isTablet && <br />}DAILY
              LIFE
            </Link>
          </Box>
        </HStack>
      </MainLayout>
      <Box
        w="100%"
        pt="7.5px"
        pb="5px"
        bg="#fff"
        color="#000"
        fontSize={{ base: '10px', lg: '14px' }}
        fontWeight="bold"
        textAlign="center"
      >
        Copyright &copy; 2024 TCS Racing Team All Rights Reserved.
      </Box>
    </Box>
  );
};
