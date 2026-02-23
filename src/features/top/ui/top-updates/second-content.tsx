import { ImageFilter } from '@/shared/ui';
import { Box, HStack, Text, Image } from '@chakra-ui/react';
import { Link, NavigateFunction } from 'react-router-dom';
import { NewsItem } from '@/entities/news';
import { FC } from 'react';
import { formatDate } from '@/shared/utils/date-format/date-format';
import { noImageUrl, UPDATE_DETAIL } from '@/shared/constants';
import { cleanHtml } from '@/shared/utils/clean-html/clean-html';

interface Props {
  updateArray: NewsItem[];
  navigate: NavigateFunction;
  selectedLanguage: string;
}

export const SecondContent: FC<Props> = ({
  updateArray,
  navigate,
  selectedLanguage,
}) => {
  if (!updateArray) return <Box>データがありません。</Box>;

  return (
    <Box display="flex" justifyContent="space-between" flexWrap="wrap">
      {updateArray.map(item => (
        <Box
          key={item.id}
          position="relative"
          w={{ base: '100%', lg: 'calc(50% - 6px)' }}
          mb={{ base: 12, lg: 0 }}
          cursor="pointer"
          boxShadow="5px -5px #626063"
          transition="box-shadow 0.3s ease"
          _hover={{ boxShadow: '10px -10px #626063' }}
          onClick={() => navigate(UPDATE_DETAIL.replace(':id', item.id))}
        >
          <Box
            w="100%"
            aspectRatio="1 / 1"
            overflow="hidden"
            sx={{
              '& > div': { h: '100%' },
              '& img': {
                minH: '100%',
                maxH: '100%',
                h: '100%',
                objectFit: 'cover',
              },
            }}
          >
            <ImageFilter
              src={item.eyecatch?.url || noImageUrl}
              isHoverEffectEnabled={true}
            />
          </Box>
          <Box
            position="absolute"
            w="calc(100% - 20px)"
            p={4}
            bottom="0px"
            zIndex="2"
          >
            <HStack overflow="hidden">
              <Text
                color="news.accent"
                fontSize={{ base: '12px', lg: '16px' }}
                flexShrink={0}
              >
                News |
              </Text>
              <Text
                color="text.white"
                fontSize={{ base: '12px', lg: '16px' }}
                noOfLines={1}
              >
                {formatDate(item.publishedAt)}
              </Text>
            </HStack>
            <Text color="text.white" noOfLines={1}>
              {item[`title${selectedLanguage}`]}
            </Text>
            <Box
              maxH="200px"
              overflow="hidden"
              color="text.white"
              fontSize={{ base: '10px', lg: '16px' }}
              mb={2}
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
            <Link
              to="#"
              style={{ color: 'text.white', display: 'inline-block' }}
            >
              <HStack borderBottom="solid 1px #FF9080">
                <Text
                  color="text.white"
                  fontSize={{ base: '10px', lg: '12px' }}
                >
                  もっと見る
                </Text>
                <Image
                  w="5px"
                  h="10px"
                  src="/images/common/ico-arrow-white-brock.svg"
                  alt=""
                />
              </HStack>
            </Link>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
