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
} from '@chakra-ui/react';
import {
  TOP,
  OUR_TEAM,
  SCHEDULE,
  OUR_PARTNERS,
  CONTACT,
  UPDATES,
} from '@/shared/constants';
import { Link as RouterLink } from 'react-router-dom';
import { Language, LanguageDisplay } from '@/shared/store/language-store';
import { ChangeEvent, FC } from 'react';

interface Props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  selectedLanguage: Language;
  handleLanguageChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  mb: string;
}

export const Header: FC<Props> = ({
  isOpen,
  onOpen,
  onClose,
  selectedLanguage,
  handleLanguageChange,
  mb,
}) => {
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
            <RouterLink to={TOP} onClick={onClose}>
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
                <RouterLink
                  to={UPDATES}
                  style={{ marginBottom: mb }}
                  onClick={onClose}
                >
                  Updates
                </RouterLink>
                <RouterLink
                  to={OUR_TEAM}
                  style={{ marginBottom: mb }}
                  onClick={onClose}
                >
                  Our Team
                </RouterLink>
                <RouterLink
                  to={SCHEDULE}
                  style={{ marginBottom: mb }}
                  onClick={onClose}
                >
                  Schedule
                </RouterLink>
                <RouterLink
                  to={OUR_PARTNERS}
                  style={{ marginBottom: mb }}
                  onClick={onClose}
                >
                  Partners
                </RouterLink>
                <RouterLink
                  to={CONTACT}
                  style={{ marginBottom: mb }}
                  onClick={onClose}
                >
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
            <RouterLink to={UPDATES}>Updates</RouterLink>
            <RouterLink to={OUR_TEAM}>Our Team</RouterLink>
            <RouterLink to={SCHEDULE}>Schedule</RouterLink>
            <RouterLink to={OUR_PARTNERS}>Partners</RouterLink>
            <RouterLink to={CONTACT}>Contact</RouterLink>
          </HStack>

          <Spacer display={{ base: 'block', lg: 'none' }} />

          <Select
            w="80px"
            h="26px"
            bg="#fff"
            color="#000"
            mr={{ base: '16px', lg: '0px' }}
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            <option value={Language.Ja}>{LanguageDisplay[Language.Ja]}</option>
            <option value={Language.En}>{LanguageDisplay[Language.En]}</option>
            <option value={Language.Id}>{LanguageDisplay[Language.Id]}</option>
          </Select>

          <Box
            display={{ base: 'block', lg: 'none' }}
            ml="auto"
            onClick={onOpen}
            cursor="pointer"
            data-testid="hamburger-menu"
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
