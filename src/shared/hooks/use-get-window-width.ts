import { useMediaQuery } from '@chakra-ui/react';
import { mediaQuery } from '../utils/breakPoint/breakPoint';

export const useGetWindowWidth = () => {
  const [isTablet] = useMediaQuery(mediaQuery.tablet);

  return {
    isTablet,
  };
};
