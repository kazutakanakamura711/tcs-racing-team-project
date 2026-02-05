import { Box, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface Props {
  heroImageSrc: string | undefined;
}

export const TeamMemberHeroImage: FC<Props> = ({ heroImageSrc }) => {
  return (
    <Box
      position="relative"
      h={{ base: 'auto', lg: 'calc(100vh - 52px)' }}
      mt={{ base: '0', lg: '52px' }}
    >
      <Image
        src={heroImageSrc}
        w={{ base: 'auto', lg: '100%' }}
        h={{ base: 'auto', lg: '100%' }}
        objectFit={{ base: 'initial', lg: 'cover' }}
        mt={{ base: '108px', lg: '0' }}
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
        display={{ base: 'none', lg: 'block' }}
      />
      <Text
        fontSize="48px"
        fontWeight="bold"
        color="#FFF"
        position="absolute"
        bottom="0"
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex="2"
        display={{ base: 'none', lg: 'block' }}
      >
        熱狂的に | Go Crazy
        <Box as="span" display="block" textAlign="center" fontSize="30px">
          - 前進・革新・熱心 -
        </Box>
      </Text>
    </Box>
  );
};
