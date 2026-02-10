import { Footer } from './ui/footer';
import { useFooter } from './model/use-footer';

export const FooterContainer = () => {
  const { isTablet, fontSize } = useFooter();

  return <Footer isTablet={isTablet} fontSize={fontSize} />;
};
