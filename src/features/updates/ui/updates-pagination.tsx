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
  // ページネーションに表示するボタンのリストを生成する関数
  const getPageNumbers = (): (number | string)[] => {
    if (pageCount <= 5) {
      return Array.from({ length: pageCount }, (_, i) => i);
    }

    if (currentPage <= 2) {
      return [0, 1, 2, 'ellipsis', pageCount - 1];
    }

    if (currentPage >= pageCount - 3) {
      return [0, 'ellipsis', pageCount - 3, pageCount - 2, pageCount - 1];
    }

    return [
      0,
      'ellipsis',
      currentPage - 1,
      currentPage,
      currentPage + 1,
      'ellipsis',
      pageCount - 1,
    ];
  };

  return (
    <CenteredContainer>
      <div className="mb-39">
        {!news.length && <div className="text-light">Coming Soon</div>}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ImageCard
            updateArray={currentNews}
            navigate={navigate}
            selectedLanguage={selectedLanguage}
            isSquareImage={isSquareImage}
          />
        </div>

        <div className="mt-19">
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
        </div>
      </div>
    </CenteredContainer>
  );
};
