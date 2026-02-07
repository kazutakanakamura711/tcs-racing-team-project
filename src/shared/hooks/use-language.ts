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
    // i18nのロケールフォルダ名(ja, en, id)に合わせるため小文字に変換
    const locale = value.toLowerCase();
    localStorage.setItem('selectedLanguage', value);
    setLanguage(value);
    i18n.changeLanguage(locale);
  };

  // 初回マウント時に `localStorage` から値を取得
  useEffect(() => {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    const language = parseLanguage(storedLanguage || '');

    // i18nのロケールフォルダ名(ja, en, id)に合わせるため小文字に変換
    const locale = language.toLowerCase();
    setLanguage(language);
    i18n.changeLanguage(locale);
  }, [setLanguage]);

  return [language, updateLanguage];
};
