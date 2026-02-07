import { create } from 'zustand';

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
