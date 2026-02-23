import { Box, Grid } from '@chakra-ui/react';
import { NewsItem } from '@/entities/news';
import {
  CenteredContainer,
  ImageCard,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/shared/ui';
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
  pageNumbers: (string | number)[];
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
  pageNumbers,
}) => {
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

              {pageNumbers.map((page, index) =>
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
