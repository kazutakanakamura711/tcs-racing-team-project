import { FC } from 'react';
import { RainbowUnderlineLink, CenteredContainer } from '@/shared/ui';
import {
  Member,
  MemberId,
  OUR_TEAM_DETAIL,
  OUR_TEAM,
  MemberTypeDisplay,
} from '@/shared/constants';
import { NavigateFunction } from 'react-router-dom';

interface Props {
  staffList: Member[];
  navigate: NavigateFunction;
}

export const TopStaff: FC<Props> = ({ staffList, navigate }) => {
  return (
    <div className="mb-29">
      <CenteredContainer>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-12 mb-4 justify-items-center">
          {staffList.map(staff => (
            <div
              key={staff.id}
              className="w-full h-auto flex justify-center items-center"
            >
              <div
                className={`relative mb-4 h-full ${
                  staff.id === MemberId.YusukeFukumitsu
                    ? 'cursor-pointer'
                    : 'cursor-default'
                }`}
                onClick={() => {
                  if (staff.id === MemberId.YusukeFukumitsu) {
                    navigate(OUR_TEAM_DETAIL.replace(':id', staff.id));
                  }
                }}
              >
                <img
                  src={staff.gradationImagesPath}
                  alt={staff.nameJa}
                  className="mx-auto w-full md:max-w-54 h-auto object-cover"
                />
                <div className="absolute top-[104%] left-[10%] -translate-y-full">
                  <p className="text-[10px] md:text-base">
                    {MemberTypeDisplay[staff.memberType]}
                  </p>
                  <p className="text-[10px] md:text-base">{staff.nameJa}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <RainbowUnderlineLink link={OUR_TEAM} text="Overview" />
        </div>
      </CenteredContainer>
      <hr className="mt-16! mx-auto! w-[90%] border! border-white! opacity-40" />
    </div>
  );
};
