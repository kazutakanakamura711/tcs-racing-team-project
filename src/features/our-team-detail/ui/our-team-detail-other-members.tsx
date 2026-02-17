import { Box, Text } from '@chakra-ui/react';
import { NavigateFunction } from 'react-router-dom';
import { Member } from '@/shared/constants';
import { OurTeamDetailGrid } from './our-team-detail-grid';
import { OurTeamDetailCarousel } from './our-team-detail-carousel';

interface Props {
  isTablet: boolean;
  navigate: NavigateFunction;
  memberList: Member[];
}

export const OurTeamDetailOtherMembers: React.FC<Props> = ({
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
    <Box mb="139px">
      <Text
        fontSize="34px"
        fontWeight="bold"
        textAlign="center"
        mb="88px"
        textColor="#fff"
      >
        Other Members
      </Text>
      {shouldUseGrid ? (
        <OurTeamDetailGrid
          memberList={memberList}
          navigate={navigate}
          columns={gridColumns}
        />
      ) : (
        <OurTeamDetailCarousel memberList={memberList} navigate={navigate} />
      )}
    </Box>
  );
};
