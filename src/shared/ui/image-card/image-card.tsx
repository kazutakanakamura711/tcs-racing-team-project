import { Box, HStack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { NewsItem } from '@/entities/news';
import { formatDate } from '@/shared/utils/date-format/date-format';
import { NavigateFunction } from 'react-router-dom';
import { noImageUrl, UPDATE_DETAIL } from '@/shared/constants';
import { cleanHtml } from '@/shared/utils/clean-html/clean-html';
import { AspectRatio, ImageFilter, LinkUnderBarButton } from '@/shared/ui';

export interface ImageCardProps {
  updateArray: NewsItem[];
  navigate: NavigateFunction;
  selectedLanguage: string;
  isSquareImage?: boolean;
}

export const ImageCard: FC<ImageCardProps> = ({
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
          position="relative"
          cursor="pointer"
          boxShadow="5px -5px #626063"
          transition="box-shadow 0.3s ease"
          _hover={{ boxShadow: '10px -10px #626063' }}
          onClick={() => navigate(UPDATE_DETAIL.replace(':id', item.id))}
        >
          {isSquareImage ? (
            <AspectRatio
              ratio={1 / 1}
              // TODO: Chakraを削除したら<AspectRatio ratio={1 / 1}>に変更する
              className="[&_img]:h-full [&_img]:object-cover [&>div]:h-full"
            >
              <ImageFilter
                src={item.eyecatch?.url || noImageUrl}
                isHoverEffectEnabled={true}
              />
            </AspectRatio>
          ) : (
            <ImageFilter
              src={item.eyecatch?.url || noImageUrl}
              isHoverEffectEnabled={true}
            />
          )}
          <Box position="absolute" bottom="0" p={4} zIndex={10}>
            <HStack overflow="hidden">
              <Text
                className="text-accent-pink!"
                fontSize={{ base: '12px', lg: '16px' }}
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
            <Text
              overflow="hidden"
              color="text.white"
              fontSize={{ base: '10px', lg: '16px' }}
              mb={2}
              dangerouslySetInnerHTML={{
                __html: cleanHtml(item[`content${selectedLanguage}`]),
              }}
              sx={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 1,
                overflow: 'hidden',
                '& *': { display: 'inline' },
              }}
            />
            <LinkUnderBarButton url="#" text="もっと見る" />
          </Box>
        </Box>
      ))}
    </>
  );
};
