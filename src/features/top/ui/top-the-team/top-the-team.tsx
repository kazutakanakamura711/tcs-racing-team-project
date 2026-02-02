import { Box } from '@chakra-ui/react';
import { DirectorContent } from './director-content';
import { TFunction } from 'i18next';
import { convertNewlineToBreak } from '@/shared/utils/convertNewlineToBreak/convertNewlineToBreak';
import { noImageUrl, Member as MemberType } from '@/constants';
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
        comment={convertNewlineToBreak(t(`description.${director.id}`))}
        link={`/member-page/${director.id}`}
        imagePath={director.topTheTeamSectionImagePath || noImageUrl}
      />
      {riderPairs.map(pair => {
        const [leftRider, rightRider] = pair;
        return (
          <Member
            key={leftRider.id}
            leftName={leftRider.nameJa}
            leftComment={convertNewlineToBreak(
              t(`description.${leftRider.id}`),
            )}
            leftImage={
              leftRider.ourTeamPageTheRiderSectionImagePath || noImageUrl
            }
            leftBg={leftRider.topTheTeamSectionBackgroundImagePath || ''}
            leftLink={
              leftRider.memberPageFirstViewMemberImagePath
                ? `/member-page/${leftRider.id}`
                : `/`
            }
            leftId={leftRider.id}
            rightName={rightRider?.nameJa}
            rightComment={
              rightRider
                ? convertNewlineToBreak(t(`description.${rightRider.id}`))
                : undefined
            }
            rightImage={
              rightRider?.ourTeamPageTheRiderSectionImagePath || noImageUrl
            }
            rightBg={rightRider?.topTheTeamSectionBackgroundImagePath || ''}
            rightLink={
              rightRider?.memberPageFirstViewMemberImagePath
                ? `/member-page/${rightRider.id}`
                : `/`
            }
            rightId={rightRider?.id}
          />
        );
      })}
    </Box>
  );
};
