import { Box, Grid } from '@chakra-ui/react';
import { NewsItem } from '@/entities/news';
import { CenteredContainer, ImageCard } from '@/shared/ui';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/shared/ui/pagination';
import { FC } from 'react';
import { NavigateFunction } from 'react-router-dom';

interface Props {
  currentNews: NewsItem[];
  pageCount: number;
  handlePageClick: (event: { selected: number }) => void;
  news: NewsItem[];
  navigate: NavigateFunction;
  selectedLanguage: string;
  currentPage: number;
  isSquareImage?: boolean;
}

export const UpdatesPagination: FC<Props> = ({
  currentNews,
  pageCount,
  handlePageClick,
  news,
  navigate,
  selectedLanguage,
  currentPage,
  isSquareImage,
}) => {
  const getPageNumbers = () => {
    const pages = [];
    if (pageCount <= 5) {
      for (let i = 0; i < pageCount; i++) pages.push(i);
    } else {
      if (currentPage <= 2) {
        pages.push(0, 1, 2, 'ellipsis', pageCount - 1);
      } else if (currentPage >= pageCount - 3) {
        pages.push(0, 'ellipsis', pageCount - 3, pageCount - 2, pageCount - 1);
      } else {
        pages.push(
          0,
          'ellipsis',
          currentPage - 1,
          currentPage,
          currentPage + 1,
          'ellipsis',
          pageCount - 1,
        );
      }
    }
    return pages;
  };

  return (
    <CenteredContainer>
      <Box mb="156px">
        {!news.length && <Box color="text.white">Coming Soon</Box>}
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
          gap={8}
        >
          <ImageCard
            updateArray={currentNews}
            navigate={navigate}
            selectedLanguage={selectedLanguage}
            isSquareImage={isSquareImage}
          />
        </Grid>

        <Box mt="76px">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    if (currentPage > 0)
                      handlePageClick({ selected: currentPage - 1 });
                  }}
                  aria-disabled={currentPage === 0}
                  className={
                    currentPage === 0 ? 'pointer-events-none opacity-50' : ''
                  }
                />
              </PaginationItem>

              {getPageNumbers().map((page, index) =>
                page === 'ellipsis' ? (
                  <PaginationItem key={`ellipsis-${index}`}>
                    <PaginationEllipsis />
                  </PaginationItem>
                ) : (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href="#"
                      isActive={currentPage === page}
                      onClick={e => {
                        e.preventDefault();
                        handlePageClick({ selected: page as number });
                      }}
                    >
                      {(page as number) + 1}
                    </PaginationLink>
                  </PaginationItem>
                ),
              )}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    if (currentPage < pageCount - 1)
                      handlePageClick({ selected: currentPage + 1 });
                  }}
                  aria-disabled={currentPage === pageCount - 1}
                  className={
                    currentPage === pageCount - 1
                      ? 'pointer-events-none opacity-50'
                      : ''
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </Box>
      </Box>
    </CenteredContainer>
  );
};
