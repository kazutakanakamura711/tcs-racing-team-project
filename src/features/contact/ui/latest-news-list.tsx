import { formatDate } from '@/shared/utils/date-format/date-format';
import { NavigateFunction } from 'react-router-dom';
import { NewsItem } from '@/entities/news';
import { FC } from 'react';
import { UPDATE_DETAIL } from '@/shared/constants';
import { cleanHtml } from '@/shared/utils/clean-html/clean-html';

interface Props {
  news: NewsItem[];
  selectedLanguage: string;
  navigate: NavigateFunction;
}

export const LatestNewsList: FC<Props> = ({
  news,
  selectedLanguage,
  navigate,
}) => {
  return (
    <>
      {news.map(item => (
        <div
          key={item.id}
          className="border-b! border-light! pt-7 pb-5 cursor-pointer"
          onClick={() => navigate(UPDATE_DETAIL.replace(':id', item.id))}
        >
          <div className="flex items-center mb-4">
            <p className="text-accent-pink! text-base font-bold">News |</p>
            <p className="pl-2 text-base font-bold text-light">
              {formatDate(item.publishedAt)}
            </p>
          </div>
          <p className="text-light text-base font-bold">
            {item[`title${selectedLanguage}`]}
          </p>
          <div
            className="text-light text-sm"
            dangerouslySetInnerHTML={{
              __html: cleanHtml(item[`content${selectedLanguage}`]),
            }}
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 1,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxHeight: '3em',
            }}
          />
        </div>
      ))}
    </>
  );
};
