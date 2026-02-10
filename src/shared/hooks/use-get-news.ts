import { NewsItem } from '@/entities/news';
import { useEffect, useState } from 'react';

interface Props {
  limit?: number;
  excludeId?: string;
  detailId?: string;
}

export const useGetNews = ({ limit, excludeId, detailId }: Props = {}) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [singleNews, setSingleNews] = useState<NewsItem | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      const apiUrl = `${import.meta.env.VITE_API_URL}blogs`;
      const apiKey = import.meta.env.VITE_API_KEY;

      if (detailId) {
        try {
          const response = await fetch(`${apiUrl}/${detailId}`, {
            headers: { 'X-API-KEY': apiKey },
          });
          const data = await response.json();
          setSingleNews(data);
        } catch (error) {
          console.error('ニュースの取得に失敗しました', error);
          setSingleNews(null);
        }
        return;
      }

      const params = new URLSearchParams();
      params.append(
        'filters',
        `category[equals]${import.meta.env.VITE_UPDATES_CONTENTS_ID}`,
      );
      if (excludeId) {
        const currentFilters = params.get('filters');
        params.set(
          'filters',
          `${currentFilters}[and]id[not_equals]${excludeId}`,
        );
      }
      if (limit) {
        params.append('limit', limit.toString());
      }
      params.append('orders', '-updatedAt');

      try {
        const response = await fetch(`${apiUrl}?${params.toString()}`, {
          headers: { 'X-API-KEY': apiKey },
        });
        const data = await response.json();
        setNews(data.contents);
      } catch (error) {
        console.error('ニュースの取得に失敗しました', error);
      }
    };

    fetchNews();
  }, [limit, excludeId, detailId]);

  return { news, singleNews };
};
