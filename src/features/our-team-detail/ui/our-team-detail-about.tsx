import { FC } from 'react';
import { Member } from '@/shared/constants';
import { TFunction } from 'i18next';

interface Props {
  member: Member;
  t: TFunction<'teamMember'>;
}

export const OurTeamDetailAbout: FC<Props> = ({ member, t }) => {
  return (
    <div className="w-full md:w-[88%] ml-auto mb-35 md:mb-72">
      {/* タイトル: モバイルのみ */}
      <div className="flex md:hidden justify-center">
        <p className="relative inline-block mb-16 pb-2 text-2xl font-bold text-light">
          {t(`aboutTitle.${member.id}`)}
        </p>
      </div>

      {/* PC: 画像の上にテキストを重ねる */}
      <div className="hidden md:block relative overflow-hidden">
        {/* テキスト（高さの基準） */}
        <div className="relative w-[56%] text-light py-8 pl-8 z-10 min-h-137.5">
          {/* TODO: Chakraを削除したら!を外す */}
          <p className="text-[35px] font-bold mb-8!">
            {t(`aboutTitle.${member.id}`)}
          </p>
          <p className="leading-loose text-sm whitespace-pre-line">
            {t(`about.${member.id}`)}
          </p>
        </div>

        {/* 画像: テキストコンテナの高さに合わせる */}
        {member.memberPageAboutSectionImagesPath ? (
          <img
            className="absolute inset-0 w-full h-full! object-contain object-right"
            src={member.memberPageAboutSectionImagesPath}
            alt={member.nameJa}
          />
        ) : (
          <div className="absolute inset-0 w-full h-full" />
        )}

        {/* グラデーションオーバーレイ */}
        <div
          className="absolute inset-0 z-5"
          style={{
            background:
              'linear-gradient(to right, #1A1A1A 50%, transparent 70%)',
          }}
        />
      </div>

      {/* モバイル: 画像とテキスト縦並び */}
      <div className="md:hidden">
        {member.memberPageAboutSectionImagesPath && (
          <img
            className="w-full max-h-112 object-cover"
            src={member.memberPageAboutSectionImagesPath}
            alt={member.nameJa}
          />
        )}
        <div className="w-[88%] mx-auto mt-8">
          <p className="leading-loose text-sm whitespace-pre-line text-light">
            {t(`about.${member.id}`)}
          </p>
        </div>
      </div>
    </div>
  );
};
