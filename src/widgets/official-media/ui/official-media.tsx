import { SnsIcon } from '@/shared/ui/sns-icon';
import { Box, HStack, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface Props {
  socialLinks: {
    facebook: string;
    instagram: string;
    youtube: string;
    tiktok: string;
  };
}

export const OfficialMedia: FC<Props> = ({ socialLinks }) => {
  return (
    <Box textAlign="center">
      <Text
        fontSize={{ base: '24px', lg: '36px' }}
        fontWeight="bold"
        mb="66px"
        color="white"
      >
        Official Media
      </Text>
      <Box position="relative">
        <Text
          fontSize="5.8vw"
          fontWeight="bold"
          color="#1A1A1A"
          textShadow="1px 1px 0 #707070, -1px -1px 0 #707070, -1px 1px 0 #707070, 1px -1px 0 #707070, 0px 1px 0 #707070, 0 -1px 0 #707070, -1px 0 0 #707070, 1px 0 0 #707070"
        >
          Asia Union TCS Racing Team
        </Text>
        <HStack
          alignItems="center"
          justifyContent="space-between"
          position="absolute"
          left="50%"
          top="5px"
          transform="translateX(-50%)"
          w={{ base: '50%', lg: '20%' }}
          mx="auto"
        >
          <SnsIcon
            href={socialLinks.facebook}
            icon="/images/common/ico-facebook-bg-white.webp"
            label="Facebook"
          />
          <SnsIcon
            href={socialLinks.instagram}
            icon="/images/common/ico-instagram-bg-white.webp"
            label="Instagram"
          />
          <SnsIcon
            href={socialLinks.youtube}
            icon="/images/common/ico-youtube-bg-white.webp"
            label="YouTube"
          />
          <SnsIcon
            href={socialLinks.tiktok}
            icon="/images/common/ico-tiktok-bg-white.webp"
            label="TikTok"
          />
        </HStack>
      </Box>
    </Box>
  );
};
