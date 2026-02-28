import { SnsIcon } from '@/shared/ui/sns-icon';
import { FC } from 'react';

interface Props {
  socialLinks: {
    facebook: string;
    instagram: string;
    youtube: string;
    tiktok: string;
  };
}

export const OfficialMedia: FC<Props> = ({ socialLinks }) => {
  return (
    <div className="flex flex-col items-center justify-center mb-28 gap-12">
      <p className="text-2xl md:text-4xl font-bold mb-16.5 text-light">
        Official Media
      </p>
      <div className="relative">
        <p
          className="text-[5.8vw] font-bold text-[#1A1A1A]"
          style={{
            textShadow:
              '1px 1px 0 #707070, -1px -1px 0 #707070, -1px 1px 0 #707070, 1px -1px 0 #707070, 0px 1px 0 #707070, 0 -1px 0 #707070, -1px 0 0 #707070, 1px 0 0 #707070',
          }}
        >
          Asia Union TCS Racing Team
        </p>
        <div className="absolute left-1/2 -translate-x-1/2 -top-8 md:top-1.25 flex items-center justify-between w-1/2 gap-2 md:w-1/5">
          <SnsIcon
            href={socialLinks.facebook}
            icon="/images/common/ico-facebook-bg-white.webp"
            label="Facebook"
          />
          <SnsIcon
            href={socialLinks.instagram}
            icon="/images/common/ico-instagram-bg-white.webp"
            label="Instagram"
          />
          <SnsIcon
            href={socialLinks.youtube}
            icon="/images/common/ico-youtube-bg-white.webp"
            label="YouTube"
          />
          <SnsIcon
            href={socialLinks.tiktok}
            icon="/images/common/ico-tiktok-bg-white.webp"
            label="TikTok"
          />
        </div>
      </div>
    </div>
  );
};
