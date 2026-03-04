import { MemberId } from '@/shared/constants';
import { FC } from 'react';
import { TFunction } from 'i18next';

interface Props {
  id: MemberId;
  t: TFunction<'teamMember'>;
}

export const OurTeamDetailProfileContent: FC<Props> = ({ id, t }) => {
  return (
    <div className="w-full flex flex-col gap-10 md:flex-row md:justify-between mb-24">
      {/* ===== 左側 Profile ===== */}
      <div className="w-full gap-4 md:w-[50%] flex flex-col text-light">
        <p className="text-[24px]">Profile</p>

        <div
          className="
            relative w-full
            px-7.5 py-6
            bg-[#666666]
            overflow-hidden
            text-[18px]
            shadow-[10px_-10px_0_#333333]
            
            before:content-['']
            before:absolute
            before:left-0
            before:-top-2.5
            before:bottom-0
            before:w-[108%]
            before:h-1.25
            before:bg-[url('/images/common/img-text-bg-rainbow.webp')]
            before:bg-cover
            before:bg-no-repeat
            before:rotate-90
            before:origin-bottom-left
          "
        >
          <div className="grid grid-cols-[max-content_1fr] gap-x-2 md:gap-x-4 gap-y-4">
            {/* 国籍 */}
            <p className="flex items-start text-[16px] md:text-[18px] after:content-[':'] after:ml-1">
              {t(`menuTitle.${0}`)}
            </p>
            <p className="text-[16px] md:text-[18px] whitespace-pre-line">
              {t(`nationality.${id}`)}
            </p>

            {/* 出身地 */}
            <p className="flex items-start text-[16px] md:text-[18px] after:content-[':']">
              {t(`menuTitle.${1}`)}
            </p>
            <p className="text-[16px] md:text-[18px]">
              {t(`birthplace.${id}`)}
            </p>

            {/* 生年月日 */}
            <p className="flex items-start text-[16px] md:text-[18px] after:content-[':']">
              {t(`menuTitle.${2}`)}
            </p>
            <p className="text-[16px] md:text-[18px]">{t(`berthDay.${id}`)}</p>

            {/* 身長 */}
            <p className="flex items-start text-[16px] md:text-[18px] after:content-[':']">
              {t(`menuTitle.${3}`)}
            </p>
            <p className="text-[16px] md:text-[18px]">{t(`stature.${id}`)}</p>

            {/* 趣味 */}
            <p className="flex items-start text-[16px] md:text-[18px] after:content-[':']">
              {t(`menuTitle.${4}`)}
            </p>
            <p className="text-[16px] md:text-[18px]">{t(`tastes.${id}`)}</p>
          </div>
        </div>
      </div>

      {/* ===== 右側 Result ===== */}
      <div className="w-full gap-4 md:w-[50%] flex flex-col text-light">
        <p className="text-[24px]">Result</p>

        <div
          className="
            relative flex flex-col
            px-7.5 py-6
            bg-[#666666]
            overflow-hidden
            text-[16px] md:text-[18px]
            shadow-[10px_-10px_0_#333333]

            before:content-['']
            before:absolute
            before:left-0
            before:-top-2.5
            before:bottom-0
            before:w-[108%]
            before:h-1.25
            before:bg-[url('/images/common/img-text-bg-rainbow.webp')]
            before:bg-cover
            before:bg-no-repeat
            before:rotate-90
            before:origin-bottom-left
          "
        >
          <p className="whitespace-pre-line">{t(`result.${id}`)}</p>
        </div>
      </div>
    </div>
  );
};
