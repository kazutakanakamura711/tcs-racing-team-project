import { Box, Image, Link, Stack, Text, VStack } from '@chakra-ui/react';
import { Link as LinkRouter, NavigateFunction } from 'react-router-dom';
import {
  facebookUrl,
  instagramUrl,
  tiktokUrl,
  youtubeUrl,
} from '@/shared/constants';
import { NewsItem } from '@/entities/news';
import { TFunction } from 'i18next';
import { FC } from 'react';
import { LatestNewsList } from './latest-news-list';

interface Props {
  news: NewsItem[];
  selectedLanguage: string;
  navigate: NavigateFunction;
  t: TFunction<'contact'>;
}

export const ContactContent: FC<Props> = ({
  news,
  selectedLanguage,
  navigate,
  t,
}) => {
  return (
    <Box
      position="relative"
      minH="964px"
      mt={{ base: '0px', lg: '-50px' }}
      mb="116px"
      zIndex={2}
      textColor="#333333"
    >
      <Box
        w={{ base: '100%', lg: '70%' }}
        h="100%"
        pt="95px"
        pb="114px"
        px={{ base: 10, lg: '68px' }}
        ml={{ base: '0px', lg: '10%' }}
        bg="#fff"
        display="flex"
        flexDirection="column"
        gap={20}
      >
        {/* Contact */}
        <Box display="flex" flexDirection="column" gap={8}>
          <Text
            as="h1"
            fontSize="36px"
            fontWeight="bold"
            w={{ base: '100%', lg: '66%' }}
          >
            Contact
          </Text>
          <Text
            w={{ base: '100%', lg: '66%' }}
            fontWeight="bold"
            whiteSpace="pre-line"
          >
            {t('title')}
          </Text>
        </Box>

        {/* E-mail */}
        <Box display="flex" flexDirection="column" gap={8}>
          <Text
            as="h2"
            fontSize="36px"
            fontWeight="bold"
            w={{ base: '100%', lg: '66%' }}
          >
            E-mail
          </Text>
          <Box display="flex" flexDirection="column" gap={6}>
            <Text w={{ base: '100%', lg: '66%' }} fontWeight="bold">
              Please contact us by email at the email address below.
            </Text>
            <VStack align="start" gap={{ base: 4, lg: 2 }}>
              <Stack
                direction={{ base: 'column', lg: 'row' }}
                align={{ base: 'flex-start', lg: 'baseline' }}
                w={{ base: '100%', lg: '66%' }}
                gap={0}
              >
                <Text fontSize="12px" flexShrink={0} minW="120px">
                  {t('EmailMainTitle')}
                </Text>
                <Link href={`mailto:${t('EmailMainAddress')}`}>
                  <Text
                    fontSize="16px"
                    fontWeight="bold"
                    color="#333333"
                    wordBreak="break-all"
                  >
                    {t('EmailMainAddress')}
                  </Text>
                </Link>
              </Stack>
              <Stack
                direction={{ base: 'column', lg: 'row' }}
                align={{ base: 'flex-start', lg: 'baseline' }}
                w={{ base: '100%', lg: '66%' }}
                gap={0}
              >
                <Text fontSize="12px" flexShrink={0} minW="120px">
                  {t('EmailSubTitle')}
                </Text>
                <Link href={`mailto:${t('EmailSubAddress')}`}>
                  <Text
                    fontSize="16px"
                    fontWeight="bold"
                    color="#333333"
                    wordBreak="break-all"
                  >
                    {t('EmailSubAddress')}
                  </Text>
                </Link>
              </Stack>
              <Stack
                direction={{ base: 'column', lg: 'row' }}
                align={{ base: 'flex-start', lg: 'baseline' }}
                w={{ base: '100%', lg: '66%' }}
                gap={0}
              >
                <Text fontSize="12px" flexShrink={0} minW="120px">
                  {t('EmailMediaTitle')}
                </Text>
                <Link href={`mailto:${t('EmailMediaAddress')}`}>
                  <Text
                    fontSize="16px"
                    fontWeight="bold"
                    color="#333333"
                    wordBreak="break-all"
                  >
                    {t('EmailMediaAddress')}
                  </Text>
                </Link>
              </Stack>
            </VStack>
          </Box>
        </Box>

        {/* Social media */}
        <Box display="flex" flexDirection="column" gap={8}>
          <Text
            as="h2"
            fontSize="36px"
            fontWeight="bold"
            w={{ base: '100%', lg: '66%' }}
          >
            Social media
          </Text>
          <Box display="flex" flexDirection="column" gap={6}>
            <Text fontWeight="bold" w={{ base: '100%', lg: '66%' }}>
              Follow us on social media.
            </Text>
            <VStack align="start" gap={4}>
              <Box
                display="flex"
                alignItems="center"
                w={{ base: '100%', lg: '66%' }}
                gap={4}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="#333333"
                  w="27px"
                  h="27px"
                  rounded="50%"
                  flexShrink={0}
                >
                  <Image src="/images/common/ico-youtube-white.svg" alt="" />
                </Box>
                <LinkRouter
                  to={youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text>{t('Youtube')}</Text>
                </LinkRouter>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                w={{ base: '100%', lg: '66%' }}
                gap={4}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="#333333"
                  w="27px"
                  h="27px"
                  rounded="50%"
                >
                  <Image src="/images/common/ico-facebook-white.svg" alt="" />
                </Box>
                <LinkRouter
                  to={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text>{t('Facebook')}</Text>
                </LinkRouter>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                w={{ base: '100%', lg: '66%' }}
                gap={4}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="#333333"
                  w="27px"
                  h="27px"
                  rounded="50%"
                >
                  <Image src="/images/common/ico-instagram-white.svg" alt="" />
                </Box>
                <LinkRouter
                  to={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text>{t('Instagram')}</Text>
                </LinkRouter>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                w={{ base: '100%', lg: '66%' }}
                gap={4}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="#333333"
                  w="27px"
                  h="27px"
                  rounded="50%"
                >
                  <Image src="/images/common/ico-tiktok-white.svg" alt="" />
                </Box>
                <LinkRouter
                  to={tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text>{t('TikTok')}</Text>
                </LinkRouter>
              </Box>
            </VStack>
          </Box>
        </Box>
      </Box>

      {/* Latest news */}
      <Box
        position={{ base: 'static', lg: 'absolute' }}
        top={{ base: 'auto', lg: '50%' }}
        right={{ base: 'auto', lg: '10%' }}
        transform={{ base: 'none', lg: 'translateY(-50%)' }}
        w={{ base: 'calc(100% - 120px)', lg: '30%' }}
        bg="#666666"
        p="79px 5%"
        m={{ base: '79px 60px', lg: '0px' }}
      >
        <Text
          pb="16px"
          fontSize="24px"
          fontWeight="bold"
          color="text.white"
          borderBottom="solid 1px"
          borderColor="text.white"
        >
          Latest news
        </Text>
        <LatestNewsList
          news={news}
          selectedLanguage={selectedLanguage}
          navigate={navigate}
        />
      </Box>
    </Box>
  );
};
