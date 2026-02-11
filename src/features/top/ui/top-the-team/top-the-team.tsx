import { Box } from '@chakra-ui/react';
import { DirectorContent } from './director-content';
import { TFunction } from 'i18next';
import {
  noImageUrl,
  Member as MemberType,
  OUR_TEAM_DETAIL,
  TOP,
} from '@/shared/constants';
import { Member } from './member';

interface Props {
  t: TFunction;
  director: MemberType;
  riderPairs: [MemberType, MemberType | undefined][];
}

export const TopTheTeam: React.FC<Props> = ({ t, director, riderPairs }) => {
  return (
    <Box mb="98px">
      <DirectorContent
        post={'株式会社 A-Union TCS 代表取締兼監督'}
        name={director.nameJa}
        comment={t(`description.${director.id}`)}
        link={OUR_TEAM_DETAIL.replace(':id', director.id)}
        imagePath={director.topTheTeamSectionImagePath || noImageUrl}
      />
      {riderPairs.map(pair => {
        const [leftRider, rightRider] = pair;
        return (
          <Member
            key={leftRider.id}
            leftName={leftRider.nameJa}
            leftComment={t(`description.${leftRider.id}`)}
            leftImage={
              leftRider.ourTeamPageTheRiderSectionImagePath || noImageUrl
            }
            leftBg={leftRider.topTheTeamSectionBackgroundImagePath || ''}
            leftLink={
              leftRider.memberPageFirstViewMemberImagePath
                ? OUR_TEAM_DETAIL.replace(':id', leftRider.id)
                : TOP
            }
            leftId={leftRider.id}
            rightName={rightRider?.nameJa}
            rightComment={
              rightRider ? t(`description.${rightRider.id}`) : undefined
            }
            rightImage={
              rightRider?.ourTeamPageTheRiderSectionImagePath || noImageUrl
            }
            rightBg={rightRider?.topTheTeamSectionBackgroundImagePath || ''}
            rightLink={
              rightRider?.memberPageFirstViewMemberImagePath
                ? OUR_TEAM_DETAIL.replace(':id', rightRider.id)
                : TOP
            }
            rightId={rightRider?.id}
          />
        );
      })}
    </Box>
  );
};
