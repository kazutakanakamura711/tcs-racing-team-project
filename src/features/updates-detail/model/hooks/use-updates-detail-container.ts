import { useNavigate, useParams } from 'react-router-dom';
import { useLanguage } from '@/shared/hooks/use-language';
import { useGetNews } from '@/shared/hooks/use-get-news';

export const useUpdatesDetailContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedLanguage] = useLanguage();

  const { singleNews } = useGetNews({ detailId: id || '' });
  const { news } = useGetNews({ limit: 3, excludeId: id || '' });

  // RelatedUpdatesコンポーネントが期待する形式 { news: NewsItem[] } に合わせる
  const updateArray = { news };

  const heroImageSrc = '/images/updateContent/img-updateContent-top.jpeg';

  return {
    id,
    navigate,
    singleNews,
    selectedLanguage,
    updateArray,
    heroImageSrc,
  };
};
