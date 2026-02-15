import { Box, Text, Image } from '@chakra-ui/react';
import { FC } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { MemberId } from '@/shared/constants';

interface Props {
  // TODO: 国旗の画像が追加されたらbackgroundUrlを必須にする
  backgroundUrl?: string;
  name: string;
  comment: string;
  imageUrl?: string;
  width?: string;
  link: string;
  id: MemberId;
  navigate: NavigateFunction;
}

export const MemberContent: FC<Props> = ({
  backgroundUrl,
  name,
  comment,
  imageUrl,
  width,
  link,
  id,
  navigate,
}) => {
  return (
    <Box
      role="group"
      w={{ base: '100%', lg: 'calc(50% - 34px)' }}
      minH="276px"
      p="99px 0"
      position="relative"
      background={`url(${backgroundUrl})`}
      backgroundSize="contain"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      borderBottom={{ base: 'solid 1px', lg: 'none' }}
      borderColor="#fff"
      cursor="pointer"
      onClick={() => {
        navigate(`${link}`);
      }}
    >
      <Box
        position="absolute"
        left="0"
        bottom="30px"
        zIndex="2"
        display="flex"
        flexDirection="column"
      >
        <Text
          color="#fff"
          mb="16px"
          fontWeight="bold"
          fontSize={{ base: '14px', lg: '24px' }}
        >
          {name}
        </Text>
        <Text
          color="#fff"
          fontSize={{ base: '10px', lg: '12px' }}
          whiteSpace="pre-line"
        >
          {comment}
        </Text>
      </Box>
      <Box
        position="absolute"
        bottom="0"
        right="0"
        // TODO: 後でidRinaZaki,AyakaHiyoshiの条件分岐を削除する
        w={{
          base:
            id === MemberId.RinaZaki || id === MemberId.AyakaHiyoshi
              ? '100%'
              : width || '100%',
          lg:
            id === MemberId.RinaZaki || id === MemberId.AyakaHiyoshi
              ? '70%'
              : width || '70%',
        }}
        maxW="316px"
        maxH="350px"
        overflow="hidden"
        aspectRatio="1097 / 880"
      >
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="メンバー画像"
            transition="transform 0.3s ease"
            h="100%"
            mx="auto"
            _groupHover={{ transform: 'scale(1.05)' }}
          />
        )}
      </Box>
      <Box
        position="absolute"
        bottom="20px"
        right="0"
        w="10px"
        h="36px"
        objectFit="cover"
        transition="right 0.3s ease"
        _groupHover={{ right: '-10px' }}
      >
        <Image
          display="block"
          w="100%"
          src="/images/common/ico-arrow-white-brock.svg"
          alt="矢印アイコン"
        />
      </Box>
    </Box>
  );
};
