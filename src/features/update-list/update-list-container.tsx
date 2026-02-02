import { Title } from '@/shared/ui/title';
import { PageLayout } from '@/shared/ui/page-layout';
import { TopOurPartners } from '../top/ui/top-our-partners';
import { TopOfficialMedia } from '../top/ui/top-official-media/top-official-media';
import { Box } from '@chakra-ui/react';
import { UpdateListPagination } from './ui';
import { useState, useEffect } from 'react';
import { useUpdateListPagiNation } from './model/hooks/use-update-list-pagination';
import { NewsItem } from '@/features/top/ui/top-updates/top-updates';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/state/languageState/useLanguage';

export const UpdateListContainer = () => {
  const [currentNews, setCurrentNews] = useState<NewsItem[]>([]); // 現在のページのニュース
  const [pageCount, setPageCount] = useState<number>(0); // 全ページ数
  const [itemOffset, setItemOffset] = useState<number>(0); // 現在のオフセット（表示開始位置）
  const newsPerPage = 24; // 1ページあたりのニュース数
  const { news } = useUpdateListPagiNation(); // APIからニュースを取得
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

  return (
    <PageLayout>
      <Box pt="128px" mb="128px">
        <Title title="Updates" subTitle="Updates" />
      </Box>
      <UpdateListPagination
        currentNews={currentNews}
        pageCount={pageCount}
        handlePageClick={handlePageClick}
        news={news}
        navigate={navigate}
        selectedLanguage={selectedLanguage}
      />
      <Title title="Our Partners" subTitle="Our Partners" />
      <TopOurPartners />
      <TopOfficialMedia />
    </PageLayout>
  );
};
