import { useContactContainer } from './model/hooks/use-contact-container';
import { ContactContent, ContactHeroImage } from './ui';

export const ContactContainer = () => {
  const { news, selectedLanguage, navigate, t } = useContactContainer();

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
