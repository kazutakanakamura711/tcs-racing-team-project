import { mediaQuery } from '@/shared/utils/break-point/break-point';
import { useMediaQuery } from './use-media-query';

export const useGetWindowWidth = () => {
  const isTablet = useMediaQuery(mediaQuery.tablet);
  return { isTablet };
};
