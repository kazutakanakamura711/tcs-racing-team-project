import { Box, Text } from '@chakra-ui/react';
import { formatDate } from '@/shared/utils/dateFormat/dateFormat';
import { NavigateFunction } from 'react-router-dom';
import { NewsItem } from '@/entities/news';
import { FC } from 'react';

interface Props {
  news: NewsItem[];
  selectedLanguage: string;
  navigate: NavigateFunction;
}

export const LatestNewsList: FC<Props> = ({
  news,
  selectedLanguage,
  navigate,
}) => {
  return (
    <>
      {news.map(item => (
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
      ))}
    </>
  );
};
