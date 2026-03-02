import { CenteredContainer } from '@/shared/ui';
import { Member, OUR_TEAM_DETAIL } from '@/shared/constants';
import { FC } from 'react';
import { OurTeamSmallTitle } from './our-team-small-title';
import { NavigateFunction } from 'react-router-dom';

interface Props {
  mainStaffs: Member[];
  subStaffs: Member[];
  navigate: NavigateFunction;
}

export const OurTeamStaff: FC<Props> = ({
  mainStaffs,
  subStaffs,
  navigate,
}) => {
  return (
    <CenteredContainer>
      <div className="mb-50 md:mb-70">
        <OurTeamSmallTitle title="The Staff" />
        <div className="flex flex-col gap-24">
          {/* メインスタッフ表示 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainStaffs.map(staff => (
              <div
                key={staff.id}
                className="cursor-pointer relative"
                onClick={() => {
                  navigate(OUR_TEAM_DETAIL.replace(':id', staff.id));
                }}
              >
                <div className="w-full md:w-[72%] mx-auto bg-black h-full">
                  <img src={staff.gradationImagesPath} alt={staff.nameJa} />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center gap-6 w-full drop-shadow-[0_0_2px_rgba(0,0,0,1)]">
                  <p className="text-[18px]">{staff.nameJa}</p>
                  <div>
                    <img
                      className="w-3 h-6!"
                      src="/images/common/ico-arrow-white-brock.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* サブスタッフ表示 */}
          <div className="grid grid-cols-2 gap-8">
            {subStaffs.map(staff => (
              <div key={staff.id} className="relative">
                <div className="w-full md:w-[72%] mx-auto bg-black h-full">
                  <img src={staff.gradationImagesPath} alt={staff.nameJa} />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center w-full drop-shadow-[0_0_2px_rgba(0,0,0,1)]">
                  <p
                    className={`md:text-[18px] ${
                      staff.nameJa.length >= 7 ? 'text-[12px]' : 'text-[18px]'
                    }`}
                  >
                    {staff.nameJa}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CenteredContainer>
  );
};
