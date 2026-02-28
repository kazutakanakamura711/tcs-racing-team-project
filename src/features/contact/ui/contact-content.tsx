import { Link as LinkRouter, NavigateFunction } from 'react-router-dom';
import {
  facebookUrl,
  instagramUrl,
  tiktokUrl,
  youtubeUrl,
} from '@/shared/constants';
import { NewsItem } from '@/entities/news';
import { TFunction } from 'i18next';
import { FC } from 'react';
import { LatestNewsList } from './latest-news-list';

interface Props {
  news: NewsItem[];
  selectedLanguage: string;
  navigate: NavigateFunction;
  t: TFunction<'contact'>;
}

export const ContactContent: FC<Props> = ({
  news,
  selectedLanguage,
  navigate,
  t,
}) => {
  return (
    <div className="relative min-h-241 md:-mt-12.5 mb-29 z-2 text-dark">
      <div className="w-full md:w-[70%] h-full pt-24 pb-28.5 px-10 md:px-17 md:ml-[10%] bg-white flex flex-col gap-20">
        {/* Contact */}
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl! font-bold! w-full md:w-2/3">Contact</h1>
          <p className="w-full md:w-2/3 font-bold whitespace-pre-line">
            {t('title')}
          </p>
        </div>

        {/* E-mail */}
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl! font-bold! w-full md:w-2/3">E-mail</h2>
          <div className="flex flex-col gap-6">
            <p className="w-full md:w-2/3 font-bold">
              Please contact us by email at the email address below.
            </p>
            <div className="flex flex-col gap-4 md:gap-2">
              <div className="flex flex-row flex-wrap items-baseline gap-x-2 w-full md:w-2/3">
                <span className="text-xs shrink-0">{t('EmailMainTitle')}</span>
                <a href={`mailto:${t('EmailMainAddress')}`}>
                  <span className="text-base font-bold text-dark break-all">
                    {t('EmailMainAddress')}
                  </span>
                </a>
              </div>
              <div className="flex flex-row flex-wrap items-baseline gap-x-2 w-full md:w-2/3">
                <span className="text-xs shrink-0">{t('EmailSubTitle')}</span>
                <a href={`mailto:${t('EmailSubAddress')}`}>
                  <span className="text-base font-bold text-dark break-all">
                    {t('EmailSubAddress')}
                  </span>
                </a>
              </div>
              <div className="flex flex-row flex-wrap items-baseline gap-x-2 w-full md:w-2/3">
                <span className="text-xs shrink-0">{t('EmailMediaTitle')}</span>
                <a href={`mailto:${t('EmailMediaAddress')}`}>
                  <span className="text-base font-bold text-dark break-all">
                    {t('EmailMediaAddress')}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social media */}
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl! font-bold! w-full md:w-2/3">Social media</h2>
          <div className="flex flex-col gap-6">
            <p className="font-bold w-full md:w-2/3">
              Follow us on social media.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center w-full md:w-2/3 gap-4">
                <div className="flex items-center justify-center bg-dark size-6.75 rounded-full shrink-0">
                  <img src="/images/common/ico-youtube-white.svg" alt="" />
                </div>
                <LinkRouter
                  to={youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{t('Youtube')}</span>
                </LinkRouter>
              </div>
              <div className="flex items-center w-full md:w-2/3 gap-4">
                <div className="flex items-center justify-center bg-dark size-6.75 rounded-full shrink-0">
                  <img src="/images/common/ico-facebook-white.svg" alt="" />
                </div>
                <LinkRouter
                  to={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{t('Facebook')}</span>
                </LinkRouter>
              </div>
              <div className="flex items-center w-full md:w-2/3 gap-4">
                <div className="flex items-center justify-center bg-dark size-6.75 rounded-full shrink-0">
                  <img src="/images/common/ico-instagram-white.svg" alt="" />
                </div>
                <LinkRouter
                  to={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{t('Instagram')}</span>
                </LinkRouter>
              </div>
              <div className="flex items-center w-full md:w-2/3 gap-4">
                <div className="flex items-center justify-center bg-dark size-6.75 rounded-full shrink-0">
                  <img src="/images/common/ico-tiktok-white.svg" alt="" />
                </div>
                <LinkRouter
                  to={tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{t('TikTok')}</span>
                </LinkRouter>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Latest news */}
      <div className="static md:absolute md:top-1/2 md:right-[10%] md:-translate-y-1/2 w-[calc(100%-120px)] md:w-[30%] bg-[#666666] py-16 px-[5%] my-20 mx-15 md:m-0">
        <p className="pb-4 text-2xl font-bold text-light border-b! border-light!">
          Latest news
        </p>
        <LatestNewsList
          news={news}
          selectedLanguage={selectedLanguage}
          navigate={navigate}
        />
      </div>
    </div>
  );
};
