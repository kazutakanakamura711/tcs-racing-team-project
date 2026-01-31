import { useUpDateContents } from './model/hooks/use-contact';
import { useLanguage } from '@/state/languageState/useLanguage';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Contact } from './ui/contact';

export const ContactContainer = () => {
  const { news } = useUpDateContents();
  const [selectedLanguage] = useLanguage();
  const navigate = useNavigate();
  const { t } = useTranslation('contact');

  return (
    <Contact
      news={news}
      selectedLanguage={selectedLanguage}
      navigate={navigate}
      t={t}
    />
  );
};
