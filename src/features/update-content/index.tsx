import { Title } from '@/shared/ui/title';
import { PageLayout } from '@/shared/ui/page-layout';
import { formatDate } from '@/shared/utils/dateFormat/dateFormat';
import { Box, HStack, Image, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { OurPartners } from '../top/OurPartners';
import { OfficialMedia } from '../top/OfficialMedia';
import { MainLayout } from '@/shared/ui/main-layout';
import { RelatedUpdates } from './RelatedUpdates';
import './style.css';
import { useLanguage } from '@/state/languageState/useLanguage';
import { useSingleNewsContent } from './hooks/useSingleNewsContent';
import { Link as LinkRouter } from 'react-router-dom';
import { facebookUrl, instagramUrl, tiktokUrl, youtubeUrl } from '@/constants';

export const UpdateContent = () => {
  const { id } = useParams();

  const { singleNews } = useSingleNewsContent(id || '');

  const [selectedLanguage] = useLanguage();

  return (
    <PageLayout>
      <Box
        mt={{ base: '110px', lg: '50px' }}
        w="100vw"
        objectFit="contain"
        position="relative"
      >
        <Image
          w="100%"
          display="block"
          src="/images/updateContent/img-updateContent-top.jpeg"
          alt="UpdateContent"
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
        w={{ base: '85%', lg: '70%' }}
        mt="-50px"
        mb="120px"
        mx="auto"
        p="33px"
        bg="#fff"
        zIndex="2"
      >
        <HStack mb="38px">
          <Text
            color="#FF9080"
            fontSize={{ base: '12px', lg: '16px' }}
            fontWeight="bold"
          >
            News |
          </Text>
          <Text
            color="#000"
            fontSize={{ base: '12px', lg: '16px' }}
            fontWeight="bold"
          >
            {singleNews?.publishedAt && formatDate(singleNews.publishedAt)}
          </Text>
        </HStack>

        <Text
          color="#000"
          fontSize={{ base: '16px', lg: '36px' }}
          fontWeight="bold"
          mb="34px"
        >
          {singleNews?.[`title${selectedLanguage}`]}
        </Text>

        <Text
          color="#FF9080"
          fontSize={{ base: '16px', lg: '36px' }}
          mb="34px"
          fontWeight="bold"
        >
          News
        </Text>

        {singleNews?.[`content${selectedLanguage}`] && (
          <Box
            className="news-content"
            mb="37px"
            dangerouslySetInnerHTML={{
              __html: singleNews?.[`content${selectedLanguage}`],
            }}
          />
        )}

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          w={{ base: '90%', lg: '27%' }}
          mx="auto"
        >
          <LinkRouter to={youtubeUrl} target="_blank" rel="noopener noreferrer">
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
              <Image src="/images/common/ico-youtube-white.svg" alt="contact" />
            </Box>
          </LinkRouter>
          <LinkRouter
            to={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
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
          </LinkRouter>
          <LinkRouter
            to={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
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
          </LinkRouter>
          <LinkRouter to={tiktokUrl} target="_blank" rel="noopener noreferrer">
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
              <Image src="/images/common/ico-tiktok-white.svg" alt="contact" />
            </Box>
          </LinkRouter>
        </Box>
      </Box>

      <MainLayout>
        <Text
          color="#fff"
          fontSize={{ base: '24px', lg: '56px' }}
          fontWeight="bold"
          mb="42px"
        >
          Related Updates
        </Text>
        {id && <RelatedUpdates id={id} />}
      </MainLayout>

      <Title title="Our Partners" subTitle="Our Partners" id="Partners" />
      <OurPartners />
      <OfficialMedia />
    </PageLayout>
  );
};
