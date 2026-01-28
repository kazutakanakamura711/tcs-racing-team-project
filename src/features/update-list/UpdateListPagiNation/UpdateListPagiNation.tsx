import { FirstContent } from '@/features/top/UpDates/FirstContent';
import { Box, Grid } from '@chakra-ui/react';
import ReactPaginate from 'react-paginate';
import { useUpdateListPagiNation } from '../hooks/useUpdateListPagiNation';
import { useEffect, useState } from 'react';
import { NewsItem } from '@/features/top/UpDates/UpDateContents';
import '../Pagination.css';
import { MainLayout } from '@/shared/ui/main-layout';

export const UpdateListPagiNation = () => {
  const [currentNews, setCurrentNews] = useState<NewsItem[]>([]); // 現在のページのニュース
  const [pageCount, setPageCount] = useState<number>(0); // 全ページ数
  const [itemOffset, setItemOffset] = useState<number>(0); // 現在のオフセット（表示開始位置）
  const newsPerPage = 24; // 1ページあたりのニュース数

  const { news } = useUpdateListPagiNation(); // APIからニュースを取得

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
    <MainLayout>
      <Box mb="156px">
        {!news.length && <Box color="#FFF">Coming Soon</Box>}
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
          gap="32px"
        >
          <FirstContent updateArray={currentNews} />
        </Grid>

        <Box color="#FFF">
          <ReactPaginate
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="<"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </Box>
      </Box>
    </MainLayout>
  );
};
