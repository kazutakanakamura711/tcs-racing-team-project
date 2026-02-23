import { Box, Image } from '@chakra-ui/react';
import { FC } from 'react';

export const ContactHeroImage: FC = () => {
  return (
    <Box
      position="relative"
      mt={{ base: '110px', lg: '50px' }}
      w="100%"
      objectFit="contain"
    >
      <Image
        w="100%"
        objectFit="contain"
        display="block"
        src="/images/contact/img-contact-top.webp"
        alt=""
      />
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="#1A1A1A"
        opacity={0.5}
        zIndex="1"
      />
    </Box>
  );
};
