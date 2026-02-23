import { ImageCard } from '@/shared/ui';
import { Grid } from '@chakra-ui/react';
import { FC } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { NewsItem } from '@/entities/news';

interface Props {
  updateArray: { news: NewsItem[] };
  selectedLanguage: string;
  navigate: NavigateFunction;
  isSquareImage?: boolean;
}

export const RelatedUpdates: FC<Props> = ({
  updateArray,
  selectedLanguage,
  navigate,
  isSquareImage,
}) => {
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
      gap={6}
      mb={{ base: 32, lg: 8 }}
    >
      <ImageCard
        updateArray={updateArray.news}
        selectedLanguage={selectedLanguage}
        navigate={navigate}
        isSquareImage={isSquareImage}
      />
    </Grid>
  );
};
