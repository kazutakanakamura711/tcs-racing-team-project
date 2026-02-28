import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/shared/hooks/use-language';
import { parseLanguage } from '@/shared/store/language-store';

export const useHeader = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onOpen = useCallback(() => setIsOpen(true), []);
  const onClose = useCallback(() => setIsOpen(false), []);

  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useLanguage();

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    if (!isOpen) return;

    const { style: bodyStyle } = document.body;
    const { style: htmlStyle } = document.documentElement;
    const prevBodyOverflow = bodyStyle.overflow;
    const prevHtmlOverflow = htmlStyle.overflow;

    bodyStyle.overflow = 'hidden';
    htmlStyle.overflow = 'hidden';

    return () => {
      bodyStyle.overflow = prevBodyOverflow;
      htmlStyle.overflow = prevHtmlOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        onClose();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [onClose]);

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = parseLanguage(event.target.value);
    i18n.changeLanguage(newLanguage);
    setSelectedLanguage(newLanguage);
  };

  return {
    isOpen,
    onOpen,
    onClose,
    selectedLanguage,
    handleLanguageChange,
  };
};
