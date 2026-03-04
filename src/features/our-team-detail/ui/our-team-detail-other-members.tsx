import { FC } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { Member } from '@/shared/constants';
import { OurTeamDetailGrid } from './our-team-detail-grid';
import { OurTeamDetailCarousel } from './our-team-detail-carousel';

interface Props {
  isTablet: boolean;
  navigate: NavigateFunction;
  memberList: Member[];
}

export const OurTeamDetailOtherMembers: FC<Props> = ({
  isTablet,
  navigate,
  memberList,
}) => {
  const shouldUseGrid = isTablet || memberList.length <= 4;
  const gridColumns = isTablet
    ? 2
    : memberList.length < 4
      ? memberList.length
      : 4;

  return (
    <div className="mb-35">
      <p className="text-[34px] font-bold text-center mb-22! text-light">
        Other Members
      </p>
      {shouldUseGrid ? (
        <OurTeamDetailGrid
          memberList={memberList}
          navigate={navigate}
          columns={gridColumns}
        />
      ) : (
        <OurTeamDetailCarousel memberList={memberList} navigate={navigate} />
      )}
    </div>
  );
};
