import { ChangeEvent, useEffect } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/shared/hooks/use-language';
import { parseLanguage } from '@/shared/store/language-store';
import { useGetWindowWidth } from '@/shared/hooks/use-get-window-width';

export const useHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useLanguage();

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = parseLanguage(event.target.value);
    i18n.changeLanguage(newLanguage);
    setSelectedLanguage(newLanguage);
  };

  const { isTablet } = useGetWindowWidth();
  const mb = isTablet ? '16px' : '0';

  return {
    isOpen,
    onOpen,
    onClose,
    selectedLanguage,
    handleLanguageChange,
    mb,
  };
};
