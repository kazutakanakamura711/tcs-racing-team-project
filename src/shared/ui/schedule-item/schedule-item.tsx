import { Box, Flex, Text, Image } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  url?: string;
  title: string;
  startDate: string;
  endDate?: string;
  location: string;
}

export const ScheduleItem = ({
  url,
  title,
  startDate,
  endDate,
  location,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Box position="relative" w={{ base: '100%', lg: '100%' }} h="80px">
        <Link to={url || ''}>
          <Box
            position="absolute"
            w="100%"
            h="100%"
            bg="#808080"
            left="-6px"
            bottom="-6px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            cursor="pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            zIndex="1"
          >
            <Box
              w="58px"
              h="58px"
              objectFit="cover"
              position="absolute"
              transform="translateY(-50%)"
              top="55%"
              left="-18px"
            >
              <Image
                w="100%"
                display="block"
                src="/images/schedule/ico-hexagon-black.svg"
              />
            </Box>
            <Flex
              pl={{ base: '42px', lg: '50px' }}
              alignItems="center"
              w={{ base: 'calc( 100% - 48px)', lg: 'calc( 100% - 62px)' }}
            >
              <Box
                w="50px"
                textAlign="center"
                mr={{ base: '12px', lg: '18px' }}
                flex={{ base: '0 0 40px', lg: '0 0 64px' }}
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
              >
                <Text fontSize={{ base: '10px', sm: '11px', lg: '12px' }}>
                  {startDate}
                </Text>
                <Box
                  display="inline-block"
                  transform="rotate(90deg)"
                  fontSize="12px"
                >
                  {endDate ? '〜' : ''}
                </Box>
                <Text fontSize={{ base: '10px', sm: '11px', lg: '12px' }}>
                  {endDate || ''}
                </Text>
              </Box>
              <Box
                w={{ base: 'calc(100% - 48px)', lg: 'calc(100% - 80px)' }}
                overflow="hidden"
              >
                <Text isTruncated fontSize={{ base: '12px', lg: '16px' }}>
                  {title}
                </Text>
                <Flex alignItems="center">
                  <Box mr="6px">
                    <Image src="/images/schedule/ico-pin-green.svg" />
                  </Box>
                  <Text fontSize={{ base: '10px', lg: '12px' }}>
                    {location || ''}
                  </Text>
                </Flex>
              </Box>
            </Flex>
            <Box
              w="50px"
              ml="8px"
              transform={isHovered ? 'translateX(6px)' : 'translateX(0px)'}
              transition="transform 0.3s ease-in-out"
              flex={{ base: '0 0 40px', lg: '0 0 50px' }}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                w="11px"
                h="25px"
                src="/images/common/ico-arrow-white-brock.svg"
              />
            </Box>
          </Box>
          <Box
            w="100%"
            h="100%"
            bg="#707070"
            transform={
              isHovered
                ? 'translateX(6px) translateY(-6px)'
                : 'translateX(0px) translateY(0px)'
            }
            transition="transform 0.3s ease-in-out"
          />
        </Link>
      </Box>
    </>
  );
};
