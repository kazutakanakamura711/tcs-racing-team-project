import { Box, Image } from '@chakra-ui/react';
import { FC } from 'react';

interface Props {
  heroImageSrc: string | undefined;
}

export const UpdatesDetailHeroImage: FC<Props> = ({ heroImageSrc }) => {
  return (
    <Box
      mt={{ base: '110px', lg: '50px' }}
      w="100vw"
      objectFit="contain"
      position="relative"
    >
      <Image w="100%" display="block" src={heroImageSrc} alt="UpdateContent" />
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="#000"
        opacity={0.5}
        zIndex="1"
      />
    </Box>
  );
};
