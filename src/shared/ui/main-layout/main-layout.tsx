import { Box } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  children: React.ReactNode;
};

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <Box w={{ base: '85%', lg: '76%' }} maxW="1000px" m="0 auto" color="white">
      {children}
    </Box>
  );
};
