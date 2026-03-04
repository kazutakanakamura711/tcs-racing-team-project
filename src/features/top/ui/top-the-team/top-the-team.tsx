import { DirectorContent } from './director-content';
import { TFunction } from 'i18next';
import { NavigateFunction } from 'react-router-dom';
import { Member as MemberType, OUR_TEAM_DETAIL, TOP } from '@/shared/constants';
import { Member } from './member';

interface Props {
  t: TFunction;
  tTeamMember: TFunction;
  director: MemberType;
  riderPairs: [MemberType, MemberType | undefined][];
  navigate: NavigateFunction;
}

export const TopTheTeam: React.FC<Props> = ({
  t,
  tTeamMember,
  director,
  riderPairs,
  navigate,
}) => {
  return (
    <div className="mb-24">
      <DirectorContent
        post={'株式会社 A-Union TCS 代表取締兼監督'}
        name={director.nameJa}
        comment={t('directorDescription')}
        link={OUR_TEAM_DETAIL.replace(':id', director.id)}
        imagePath={director.topTheTeamSectionImagePath || ''}
        navigate={navigate}
      />
      {riderPairs.map(pair => {
        const [leftRider, rightRider] = pair;
        return (
          <Member
            key={leftRider.id}
            leftName={leftRider.nameJa}
            leftComment={tTeamMember(`result.${leftRider.id}`)}
            leftImage={leftRider.ourTeamPageTheRiderSectionImagePath || ''}
            leftBg={leftRider.topTheTeamSectionBackgroundImagePath || ''}
            leftLink={OUR_TEAM_DETAIL.replace(':id', leftRider.id)}
            rightName={rightRider?.nameJa}
            rightComment={
              rightRider ? tTeamMember(`result.${rightRider.id}`) : undefined
            }
            rightImage={rightRider?.ourTeamPageTheRiderSectionImagePath || ''}
            rightBg={rightRider?.topTheTeamSectionBackgroundImagePath || ''}
            rightLink={
              rightRider ? OUR_TEAM_DETAIL.replace(':id', rightRider.id) : TOP
            }
            navigate={navigate}
          />
        );
      })}
    </div>
  );
};
