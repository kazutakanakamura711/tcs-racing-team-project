import { WinCounterData } from '@/constants';
import { Box, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface Props extends WinCounterData {
  isLastContent?: boolean;
}

export const WinCounter: FC<Props> = ({
  count,
  text,
  isLastContent = false,
}) => {
  return (
    <Box
      textAlign={{ base: 'center', lg: 'left' }}
      borderLeft={{ base: '0px', lg: '1px' }}
      borderRight={{ base: '0px', lg: isLastContent ? '1px' : '0px' }}
      borderBottom={{ base: '1px', lg: '0px' }}
      pb="48px"
      px="36px"
    >
      <Box fontWeight="bold" fontSize="96px">
        {count}
      </Box>
      <Text>{text}</Text>
    </Box>
  );
};
