import { NewsItem } from '@/features/top/UpDates/UpDateContents';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useUpdateListPagiNation = () => {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const apiUrl = `${import.meta.env.VITE_API_URL}blogs`;
      const categoryFilter = encodeURIComponent(
        `category[equals]${import.meta.env.VITE_UPDATES_CONTENTS_ID}`,
      );
      const urlWithFilter = `${apiUrl}?filters=${categoryFilter}&limit=100&orders=-updatedAt`;

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
  }, []);

  return {
    news,
  };
};
