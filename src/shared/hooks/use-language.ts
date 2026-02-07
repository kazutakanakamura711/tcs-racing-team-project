import { useEffect } from 'react';
import i18n from '@/app/i18n';
import {
  useLanguageStore,
  Language,
  parseLanguage,
} from '../store/language-store';

export const useLanguage = (): [Language, (value: Language) => void] => {
  const { language, setLanguage } = useLanguageStore();

  // `setLanguage` に `localStorage` への保存を組み込む
  const updateLanguage = (value: Language) => {
    const locale =
      value === Language.Ja ? 'ja' : value === Language.En ? 'en' : 'id';
    localStorage.setItem('selectedLanguage', value);
    setLanguage(value);
    i18n.changeLanguage(locale);
  };

  // 初回マウント時に `localStorage` から値を取得
  useEffect(() => {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    const language = parseLanguage(storedLanguage || '');

    const locale =
      language === Language.Ja ? 'ja' : language === Language.En ? 'en' : 'id';
    setLanguage(language);
    i18n.changeLanguage(locale);
  }, [setLanguage]);

  return [language, updateLanguage];
};
