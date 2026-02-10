import { create } from 'zustand';

// 言語コードは大文字始まり('Ja', 'En', 'Id')で定義
// 理由: MicroCMSのフィールド名(titleJa, contentEnなど)と一致させるため
// i18n用には toLowerCase() で小文字(ja, en, id)に変換して使用
export const Language = {
  Ja: 'Ja',
  En: 'En',
  Id: 'Id',
} as const;

export type Language = (typeof Language)[keyof typeof Language];

export const parseLanguage = (value: string): Language => {
  switch (value) {
    case Language.Ja:
      return Language.Ja;
    case Language.En:
      return Language.En;
    case Language.Id:
      return Language.Id;
    default:
      return Language.Ja;
  }
};

export const LanguageDisplay = {
  [Language.Ja]: 'JP',
  [Language.En]: 'EN',
  [Language.Id]: 'ID',
};

type LanguageStore = {
  language: Language;
  setLanguage: (language: Language) => void;
};

export const useLanguageStore = create<LanguageStore>(set => ({
  language: Language.Ja,
  setLanguage: language => set({ language }),
}));
