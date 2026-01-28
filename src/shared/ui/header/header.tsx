import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Image,
  Select,
  Spacer,
  useDisclosure,
} from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { ChangeEvent, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/state/languageState/useLanguage';
import { useGetWindowWidth } from '@/shared/hooks/useGetWindowWidth';

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useLanguage();

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
    setSelectedLanguage(newLanguage);
  };

  const { isTablet } = useGetWindowWidth();
  const mb = isTablet ? '16px' : '0';

  return (
    <Box as="header" position="fixed" top="0" left="0" zIndex="99999" w="100%">
      <Box bg="#1A1A1A" p={{ base: '33px 40px', lg: '13px 80px' }}>
        <Box position="relative" display="flex" alignItems="center">
          <Box
            position={{ base: 'unset', lg: 'absolute' }}
            top="50%"
            left="40px"
            zIndex="999"
            w={{ base: '128px', lg: '222px' }}
            h={{ base: 'auto', lg: 'auto' }}
            objectFit={{ base: 'contain', lg: 'none' }}
          >
            <RouterLink to="/">
              <Image src="/images/common/ico-team-logo-name.webp" alt="logo" />
            </RouterLink>
          </Box>
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent mt="110px">
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
              >
                <RouterLink to="/update-list" style={{ marginBottom: mb }}>
                  Updates
                </RouterLink>
                <RouterLink to="/team-member" style={{ marginBottom: mb }}>
                  Our Team
                </RouterLink>
                <RouterLink to="/schedule-page" style={{ marginBottom: mb }}>
                  Schedule
                </RouterLink>
                <RouterLink to="/our-partners" style={{ marginBottom: mb }}>
                  Partners
                </RouterLink>
                <RouterLink to="/contact" style={{ marginBottom: mb }}>
                  Contact
                </RouterLink>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          <Spacer display={{ base: 'none', lg: 'block' }} />
          <HStack
            spacing="41px"
            color="#fff"
            mr="16px"
            display={{ base: 'none', lg: 'flex' }}
          >
            <RouterLink to="/update-list">Updates</RouterLink>
            <RouterLink to="/team-member">Our Team</RouterLink>
            <RouterLink to="/schedule-page">Schedule</RouterLink>
            <RouterLink to="/our-partners">Partners</RouterLink>
            <RouterLink to="/Contact">Contact</RouterLink>
          </HStack>

          <Spacer display={{ base: 'block', lg: 'none' }} />

          <Select
            w="80px"
            h="26px"
            bg="#fff"
            mr={{ base: '16px', lg: '0px' }}
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            <option value="Ja">JP</option>
            <option value="En">EN</option>
            <option value="Id">ID</option>
          </Select>

          <Box
            display={{ base: 'block', lg: 'none' }}
            ml="auto"
            onClick={onOpen}
            cursor="pointer"
          >
            <Box w="30px" h="2px" bg="#fff" mb="5px" />
            <Box w="30px" h="2px" bg="#fff" mb="5px" ml="8px" />
            <Box w="30px" h="2px" bg="#fff" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
