import { mediaQuery } from '@/shared/utils/break-point/break-point';
import { useState, useEffect } from 'react';

export const useGetWindowWidth = () => {
  const [isTablet, setIsTablet] = useState(
    window.matchMedia(mediaQuery.tablet).matches,
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery.tablet);
    const handler = (e: MediaQueryListEvent) => setIsTablet(e.matches);
    mediaQueryList.addEventListener('change', handler);
    return () => mediaQueryList.removeEventListener('change', handler);
  }, []);

  return { isTablet };
};
