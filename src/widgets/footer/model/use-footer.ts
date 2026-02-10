import { useGetWindowWidth } from '@/shared/hooks/use-get-window-width';

export const useFooter = () => {
  const { isTablet } = useGetWindowWidth();

  const fontSize = isTablet ? '10px' : '24px';

  return {
    isTablet,
    fontSize,
  };
};
