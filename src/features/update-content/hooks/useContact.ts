import { NewsItem } from '@/features/top/UpDates/UpDateContents';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useUpDateContents = (id: string) => {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const apiUrl = `${import.meta.env.VITE_API_URL}blogs`;
      const categoryFilter = encodeURIComponent(
        `category[equals]${import.meta.env.VITE_UPDATES_CONTENTS_ID}`,
      );
      const excludeIdFilter = encodeURIComponent(`id[not_equals]${id}`);
      const urlWithFilter = `${apiUrl}?filters=${categoryFilter}[and]${excludeIdFilter}&limit=3&orders=-updatedAt`;
      try {
        const response = await axios.get(urlWithFilter, {
          headers: {
            'X-API-KEY': import.meta.env.VITE_API_KEY,
          },
        });
        setNews(response.data.contents);
      } catch (error) {
        console.error('ニュースの取得に失敗しました', error);
      }
    };

    fetchNews();
  }, [id]);

  return {
    news,
  };
};
