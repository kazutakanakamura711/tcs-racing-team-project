import { useUpDateContents } from './model/hooks/use-contact';
import { useLanguage } from '@/state/languageState/useLanguage';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ContactContent, ContactHeroImage } from './ui';

export const ContactContainer = () => {
  const { news } = useUpDateContents();
  const [selectedLanguage] = useLanguage();
  const navigate = useNavigate();
  const { t } = useTranslation('contact');

  return (
    <>
      <ContactHeroImage />
      <ContactContent
        news={news}
        selectedLanguage={selectedLanguage}
        navigate={navigate}
        t={t}
      />
    </>
  );
};
