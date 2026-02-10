import { useGetNews } from '@/shared/hooks/use-get-news';
import { useLanguage } from '@/shared/hooks/use-language';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const useContactContainer = () => {
  const { news } = useGetNews({ limit: 5 });
  const [selectedLanguage] = useLanguage();
  const navigate = useNavigate();
  const { t } = useTranslation('contact');

  return {
    news,
    selectedLanguage,
    navigate,
    t,
  };
};
