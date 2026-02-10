import { FirstContent } from '@/features/top/ui/top-updates/first-content';
import { Box, Grid } from '@chakra-ui/react';
import ReactPaginate from 'react-paginate';
import { NewsItem } from '@/entities/news';
import styles from './update-list-pagination.module.css';
import { CenteredContainer } from '@/shared/ui';
import { FC } from 'react';
import { NavigateFunction } from 'react-router-dom';

interface Props {
  currentNews: NewsItem[];
  pageCount: number;
  handlePageClick: (event: { selected: number }) => void;
  news: NewsItem[];
  navigate: NavigateFunction;
  selectedLanguage: string;
}

export const UpdateListPagination: FC<Props> = ({
  currentNews,
  pageCount,
  handlePageClick,
  news,
  navigate,
  selectedLanguage,
}) => {
  return (
    <CenteredContainer>
      <Box mb="156px">
        {!news.length && <Box color="#FFF">Coming Soon</Box>}
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
          gap="32px"
        >
          <FirstContent
            updateArray={currentNews}
            navigate={navigate}
            selectedLanguage={selectedLanguage}
          />
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
    </CenteredContainer>
  );
};
