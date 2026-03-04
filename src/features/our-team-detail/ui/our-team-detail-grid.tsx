import { FC } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { Member, OUR_TEAM_DETAIL } from '@/shared/constants';

interface Props {
  memberList: Member[];
  navigate: NavigateFunction;
  columns: number;
}

export const OurTeamDetailGrid: FC<Props> = ({
  memberList,
  navigate,
  columns,
}) => {
  return (
    <div
      className="grid gap-10"
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {memberList.map(member => (
        <div key={member.id} className="w-full h-full">
          <div
            className="w-full aspect-square overflow-hidden cursor-pointer"
            onClick={() => navigate(OUR_TEAM_DETAIL.replace(':id', member.id))}
          >
            {member.gradationImagesPath && (
              <img
                className="block w-full h-full object-cover"
                src={member.gradationImagesPath}
                alt={member.nameJa}
              />
            )}
          </div>
          <p className="text-base text-white text-center mt-1">
            {member.nameEn.toUpperCase()}
          </p>
        </div>
      ))}
    </div>
  );
};
