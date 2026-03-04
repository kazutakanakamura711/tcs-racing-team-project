import { SnsIcon } from '@/shared/ui';
import {
  facebookUrl,
  instagramUrl,
  tiktokUrl,
  youtubeUrl,
  Member,
} from '@/shared/constants';
import { FC } from 'react';
import { TFunction } from 'i18next';

interface Props {
  member: Member;
  t: TFunction<'teamMember'>;
  heroImageSrc?: string;
}

export const OurTeamDetailHeroImage: FC<Props> = ({
  member,
  t,
  heroImageSrc,
}) => {
  if (!member) {
    return <p>No data</p>;
  }

  return (
    <div className="relative w-full h-auto md:h-screen bg-[#1a1a1a] overflow-hidden">
      {/* 背景画像 */}
      {heroImageSrc ? (
        <img src={heroImageSrc} alt="" className="w-full h-auto block z-0" />
      ) : (
        <div className="bg-[#1a1a1a] w-full h-[80vw] md:h-screen block z-0" />
      )}

      {/* 人物画像 */}
      {member.memberPageFirstViewMemberImagePath ? (
        <img
          src={member.memberPageFirstViewMemberImagePath}
          alt={member.nameJa}
          className="absolute top-0 left-[20%] md:left-0 w-full h-auto md:h-full! object-contain object-[80%_bottom] md:object-[90%_bottom] z-1"
        />
      ) : (
        <div className="absolute top-0 left-[20%] md:left-0 w-full h-auto md:h-full z-1" />
      )}

      {/* タイトルテキスト（名言） */}
      <div className="p-2 absolute top-[40%] md:top-1/2 left-[40%] md:left-[80%] -translate-x-1/2 -translate-y-1/2 z-3 w-[60%] md:w-[40%] text-left">
        <p
          className="text-base md:text-[32px] font-bold text-light leading-[1.2]"
          style={{ textShadow: '2px 2px 8px rgba(0,0,0,1)' }}
        >
          {t(`title.${member.id}`)}
        </p>
      </div>

      {/* コンテンツエリア（名前とSNS） */}
      <div className="w-full px-0 mx-0 relative md:absolute md:top-0 md:left-0 md:h-full z-2 mt-6 md:mt-0">
        <div className="flex flex-col gap-3 relative md:absolute md:bottom-[15%] left-[6%] md:left-[12%] pb-5 md:pb-0">
          <h1
            className="text-light whitespace-pre-line text-[32px]! font-bold! md:text-[100px]! leading-[1.1] uppercase"
            style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.8)' }}
          >
            {member.nameEn.replace(' ', '\n')}
          </h1>
          <div className="flex items-center gap-4">
            <SnsIcon
              href={facebookUrl}
              icon="/images/common/ico-facebook-bg-white.webp"
              label="Facebook"
            />
            <SnsIcon
              href={instagramUrl}
              icon="/images/common/ico-instagram-bg-white.webp"
              label="Instagram"
            />
            <SnsIcon
              href={youtubeUrl}
              icon="/images/common/ico-youtube-bg-white.webp"
              label="YouTube"
            />
            <SnsIcon
              href={tiktokUrl}
              icon="/images/common/ico-tiktok-bg-white.webp"
              label="TikTok"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
