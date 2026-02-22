import { Box, HStack, Text } from '@chakra-ui/react';
import { NewsItem } from '@/entities/news';
import { FC } from 'react';
import { formatDate } from '@/shared/utils/date-format/date-format';
import { NavigateFunction } from 'react-router-dom';
import { UPDATE_DETAIL } from '@/shared/constants';
import { cleanHtml } from '@/shared/utils/clean-html/clean-html';

interface Props {
  updateArray: NewsItem[];
  navigate: NavigateFunction;
  selectedLanguage: string;
}

export const OtherContents: FC<Props> = ({
  updateArray,
  navigate,
  selectedLanguage,
}) => {
  if (!updateArray) return <Box>データがありません。</Box>;
  return (
    <>
      {updateArray.map(item => (
        <Box
          key={item.id}
          borderBottom="solid 1px"
          borderColor="text.white"
          mb="16px"
          cursor="pointer"
          onClick={() => navigate(UPDATE_DETAIL.replace(':id', item.id))}
        >
          <HStack mb={{ base: '8px', lg: '8px' }}>
            <Text color="news.accent">News |</Text>
            <Text color="text.white">{formatDate(item.publishedAt)}</Text>
          </HStack>
          <Text
            color="text.white"
            fontSize={{ base: '14px', lg: '16px' }}
            mb={{ base: '8px', lg: '8px' }}
          >
            {item[`title${selectedLanguage}`]}
          </Text>
          <Box
            maxH="200px"
            overflow="hidden"
            color="text.white"
            fontSize={{ base: '10px', lg: '16px' }}
            mb={{ base: '8px', lg: '16px' }}
          >
            <Box
              as="span"
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
        </Box>
      ))}
    </>
  );
};
