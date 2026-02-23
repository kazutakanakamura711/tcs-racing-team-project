import { CenteredContainer, Title } from '@/shared/ui';
import { Box } from '@chakra-ui/react';
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
      <Box pt="128px" mb="128px">
        <CenteredContainer>
          <Title as="h1" title="Updates" subTitle="Updates" />
        </CenteredContainer>
      </Box>
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
