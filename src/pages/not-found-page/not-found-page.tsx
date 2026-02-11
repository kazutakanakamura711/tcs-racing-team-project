import { useTranslation } from 'react-i18next';
import { NotFound } from '@/shared/ui';

export const NotFoundPage = () => {
  const { t } = useTranslation('notFound');

  return (
    <NotFound
      errorCode={t('errorCode')}
      title={t('title')}
      description={t('description')}
      backToTopText={t('backToTop')}
    />
  );
};
