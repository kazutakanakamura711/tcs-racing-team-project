import { NewsItem } from '@/entities/news';
import { useGetNews } from '@/shared/hooks/use-get-news';
import { useLanguage } from '@/shared/hooks/use-language';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useUpdatesContainer = () => {
  const [currentNews, setCurrentNews] = useState<NewsItem[]>([]); // 現在のページのニュース
  const [pageCount, setPageCount] = useState<number>(0); // 全ページ数
  const [itemOffset, setItemOffset] = useState<number>(0); // 現在のオフセット（表示開始位置）
  const newsPerPage = 24; // 1ページあたりのニュース数
  const { news } = useGetNews({ limit: 100 }); // APIからニュースを取得
  const navigate = useNavigate();
  const [selectedLanguage] = useLanguage();

  useEffect(() => {
    // ニュースが更新されたとき、またはオフセットが変更されたときに実行
    const endOffset = itemOffset + newsPerPage;
    setCurrentNews(news.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(news.length / newsPerPage));
  }, [itemOffset, newsPerPage, news]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * newsPerPage) % news.length;
    setItemOffset(newOffset);
  };

  return {
    currentNews,
    pageCount,
    handlePageClick,
    news,
    navigate,
    selectedLanguage,
  };
};
