import { Box } from '@chakra-ui/react';
import { NewsItem } from '@/entities/news';
import { FC } from 'react';
import { ImageCard } from '@/shared/ui';
import { NavigateFunction } from 'react-router-dom';

interface Props {
  updateArray: NewsItem[];
  navigate: NavigateFunction;
  selectedLanguage: string;
}

export const SecondContent: FC<Props> = ({
  updateArray,
  navigate,
  selectedLanguage,
}) => {
  if (!updateArray) return <Box>データがありません。</Box>;

  return (
    <Box
      display="grid"
      gridTemplateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
      gap={{ base: 8, lg: 3 }}
      mt="12px"
      mb={8}
    >
      <ImageCard
        updateArray={updateArray}
        navigate={navigate}
        selectedLanguage={selectedLanguage}
        isSquareImage={true}
      />
    </Box>
  );
};
