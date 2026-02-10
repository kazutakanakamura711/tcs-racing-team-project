import { CenteredContainer, Title } from '@/shared/ui';
import { Box } from '@chakra-ui/react';
import { UpdateListPagination } from './ui';
import { useUpdateListContainer } from './model/hooks/use-update-list-container';

export const UpdateListContainer = () => {
  const {
    currentNews,
    pageCount,
    handlePageClick,
    news,
    navigate,
    selectedLanguage,
  } = useUpdateListContainer();

  return (
    <>
      <Box pt="128px" mb="128px">
        <CenteredContainer>
          <Title title="Updates" subTitle="Updates" />
        </CenteredContainer>
      </Box>
      <UpdateListPagination
        currentNews={currentNews}
        pageCount={pageCount}
        handlePageClick={handlePageClick}
        news={news}
        navigate={navigate}
        selectedLanguage={selectedLanguage}
      />
    </>
  );
};
