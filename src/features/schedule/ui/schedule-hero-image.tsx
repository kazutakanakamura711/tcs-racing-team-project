import { Box, Image } from '@chakra-ui/react';
import { FC } from 'react';

interface Props {
  heroImageSrc: string | undefined;
}

export const ScheduleHeroImage: FC<Props> = ({ heroImageSrc }) => {
  return (
    <>
      <Box
        position="relative"
        h={{ base: 'auto', lg: 'calc(100vh - 55px)' }}
        mb={{ base: '64px', lg: '128px' }}
        mt={{ base: '0', lg: '52px' }}
      >
        <Image
          src={heroImageSrc}
          mt={{ base: '108px', lg: '0' }}
          w={{ base: 'auto', lg: '100%' }}
          h={{ base: 'auto', lg: '100%' }}
          objectFit={{ base: 'contain', lg: 'cover' }}
        />
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
    </>
  );
};
