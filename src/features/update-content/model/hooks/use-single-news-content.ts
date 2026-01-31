import { useEffect, useState } from 'react';
import axios from 'axios';
import { NewsItem } from '@/features/top/ui/top-updates/top-updates';

export const useSingleNewsContent = (id: string) => {
  const [singleNews, setSingleNews] = useState<NewsItem | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      const apiUrl = `${import.meta.env.VITE_API_URL}blogs/${id}`;
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            'X-API-KEY': import.meta.env.VITE_API_KEY,
          },
        });
        setSingleNews(response.data);
      } catch (error) {
        console.error('ニュースの取得に失敗しました', error);
        setSingleNews(null);
      }
    };

    fetchNews();
  }, [id]);

  return {
    singleNews,
  };
};
