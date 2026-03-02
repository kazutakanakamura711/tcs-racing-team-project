import { CenteredContainer } from '@/shared/ui';
import { Member, OUR_TEAM_DETAIL } from '@/shared/constants';
import { FC } from 'react';
import { NavigateFunction } from 'react-router-dom';

interface Props {
  riders: Member[];
  navigate: NavigateFunction;
}

export const OurTeamRiders: FC<Props> = ({ riders, navigate }) => {
  return (
    <CenteredContainer>
      <div className="mb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {riders.map(rider => (
            <div
              key={rider.id}
              className="cursor-pointer relative aspect-1097/880"
              onClick={() => {
                navigate(OUR_TEAM_DETAIL.replace(':id', rider.id));
              }}
            >
              <img
                src={rider.ourTeamPageTheRiderSectionImagePath}
                className="h-full! mx-auto"
                alt={rider.nameJa}
              />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center gap-6 w-full drop-shadow-[0_0_2px_rgba(0,0,0,1)]">
                <p className="text-[24px] text-white">{rider.nameJa}</p>
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
      </div>
    </CenteredContainer>
  );
};
