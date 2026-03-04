import { FC } from 'react';
import { NewsItem } from '@/entities/news';
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
  if (!updateArray) return <p className="text-light">データがありません。</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ImageCard
        updateArray={updateArray}
        navigate={navigate}
        selectedLanguage={selectedLanguage}
        isSquareImage={true}
      />
    </div>
  );
};
