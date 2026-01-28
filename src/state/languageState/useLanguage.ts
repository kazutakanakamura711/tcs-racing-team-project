import { atom, useRecoilState } from 'recoil';
import { useEffect } from 'react';
import i18n from '@/i18n';

export const languageState = atom<string>({
  key: 'languageState',
  default: 'Ja',
});

export const useLanguage = (): [string, (value: string) => void] => {
  const [language, setLanguage] = useRecoilState(languageState);

  // `setLanguage` に `localStorage` への保存を組み込む
  const updateLanguage = (value: string) => {
    const locale = value === 'Ja' ? 'ja' : value === 'En' ? 'en' : 'id';
    localStorage.setItem('selectedLanguage', value);
    setLanguage(value);
    i18n.changeLanguage(locale);
  };

  // 初回マウント時に `localStorage` から値を取得
  useEffect(() => {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (!storedLanguage) return;
    const locale =
      storedLanguage === 'Ja' ? 'ja' : storedLanguage === 'En' ? 'en' : 'id';
    setLanguage(storedLanguage);
    i18n.changeLanguage(locale);
  }, [setLanguage]);

  return [language, updateLanguage];
};
