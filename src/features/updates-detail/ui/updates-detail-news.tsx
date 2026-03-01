import { formatDate } from '@/shared/utils/date-format/date-format';
import { Link as LinkRouter } from 'react-router-dom';
import {
  facebookUrl,
  instagramUrl,
  tiktokUrl,
  youtubeUrl,
} from '@/shared/constants';
import { NewsItem } from '@/entities/news';
import { FC } from 'react';
import styles from './updates-detail-news.module.css';
import { cleanHtml } from '@/shared/utils/clean-html/clean-html';

interface Props {
  singleNews: NewsItem | null;
  selectedLanguage: string;
}

const socialLinks = [
  {
    url: youtubeUrl,
    icon: '/images/common/ico-youtube-white.svg',
    label: 'YouTube',
  },
  {
    url: facebookUrl,
    icon: '/images/common/ico-facebook-white.svg',
    label: 'Facebook',
  },
  {
    url: instagramUrl,
    icon: '/images/common/ico-instagram-white.svg',
    label: 'Instagram',
  },
  {
    url: tiktokUrl,
    icon: '/images/common/ico-tiktok-white.svg',
    label: 'TikTok',
  },
];

export const UpdatesDetailNews: FC<Props> = ({
  singleNews,
  selectedLanguage,
}) => {
  return (
    <div className="relative w-[85%] md:w-[70%] -mt-12.5 mb-30 mx-auto p-8 bg-light z-2">
      <div className="flex items-center gap-2 mb-9.5">
        <span className="text-accent-pink text-xs md:text-base font-bold">
          News |
        </span>
        <span className="text-dark text-xs md:text-base font-bold">
          {singleNews?.publishedAt && formatDate(singleNews.publishedAt)}
        </span>
      </div>

      <div className="flex flex-col gap-8">
        <h1 className="text-dark text-base md:text-[36px]! font-bold! mb-8.5">
          {singleNews?.[`title${selectedLanguage}`]}
        </h1>

        <p className="text-accent-pink text-base md:text-[36px] font-bold mb-8.5">
          News
        </p>

        {singleNews?.[`content${selectedLanguage}`] && (
          <div
            className={`${styles.newsContent} text-dark mb-9.5`}
            dangerouslySetInnerHTML={{
              __html: cleanHtml(singleNews?.[`content${selectedLanguage}`]),
            }}
          />
        )}
      </div>

      <div className="flex items-center justify-center gap-4 w-[90%] md:w-[27%] mx-auto">
        {socialLinks.map(({ url, icon, label }) => (
          <LinkRouter
            key={label}
            to={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <div className="flex items-center justify-center bg-dark size-6.75 rounded-full">
              <img src={icon} alt="" />
            </div>
          </LinkRouter>
        ))}
      </div>
    </div>
  );
};
