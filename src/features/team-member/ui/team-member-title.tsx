import { CenteredContainer } from '@/shared/ui';
import { Box } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  title: string;
  middleTitle: string;
  subTitle: string;
};

export const TeamMemberTitle: FC<Props> = ({
  title,
  middleTitle,
  subTitle,
}) => {
  return (
    <CenteredContainer>
      <Box position="relative" minH="160px" mb="56px">
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          color="#1A1A1A"
          fontSize={{ base: '68px', lg: '108px' }}
          textShadow="1px 1px 0 #C0C0C0, -1px -1px 0 #C0C0C0, -1px 1px 0 #C0C0C0, 1px -1px 0 #C0C0C0, 0px 1px 0 #C0C0C0, 0 -1px 0 #C0C0C0, -1px 0 0 #C0C0C0, 1px 0 0 #C0C0C0"
          zIndex="0"
        >
          {subTitle}
        </Box>
        <Box
          position="absolute"
          top="88px"
          left="50%"
          transform="translateX(-50%)"
          color="#fff"
          fontSize={{ base: '28px', lg: '40px' }}
          fontWeight="bold"
          zIndex="1"
          textAlign="center"
          w="100%"
        >
          {title}
          <Box fontSize={{ base: '28px', lg: '40px' }} position="relative">
            {middleTitle}
            <Box
              position="absolute"
              bottom="0"
              left="50%"
              transform="translateX(-50%)"
              w="100%"
              maxW="87px"
              height="3px"
              bg={'url(images/common/img-text-bg-rainbow.webp)'}
              bgSize="cover"
              bgRepeat="no-repeat"
            />
          </Box>
        </Box>
      </Box>
    </CenteredContainer>
  );
};
