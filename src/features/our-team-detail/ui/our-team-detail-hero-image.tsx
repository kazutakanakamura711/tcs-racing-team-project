import { SnsIcon } from '@/shared/ui';
import {
  facebookUrl,
  instagramUrl,
  tiktokUrl,
  youtubeUrl,
  Member,
} from '@/shared/constants';
import {
  HStack,
  Box,
  Image,
  Text,
  VStack,
  Container,
  Heading,
} from '@chakra-ui/react';
import { FC } from 'react';
import { TFunction } from 'i18next';

interface Props {
  member: Member;
  t: TFunction<'teamMember'>;
  heroImageSrc?: string;
}

export const OurTeamDetailHeroImage: FC<Props> = ({
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
      w="100%"
      h={{ base: 'auto', lg: '100vh' }}
      bg="#1a1a1a"
      overflow="hidden"
    >
      {/* 背景画像 */}
      {heroImageSrc ? (
        <Image
          src={heroImageSrc}
          alt="個人ページの背景画像"
          bg="#1a1a1a"
          w="100%"
          h="auto"
          display="block"
          zIndex="0"
        />
      ) : (
        // 画像がない場合でも高さを確保してレイアウトが崩れないようにするための空のBox
        <Box
          bg="#1a1a1a"
          w="100%"
          h={{ base: '80vw', lg: '100vh' }}
          display="block"
          zIndex="0"
        />
      )}

      {/* 人物画像：背景画像の上に重ねる */}
      {member.memberPageFirstViewMemberImagePath ? (
        <Image
          src={member.memberPageFirstViewMemberImagePath}
          alt={`${member.nameEn}の画像`}
          position="absolute"
          top="0"
          left={{ base: '20%', lg: '0' }}
          w="100%"
          h={{ base: 'auto', lg: '100%' }}
          objectFit="contain"
          objectPosition={['80% bottom', '90% bottom']}
          zIndex="1"
        />
      ) : (
        // 画像がない場合でも高さを確保してレイアウトが崩れないようにするための空のBox
        <Box
          position="absolute"
          top="0"
          left={{ base: '20%', lg: '0' }}
          w="100%"
          h={{ base: 'auto', lg: '100%' }}
          zIndex="1"
        />
      )}

      {/* タイトルテキスト（名言） */}
      <Box
        position="absolute"
        top={{ base: '40%', lg: '50%' }}
        left={{ base: '40%', lg: '70%' }}
        transform="translate(-50%, -50%)"
        zIndex="3"
        w={{ base: '60%', lg: '48%' }}
        textAlign="left"
      >
        <Text
          fontFamily="'m-plus-1c', sans-serif !important"
          fontSize={{ base: '16px', lg: '32px' }}
          fontWeight="bold"
          color="#fff"
          textShadow="2px 2px 8px rgba(0,0,0,1)"
          lineHeight="1.2"
        >
          {t(`title.${member.id}`)}
        </Text>
      </Box>
      {/* コンテンツエリア（名前とSNS） */}
      <Container
        maxW="none"
        w="100%"
        px={0}
        mx={0}
        position={{ base: 'relative', lg: 'absolute' }}
        top={{ lg: '0' }}
        left={{ lg: '0' }}
        transform="none"
        h={{ base: 'auto', lg: '100%' }}
        zIndex="2"
        mt={{ base: '24px', lg: '0' }}
      >
        <VStack
          align="flex-start"
          spacing={3}
          position={{ base: 'relative', lg: 'absolute' }}
          bottom={{ lg: '15%' }}
          left={{ base: '6%', lg: '12%' }}
          w={['100%', 'auto']}
          px={0}
          pb={{ base: '20px', lg: '0' }}
        >
          <Heading
            fontFamily="'m-plus-1c', sans-serif !important"
            color="white"
            whiteSpace="pre-line"
            fontSize={{ base: '32px', lg: '100px' }}
            lineHeight="1.1"
            textTransform="uppercase"
            textShadow="2px 2px 10px rgba(0,0,0,0.8)"
          >
            {member.nameEn.replace(' ', '\n')}
          </Heading>

          <HStack spacing={4}>
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
        </VStack>
      </Container>
    </Box>
  );
};
