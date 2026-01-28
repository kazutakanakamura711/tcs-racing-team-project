import { Title } from '@/shared/ui/title';
import { PageLayout } from '@/shared/ui/page-layout';
import { Box, HStack, Image, Link, Text } from '@chakra-ui/react';
import { OurPartners } from '../top/OurPartners';
import { OfficialMedia } from '../top/OfficialMedia';
import { useUpDateContents } from './hooks/useContact';
import { formatDate } from '@/shared/utils/dateFormat/dateFormat';
import { useLanguage } from '@/state/languageState/useLanguage';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Link as LinkRouter } from 'react-router-dom';
import { facebookUrl, instagramUrl, tiktokUrl, youtubeUrl } from '@/constants';

export const Contact = () => {
  const { news } = useUpDateContents();
  const [selectedLanguage] = useLanguage();
  const navigate = useNavigate();
  const { t } = useTranslation('contact');

  const newsList = news.map(item => {
    return (
      <Box
        key={item.id}
        borderBottom="solid 1px"
        borderColor="#fff"
        pt="27px"
        pb="19px"
        cursor="pointer"
        onClick={() => navigate(`/update-content/${item.id}`)}
      >
        <Box display="flex" alignItems="center" mb="15px">
          <Text color="#FF8F80" fontSize="16px" fontWeight="bold">
            News |
          </Text>
          <Text pl="8px" fontSize="16px" fontWeight="bold" color="#fff">
            {formatDate(item.publishedAt)}
          </Text>
        </Box>
        <Text color="#fff" fontSize="16px" fontWeight="bold">
          {item[`title${selectedLanguage}`]}
        </Text>
        <Box
          dangerouslySetInnerHTML={{
            __html: item[`content${selectedLanguage}`],
          }}
          style={{
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 1,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxHeight: '3em',
            color: '#fff',
            fontSize: '14px',
          }}
        />
      </Box>
    );
  });

  return (
    <PageLayout>
      <Box>
        <Box
          position="relative"
          mt={{ base: '110px', lg: '50px' }}
          w="100vw"
          h={{ base: 'auto', lg: 'calc(100vh - 52px)' }}
          objectFit="contain"
        >
          <Image
            w="100%"
            objectFit="contain"
            display="block"
            src="/images/contact/img-contact-top.webp"
            alt="contact"
          />
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="#000"
            opacity={0.5}
            zIndex="1"
          />
        </Box>
        <Box
          position="relative"
          minH="964px"
          mt={{ base: '0px', lg: '-50px' }}
          mb="116px"
          zIndex={2}
        >
          <Box
            w={{ base: '100%', lg: '70%' }}
            h="100%"
            pt="95px"
            pb="114px"
            pl="68px"
            ml={{ base: '0px', lg: '10%' }}
            bg="#fff"
          >
            <Text fontSize="36px" fontWeight="bold" mb="34px">
              Contact
            </Text>
            <Text w={{ base: '60%', lg: '50%' }} mb="80px" fontWeight="bold">
              {t('title')}
            </Text>

            <Text fontSize="36px" fontWeight="bold" mb="34px">
              E-mail
            </Text>

            <Text w={{ base: '60%', lg: '50%' }} mb="23px" fontWeight="bold">
              Please contact us by email at the email address below.
            </Text>

            <HStack>
              <Text fontSize="12px">{t('EmailMainTitle')}</Text>
              <Link href={`mailto:${t('EmailMainAddress')}`}>
                <Text fontSize="16px" fontWeight="bold" color="#000">
                  {t('EmailMainAddress')}
                </Text>
              </Link>
            </HStack>
            <HStack>
              <Text fontSize="12px">{t('EmailSubTitle')}</Text>
              <Link href={`mailto:${t('EmailSubAddress')}`}>
                <Text fontSize="16px" fontWeight="bold" color="#000">
                  {t('EmailSubAddress')}
                </Text>
              </Link>
            </HStack>
            <HStack mb="85px">
              <Text fontSize="12px">{t('EmailMediaTitle')}</Text>
              <Link href={`mailto:${t('EmailMediaAddress')}`}>
                <Text fontSize="16px" fontWeight="bold" color="#000">
                  {t('EmailMediaAddress')}
                </Text>
              </Link>
            </HStack>

            <Text fontSize="36px" fontWeight="bold" mb="34px">
              Social media
            </Text>
            <Text mb="27px" fontWeight="bold">
              Follow us on social media.
            </Text>
            <Box display="flex" alignItems="center" mb="16px">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="#000"
                w="27px"
                h="27px"
                rounded="50%"
                mr="18px"
              >
                <Image
                  src="/images/common/ico-youtube-white.svg"
                  alt="contact"
                />
              </Box>
              <LinkRouter
                to={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Text>{t('Youtube')}</Text>
              </LinkRouter>
            </Box>
            <Box display="flex" alignItems="center" mb="16px">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="#000"
                w="27px"
                h="27px"
                rounded="50%"
                mr="18px"
              >
                <Image
                  src="/images/common/ico-facebook-white.svg"
                  alt="contact"
                />
              </Box>

              <LinkRouter
                to={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Text>{t('Facebook')}</Text>
              </LinkRouter>
            </Box>
            <Box display="flex" alignItems="center" mb="16px">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="#000"
                w="27px"
                h="27px"
                rounded="50%"
                mr="18px"
              >
                <Image
                  src="/images/common/ico-instagram-white.svg"
                  alt="contact"
                />
              </Box>
              <LinkRouter
                to={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Text>{t('Instagram')}</Text>
              </LinkRouter>
            </Box>
            <Box display="flex" alignItems="center" mb="16px">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="#000"
                w="27px"
                h="27px"
                rounded="50%"
                mr="18px"
              >
                <Image
                  src="/images/common/ico-tiktok-white.svg"
                  alt="contact"
                />
              </Box>
              <LinkRouter
                to={tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Text>{t('TikTok')}</Text>
              </LinkRouter>
            </Box>
          </Box>
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
              color="#fff"
              borderBottom="solid 1px"
              borderColor="#fff"
            >
              Latest news
            </Text>
            {newsList}
          </Box>
        </Box>
      </Box>
      <Title title="Our Partners" subTitle="Our Partners" />
      <OurPartners />
      <OfficialMedia />
    </PageLayout>
  );
};
