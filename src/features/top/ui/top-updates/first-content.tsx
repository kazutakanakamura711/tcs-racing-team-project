import { ImageFilter, LinkUnderBarButton } from '@/shared/ui';
import { Box, HStack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { NewsItem } from '@/entities/news';
import { formatDate } from '@/shared/utils/date-format/date-format';
import { NavigateFunction } from 'react-router-dom';
import { noImageUrl, UPDATE_DETAIL } from '@/shared/constants';
import { cleanHtml } from '@/shared/utils/clean-html/clean-html';
interface Props {
  updateArray: NewsItem[];
  navigate: NavigateFunction;
  selectedLanguage: string;
  isSquareImage?: boolean;
}

export const FirstContent: FC<Props> = ({
  updateArray,
  navigate,
  selectedLanguage,
  isSquareImage,
}) => {
  if (!updateArray) return <Box color="text.white">データがありません。</Box>;

  return (
    <>
      {updateArray.map((item, index) => (
        <Box
          key={index}
          w="100%"
          position="relative"
          mb={{ base: 12, lg: 6 }}
          cursor="pointer"
          boxShadow="5px -5px #626063"
          transition="box-shadow 0.3s ease"
          _hover={{ boxShadow: '10px -10px #626063' }}
          onClick={() => navigate(UPDATE_DETAIL.replace(':id', item.id))}
        >
          {isSquareImage ? (
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
          ) : (
            <ImageFilter
              src={item.eyecatch?.url || noImageUrl}
              isHoverEffectEnabled={true}
            />
          )}
          <Box position="absolute" bottom="0" p={4} zIndex="2">
            <HStack overflow="hidden">
              <Text color="news.accent" fontSize={{ base: '12px', lg: '16px' }}>
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
              maxW="450px"
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
            <LinkUnderBarButton url="#" text="もっと見る" />
          </Box>
        </Box>
      ))}
    </>
  );
};
