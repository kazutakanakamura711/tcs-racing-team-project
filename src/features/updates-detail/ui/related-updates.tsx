import { ImageCard } from '@/shared/ui';
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32 md:mb-8">
      <ImageCard
        updateArray={updateArray.news}
        selectedLanguage={selectedLanguage}
        navigate={navigate}
        isSquareImage={isSquareImage}
      />
    </div>
  );
};
