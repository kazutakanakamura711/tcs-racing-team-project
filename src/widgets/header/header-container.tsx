import { Header } from './ui/header';
import { useHeader } from './model/use-header';

export const HeaderContainer = () => {
  const {
    isOpen,
    onOpen,
    onClose,
    selectedLanguage,
    handleLanguageChange,
    mb,
  } = useHeader();

  return (
    <Header
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      selectedLanguage={selectedLanguage}
      handleLanguageChange={handleLanguageChange}
      mb={mb}
    />
  );
};
