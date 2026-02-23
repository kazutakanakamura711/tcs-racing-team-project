import { ImageCard } from '@/shared/ui';
import { FC } from 'react';
import { NewsItem } from '@/entities/news';
import { NavigateFunction } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

interface Props {
  updateArray: NewsItem[];
  navigate: NavigateFunction;
  selectedLanguage: string;
  isSquareImage?: boolean;
}

export const FirstContent: FC<Props> = ({
  updateArray,
  navigate,
  selectedLanguage,
  isSquareImage,
}) => {
  return (
    <Box mb={{ base: 8, lg: 4 }}>
      <ImageCard
        updateArray={updateArray}
        navigate={navigate}
        selectedLanguage={selectedLanguage}
        isSquareImage={isSquareImage}
      />
    </Box>
  );
};
