import { Box, Image } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  src: string;
  isHoverEffectEnabled?: boolean;
};

export const ImageFilter: FC<Props> = ({
  src,
  isHoverEffectEnabled = false,
}) => {
  return (
    <Box
      w="100%"
      position="relative"
      overflow="hidden"
      _hover={{
        '> img': isHoverEffectEnabled ? { transform: 'scale(1.1)' } : {},
      }}
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgGradient="linear(to-b, rgba(26, 26, 26, 0), #000)"
        zIndex="2"
      />
      <Image
        display="block"
        w="100%"
        minH="285px"
        maxH="378px"
        src={src}
        alt=""
        transition={isHoverEffectEnabled ? 'transform 0.3s ease' : ''}
        objectFit="cover"
      />
    </Box>
  );
};
