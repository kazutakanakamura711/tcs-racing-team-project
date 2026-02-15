import { Box, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { NavigateFunction } from 'react-router-dom';

type Props = {
  post: string;
  name: string;
  comment: string;
  link: string;
  imagePath: string;
  navigate: NavigateFunction;
};

export const DirectorContent: FC<Props> = ({
  link,
  post,
  name,
  comment,
  imagePath,
  navigate,
}) => {
  return (
    <Box
      role="group"
      w="100%"
      background={`linear-gradient(rgba(26, 26, 26, 1), rgba(26, 26, 26, 0.8),rgba(0, 0, 0, 0.3)), url(/images/common/img-bg-lattice.webp)`}
      backgroundSize="80%"
      cursor="pointer"
      onClick={() => {
        navigate(`${link}`);
      }}
    >
      <Box
        position="relative"
        w={{ base: '71%', lg: '90%' }}
        m="0 auto"
        borderBottom="solid 1px"
        borderColor="#fff"
      >
        <Box w="86%" m="0 auto">
          <Box
            minH={{ base: '280px', lg: '457px' }}
            p="99px 0"
            position="relative"
          >
            <Box
              position="absolute"
              top="50%"
              left="0"
              transform="translateY(-50%)"
              zIndex="2"
            >
              <Text
                color="#fff"
                mb={{ base: '8px', lg: '14px' }}
                fontSize={{ base: '10px', lg: '16px' }}
              >
                {post}
              </Text>
              <Text
                color="#fff"
                mb={{ base: '8px', lg: '71px' }}
                fontWeight="bold"
                fontSize={{ base: '24px', lg: '52px' }}
              >
                {name}
              </Text>
              <Text
                color="#fff"
                fontSize={{ base: '10px', lg: '16px' }}
                w={{ base: '50%', lg: '50%' }}
                whiteSpace="pre-line"
              >
                {comment}
              </Text>
            </Box>
            <Box
              position="absolute"
              bottom="0"
              right={{ base: '-60px', lg: '0' }}
              w={{ base: '100%', lg: '50%' }}
              maxW={{ base: '380px', lg: 'auto' }}
              overflow="hidden"
            >
              {imagePath && (
                <Image
                  src={imagePath}
                  alt="メンバー画像"
                  transition="transform 0.3s ease"
                  _groupHover={{ transform: 'scale(1.05)' }}
                />
              )}
            </Box>
            <Box
              position="absolute"
              bottom="50px"
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
        </Box>
      </Box>
    </Box>
  );
};
