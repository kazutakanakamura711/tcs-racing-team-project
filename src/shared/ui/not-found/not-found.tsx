import { Box, VStack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { LinkButton } from '../link-button';
import { TOP } from '@/shared/constants';

type NotFoundProps = {
  errorCode: string;
  title: string;
  description: string;
  backToTopText: string;
};

export const NotFound: FC<NotFoundProps> = ({
  errorCode,
  title,
  description,
  backToTopText,
}) => {
  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="#1a1a1a"
      px={{ base: 4, md: 8 }}
    >
      <VStack spacing={8} textAlign="center">
        <VStack spacing={4}>
          <Text
            fontSize={{ base: '4xl', md: '6xl' }}
            fontWeight="bold"
            color="white"
          >
            {errorCode}
          </Text>
          <Text
            fontSize={{ base: 'xl', md: '2xl' }}
            fontWeight="bold"
            color="white"
          >
            {title}
          </Text>
          <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.400">
            {description}
          </Text>
        </VStack>
        <LinkButton text={backToTopText} link={TOP} />
      </VStack>
    </Box>
  );
};
