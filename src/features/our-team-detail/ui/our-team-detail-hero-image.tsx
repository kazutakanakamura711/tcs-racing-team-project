import { SnsIcon } from '@/shared/ui';
import {
  facebookUrl,
  instagramUrl,
  MemberId,
  tiktokUrl,
  youtubeUrl,
  Member,
} from '@/shared/constants';
import { HStack, Box, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { TFunction } from 'i18next';

interface Props {
  id: MemberId;
  member: Member;
  t: TFunction<'teamMember'>;
  heroImageSrc?: string;
}

export const OurTeamDetailHeroImage: FC<Props> = ({
  id,
  member,
  t,
  heroImageSrc,
}) => {
  if (!member) {
    return <Text>No data</Text>;
  }

  return (
    <Box
      position="relative"
      w="100vw"
      h={{ base: 'calc(100vh - 110px)', lg: 'calc(100vh - 52px)' }}
      color="#fff"
      mb="16px"
      mt={{ base: '110px', lg: '50px' }}
      overflowX={{ base: 'hidden', lg: 'visible' }}
    >
      <Box
        w="100vw"
        h={{ base: 'auto', lg: '89vh' }}
        objectFit="cover"
        position="relative"
      >
        {heroImageSrc && (
          <Image src={heroImageSrc} alt={member.nameEn} w="100%" h="100%" />
        )}
      </Box>
      <Box
        position="absolute"
        bottom={{ base: 'auto', lg: '0' }}
        left={{ base: 'auto', lg: '60%' }}
        top={{ base: '28%', lg: 'auto' }}
        right={{ base: '-64px', lg: 'auto' }}
        transform={{ base: 'translateY(-60%)', lg: 'translateX(-40%)' }}
        width={{ base: '80%', lg: 'auto' }}
        h={{ base: 'auto', lg: '100%' }}
        objectFit="contain"
        zIndex="2"
      >
        {member.memberPageFirstViewMemberImagePath && (
          <Image
            w="100%"
            h="100%"
            objectFit="cover"
            src={member.memberPageFirstViewMemberImagePath}
            alt={member.nameEn}
          />
        )}
      </Box>

      <Box
        position="absolute"
        w={{ base: '66vw', lg: '40%' }}
        right={{ base: 'auto', lg: '10px' }}
        left={{ base: '10%', lg: 'auto' }}
        top={{ base: '24%', lg: '50%' }}
        transform={{ base: 'translateY(-60%)', lg: 'translateY(-50%)' }}
        textAlign={{ base: 'left', lg: 'center' }}
        zIndex="2"
      >
        <Text
          fontSize={{ base: '16px', lg: '32px' }}
          fontWeight="bold"
          whiteSpace="pre-line"
        >
          {t(`title.${id}`)}
        </Text>
      </Box>

      <Box
        position="absolute"
        bottom={{ base: '96px', lg: '0' }}
        left="50%"
        w="76%"
        transform="translateX(-50%)"
        zIndex="2"
      >
        <Box
          mb="45px"
          fontSize={{ base: '36px', lg: '100px' }}
          fontWeight="bold"
        >
          <Text whiteSpace="pre-line" textTransform="uppercase">
            {member.nameEn}
          </Text>
        </Box>
        <HStack alignItems="center" justifyContent="space-between" w="20%">
          <SnsIcon
            href={facebookUrl}
            icon="/images/common/ico-facebook-bg-white.webp"
            label="Facebook"
          />
          <SnsIcon
            href={instagramUrl}
            icon="/images/common/ico-instagram-bg-white.webp"
            label="Instagram"
          />
          <SnsIcon
            href={youtubeUrl}
            icon="/images/common/ico-youtube-bg-white.webp"
            label="YouTube"
          />
          <SnsIcon
            href={tiktokUrl}
            icon="/images/common/ico-tiktok-bg-white.webp"
            label="TikTok"
          />
        </HStack>
      </Box>
    </Box>
  );
};
