import { FC } from 'react';
import { NewsItem } from '@/entities/news';
import { formatDate } from '@/shared/utils/date-format/date-format';
import { NavigateFunction } from 'react-router-dom';
import { UPDATE_DETAIL } from '@/shared/constants';
import { cleanHtml } from '@/shared/utils/clean-html/clean-html';

interface Props {
  updateArray: NewsItem[];
  navigate: NavigateFunction;
  selectedLanguage: string;
}

export const OtherContents: FC<Props> = ({
  updateArray,
  navigate,
  selectedLanguage,
}) => {
  if (!updateArray) return <p className="text-light">データがありません。</p>;

  return (
    <>
      {updateArray.map(item => (
        <div
          key={item.id}
          className="mb-4 cursor-pointer"
          onClick={() => navigate(UPDATE_DETAIL.replace(':id', item.id))}
        >
          <div className="flex items-center gap-2 overflow-hidden mb-2">
            <span className="text-accent-pink shrink-0">News |</span>
            <span className="text-light truncate">
              {formatDate(item.publishedAt)}
            </span>
          </div>
          <p className="text-light text-sm md:text-base mb-2! truncate">
            {item[`title${selectedLanguage}`]}
          </p>
          <div
            className="text-light text-[10px] md:text-base mb-2 md:mb-4 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:1] overflow-hidden **:inline"
            dangerouslySetInnerHTML={{
              __html: cleanHtml(item[`content${selectedLanguage}`]),
            }}
          />
          <hr className="border! border-white! opacity-40" />
        </div>
      ))}
    </>
  );
};
