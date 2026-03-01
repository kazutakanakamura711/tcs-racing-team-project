import { CenteredContainer, Title } from '@/shared/ui';
import { UpdatesPagination } from './ui';
import { useUpdatesContainer } from './model/hooks/use-updates-container';

export const UpdatesContainer = () => {
  const {
    currentNews,
    pageCount,
    handlePageClick,
    news,
    navigate,
    selectedLanguage,
    currentPage,
  } = useUpdatesContainer();

  return (
    <>
      <div className="pt-32 mb-32">
        <CenteredContainer>
          <Title as="h1" title="Updates" subTitle="Updates" />
        </CenteredContainer>
      </div>
      <UpdatesPagination
        currentNews={currentNews}
        pageCount={pageCount}
        handlePageClick={handlePageClick}
        news={news}
        navigate={navigate}
        selectedLanguage={selectedLanguage}
        currentPage={currentPage}
        isSquareImage={true}
      />
    </>
  );
};
