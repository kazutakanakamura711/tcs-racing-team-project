import { Box, Text } from '@chakra-ui/react';
import { formatDate } from '@/shared/utils/date-format/date-format';
import { NavigateFunction } from 'react-router-dom';
import { NewsItem } from '@/entities/news';
import { FC } from 'react';
import { UPDATE_DETAIL } from '@/shared/constants';
import { cleanHtml } from '@/shared/utils/clean-html/clean-html';

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
          onClick={() => navigate(UPDATE_DETAIL.replace(':id', item.id))}
        >
          <Box display="flex" alignItems="center" mb="15px">
            <Text color="news.accent" fontSize="16px" fontWeight="bold">
              News |
            </Text>
            <Text pl="8px" fontSize="16px" fontWeight="bold" color="text.white">
              {formatDate(item.publishedAt)}
            </Text>
          </Box>
          <Text color="text.white" fontSize="16px" fontWeight="bold">
            {item[`title${selectedLanguage}`]}
          </Text>
          <Box
            color="text.white"
            fontSize="14px"
            dangerouslySetInnerHTML={{
              __html: cleanHtml(item[`content${selectedLanguage}`]),
            }}
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 1,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxHeight: '3em',
            }}
          />
        </Box>
      ))}
    </>
  );
};
