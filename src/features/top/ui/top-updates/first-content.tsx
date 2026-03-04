import { ImageCard } from '@/shared/ui';
import { FC } from 'react';
import { NewsItem } from '@/entities/news';
import { NavigateFunction } from 'react-router-dom';

interface Props {
  updateArray: NewsItem[];
  navigate: NavigateFunction;
  selectedLanguage: string;
}

export const FirstContent: FC<Props> = ({
  updateArray,
  navigate,
  selectedLanguage,
}) => {
  return (
    <ImageCard
      updateArray={updateArray}
      navigate={navigate}
      selectedLanguage={selectedLanguage}
      isSquareImage={true}
    />
  );
};
