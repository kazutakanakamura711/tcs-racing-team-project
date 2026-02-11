import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { Language } from '@/shared/store/language-store';

i18n
  .use(HttpBackend) // HTTP経由で翻訳ファイルをロードするために使用
  .use(LanguageDetector) // ブラウザの言語設定を検出するために使用
  .use(initReactI18next) // react-i18nextの初期化
  .init({
    fallbackLng: Language.Ja, // デフォルトの言語
    debug: false, // 開発中はデバッグ情報を表示する
    interpolation: {
      escapeValue: false, // XSSの危険がない場合はHTMLエスケープを無効化
    },
    ns: [
      'topMessage',
      'topTheTeam',
      'teamMember',
      'rider',
      'ourTeam',
      'contact',
      'notFound',
    ], // 翻訳ファイルの名前
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // 翻訳ファイルのパス
    },
  });

export default i18n;
