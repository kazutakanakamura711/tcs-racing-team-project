import { Box, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface Props {
  message: {
    title: string;
    text: string;
  };
}

export const Message: FC<Props> = ({ message }) => {
  return (
    <Box position="relative" my="92px">
      <Box w="214px" h="214px" m="0 auto" opacity="0.5">
        <Image
          src="/images/common/ico-team-logo.webp"
          objectFit="cover"
          alt=""
        />
      </Box>
      <Box
        w="100%"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
        zIndex="2"
      >
        <Text
          fontSize={{ base: '17px', lg: '50px' }}
          fontWeight="bold"
          mb="16px"
          color="white"
        >
          {message.title}
        </Text>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          fontWeight="bold"
          color="white"
          maxW={{ base: '', lg: '590px' }}
          m="0 auto"
        >
          {message.text}
        </Text>
      </Box>
    </Box>
  );
};
