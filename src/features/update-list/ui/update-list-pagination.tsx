import { FirstContent } from '@/features/top/ui/top-updates/first-content';
import { Box, Grid } from '@chakra-ui/react';
import ReactPaginate from 'react-paginate';
import { NewsItem } from '@/features/top/ui/top-updates/top-updates';
import styles from './update-list-pagination.module.css';
import { MainLayout } from '@/shared/ui/main-layout';
import { FC } from 'react';

interface Props {
  currentNews: NewsItem[];
  pageCount: number;
  handlePageClick: (event: { selected: number }) => void;
  news: NewsItem[];
}

export const UpdateListPagination: FC<Props> = ({
  currentNews,
  pageCount,
  handlePageClick,
  news,
}) => {
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
            pageClassName={styles.pageItem}
            pageLinkClassName={styles.pageLink}
            previousClassName={styles.pageItem}
            previousLinkClassName={styles.pageLink}
            nextClassName={styles.pageItem}
            nextLinkClassName={styles.pageLink}
            breakLabel="..."
            breakClassName={styles.pageItem}
            breakLinkClassName={styles.pageLink}
            containerClassName={styles.pagination}
            activeClassName={styles.active}
            renderOnZeroPageCount={null}
          />
        </Box>
      </Box>
    </MainLayout>
  );
};
