import { Box, Text, Image, SimpleGrid } from '@chakra-ui/react';
import { NavigateFunction } from 'react-router-dom';
import { Member, OUR_TEAM_DETAIL } from '@/shared/constants';

interface Props {
  memberList: Member[];
  navigate: NavigateFunction;
  columns: number;
}

export const OurTeamDetailGrid: React.FC<Props> = ({
  memberList,
  navigate,
  columns,
}) => {
  return (
    <SimpleGrid columns={columns} spacing={10} justifyContent="center">
      {memberList.map(member => (
        <Box key={member.id} w="100%" h="100%">
          <Box
            w="100%"
            aspectRatio="1"
            overflow="hidden"
            cursor="pointer"
            onClick={() => {
              navigate(OUR_TEAM_DETAIL.replace(':id', member.id));
            }}
          >
            {member.gradationImagesPath && (
              <Image
                display="block"
                w="100%"
                h="100%"
                objectFit="cover"
                src={member.gradationImagesPath}
                alt={member.nameJa}
              />
            )}
          </Box>
          <Text fontSize="16px" color="white" textAlign="center">
            {member.nameEn.toUpperCase()}
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  );
};
