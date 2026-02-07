import { useMediaQuery } from '@chakra-ui/react';
import { mediaQuery } from '../utils/break-point/break-point';

export const useGetWindowWidth = () => {
  const [isTablet] = useMediaQuery(mediaQuery.tablet);

  return {
    isTablet,
  };
};
