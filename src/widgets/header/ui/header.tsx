import {
  Box,
  Button,
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
            <DrawerContent mt="110px" color="text.black" bg="#fff">
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody
                as="nav"
                aria-label="Mobile navigation"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
              >
                <Box
                  as="ul"
                  listStyleType="none"
                  m="0"
                  p="0"
                  textAlign="center"
                >
                  <Box as="li" mb={mb}>
                    <RouterLink to={UPDATES} onClick={onClose}>
                      Updates
                    </RouterLink>
                  </Box>
                  <Box as="li" mb={mb}>
                    <RouterLink to={OUR_TEAM} onClick={onClose}>
                      Our Team
                    </RouterLink>
                  </Box>
                  <Box as="li" mb={mb}>
                    <RouterLink to={SCHEDULE} onClick={onClose}>
                      Schedule
                    </RouterLink>
                  </Box>
                  <Box as="li" mb={mb}>
                    <RouterLink to={OUR_PARTNERS} onClick={onClose}>
                      Partners
                    </RouterLink>
                  </Box>
                  <Box as="li" mb={mb}>
                    <RouterLink to={CONTACT} onClick={onClose}>
                      Contact
                    </RouterLink>
                  </Box>
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          <Spacer display={{ base: 'none', lg: 'block' }} />
          <Box as="nav" aria-label="Primary navigation">
            <HStack
              as="ul"
              spacing="41px"
              color="text.white"
              mr="16px"
              display={{ base: 'none', lg: 'flex' }}
              listStyleType="none"
              m="0"
              p="0"
            >
              <Box as="li">
                <RouterLink to={UPDATES}>Updates</RouterLink>
              </Box>
              <Box as="li">
                <RouterLink to={OUR_TEAM}>Our Team</RouterLink>
              </Box>
              <Box as="li">
                <RouterLink to={SCHEDULE}>Schedule</RouterLink>
              </Box>
              <Box as="li">
                <RouterLink to={OUR_PARTNERS}>Partners</RouterLink>
              </Box>
              <Box as="li">
                <RouterLink to={CONTACT}>Contact</RouterLink>
              </Box>
            </HStack>
          </Box>

          <Spacer display={{ base: 'block', lg: 'none' }} />

          <Select
            aria-label="Select language"
            id="language-selector"
            name="language"
            w="80px"
            h="26px"
            bg="#fff"
            color="text.black"
            mr={{ base: 4, lg: 0 }}
            ml={{ base: 0, lg: 4 }}
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            <option value={Language.Ja}>{LanguageDisplay[Language.Ja]}</option>
            <option value={Language.En}>{LanguageDisplay[Language.En]}</option>
            <option value={Language.Id}>{LanguageDisplay[Language.Id]}</option>
          </Select>

          <Button
            type="button"
            variant="unstyled"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            display={{ base: 'block', lg: 'none' }}
            ml="auto"
            onClick={isOpen ? onClose : onOpen}
            cursor="pointer"
            data-testid="hamburger-menu"
          >
            <Box w="30px" h="2px" bg="#fff" mb="5px" />
            <Box w="30px" h="2px" bg="#fff" mb="5px" ml="8px" />
            <Box w="30px" h="2px" bg="#fff" />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
