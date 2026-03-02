import { FC } from 'react';
import { OurTeamTitle } from './our-team-title';
import { TFunction } from 'i18next';

interface Props {
  t: TFunction<'ourTeam'>;
}

export const OurTeamSummary: FC<Props> = ({ t }) => {
  return (
    <div className="mb-48 text-white">
      {/* TODO: Chakraを削除したら!を外す */}
      <hr className="w-[76%] mx-auto! border! border-white! opacity-40" />
      <div
        className="pt-18.5 pb-23 md:pb-29.5 bg-position-[80%]"
        style={{
          background: `linear-gradient(rgba(26, 26, 26, 1), rgba(0, 0, 0, 0.3)), url(/images/common/img-bg-lattice.webp)`,
          backgroundSize: '80%',
        }}
      >
        <OurTeamTitle
          title='"存在意義・使命"'
          middleTitle="Mission"
          subTitle="Mission"
        />
        <div className="flex flex-col gap-12 mx-auto mt-32 w-[76%] md:w-104.5">
          <p className="text-center text-base md:text-[18px]">
            {t('ourTeamMission')}
          </p>
        </div>
      </div>

      {/* TODO: Chakraを削除したら!を外す */}
      <hr className="w-[76%] mx-auto! border! border-white! opacity-40" />
      <div
        className="pt-18.5 pb-23 md:pb-29.5"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(26, 26, 26, 1), rgba(0, 0, 0, 0.3)), url(/images/common/img-bg-lattice.webp)`,
          backgroundSize: '80%',
        }}
      >
        <OurTeamTitle
          title='"将来像・方向性"'
          middleTitle="Vision"
          subTitle="Vision"
        />
        <div className="flex flex-col gap-12 mx-auto mt-32 w-[76%] md:w-162">
          <p className="text-center text-base md:text-[18px]">
            {t(`ourTeamVision.${0}`)}
          </p>
          <p className="text-center text-base md:text-[18px]">
            {t(`ourTeamVision.${1}`)}
          </p>
          <p className="text-center text-base md:text-[18px]">
            {t(`ourTeamVision.${2}`)}
          </p>
        </div>
      </div>

      {/* TODO: Chakraを削除したら!を外す */}
      <hr className="w-[76%] mx-auto! border! border-white! opacity-40" />
      <div
        className="pt-18.5 pb-23 md:pb-29.5"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(26, 26, 26, 1)), url(/images/common/img-bg-lattice.webp)`,
          backgroundSize: '80%',
        }}
      >
        <OurTeamTitle
          title='"価値観・行動指針"'
          middleTitle="Value"
          subTitle="Value"
        />
        <div className="flex flex-col gap-12 mx-auto mt-32 w-[76%] md:w-162">
          <div>
            <p className="text-center text-base md:text-[18px] font-bold">
              {t(`ourTeamValueTitle.${0}`)}
            </p>
            <p className="text-center text-base md:text-[18px]">
              {t('ourTeamValueBusiness')}
            </p>
          </div>
          <div>
            <p className="text-center text-base md:text-[18px] font-bold">
              {t(`ourTeamValueTitle.${1}`)}
            </p>
            <p className="text-center text-base md:text-[18px]">
              {t('ourTeamValueChallenge')}
            </p>
          </div>
          <div>
            <p className="text-center text-base md:text-[18px] font-bold">
              {t(`ourTeamValueTitle.${2}`)}
            </p>
            <p className="text-center text-base md:text-[18px]">
              {t('ourTeamValueFeeling')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
