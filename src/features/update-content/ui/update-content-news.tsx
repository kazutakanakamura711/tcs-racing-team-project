import { Box, HStack, Image, Text } from '@chakra-ui/react';
import { formatDate } from '@/shared/utils/dateFormat/dateFormat';
import { Link as LinkRouter } from 'react-router-dom';
import { facebookUrl, instagramUrl, tiktokUrl, youtubeUrl } from '@/constants';
import { NewsItem } from '@/entities/news';
import { FC } from 'react';
import styles from './update-content-news.module.css';

interface Props {
  singleNews: NewsItem | null;
  selectedLanguage: string;
}

export const UpdateContentNews: FC<Props> = ({
  singleNews,
  selectedLanguage,
}) => {
  return (
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
          className={styles.newsContent}
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
        <LinkRouter to={facebookUrl} target="_blank" rel="noopener noreferrer">
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
            <Image src="/images/common/ico-facebook-white.svg" alt="contact" />
          </Box>
        </LinkRouter>
        <LinkRouter to={instagramUrl} target="_blank" rel="noopener noreferrer">
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
            <Image src="/images/common/ico-instagram-white.svg" alt="contact" />
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
  );
};
