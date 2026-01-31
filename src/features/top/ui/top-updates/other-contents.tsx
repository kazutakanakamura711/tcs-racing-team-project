import { Box, HStack, Text } from '@chakra-ui/react';
import { NewsItem } from './top-updates';
import { FC } from 'react';
import { formatDate } from '@/shared/utils/dateFormat/dateFormat';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/state/languageState/useLanguage';

interface Props {
  updateArray: NewsItem[];
}

export const OtherContents: FC<Props> = ({ updateArray }) => {
  const navigate = useNavigate();
  const [selectedLanguage] = useLanguage();

  if (!updateArray) return <Box>データがありません。</Box>;
  return (
    <>
      {updateArray.map(item => (
        <Box
          key={item.id}
          borderBottom="solid 1px"
          borderColor="#fff"
          mb="16px"
          cursor="pointer"
          onClick={() => navigate(`/update-content/${item.id}`)}
        >
          <HStack mb={{ base: '8px', lg: '8px' }}>
            <Text color="#FF9080">News |</Text>
            <Text color="#fff">{formatDate(item.publishedAt)}</Text>
          </HStack>
          <Text
            color="#fff"
            fontSize={{ base: '14px', lg: '16px' }}
            mb={{ base: '8px', lg: '8px' }}
          >
            {item[`title${selectedLanguage}`]}
          </Text>
          <Box
            maxH="200px"
            overflow="hidden"
            color="#fff"
            fontSize={{ base: '10px', lg: '16px' }}
            mb={{ base: '8px', lg: '16px' }}
          >
            <Box
              as="span"
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
              }}
            />
          </Box>
        </Box>
      ))}
    </>
  );
};
