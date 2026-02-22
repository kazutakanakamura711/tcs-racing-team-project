import {
  UPDATES,
  OUR_TEAM,
  SCHEDULE,
  OUR_PARTNERS,
  CONTACT,
} from '@/shared/constants';
import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { CenteredContainer } from '@/shared/ui';
import { FC } from 'react';

interface Props {
  isTablet: boolean;
  fontSize: string;
}

export const Footer: FC<Props> = ({ isTablet, fontSize }) => {
  return (
    <Box as="footer">
      <CenteredContainer>
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
              <VStack as="ul" align="start" listStyleType="none" m="0" p="0">
                <Box as="li">
                  <Link to={UPDATES}>News</Link>
                </Box>
                <Box as="li">
                  <Link to={OUR_TEAM}>Team</Link>
                </Box>
                <Box as="li">
                  <Link to={SCHEDULE}>Schedule</Link>
                </Box>
                <Box as="li">
                  <Link to={OUR_PARTNERS}>Partner</Link>
                </Box>
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
              <VStack as="ul" align="start" listStyleType="none" m="0" p="0">
                <Box as="li">
                  <Link to={CONTACT}>Contact</Link>
                </Box>
              </VStack>
            </Box>
          </Box>
          <Box w="50%" display="flex" justifyContent="center">
            <Link
              to="#"
              style={{
                color: 'text.white',
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
      </CenteredContainer>
      <Box
        w="100%"
        pt="7.5px"
        pb="5px"
        bg="#fff"
        color="#333333"
        fontSize={{ base: '10px', lg: '14px' }}
        fontWeight="bold"
        textAlign="center"
      >
        Copyright &copy; 2024 TCS Racing Team All Rights Reserved.
      </Box>
    </Box>
  );
};
