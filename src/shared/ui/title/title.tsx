import { Box } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  title: string;
  subTitle: string;
  isCenter?: boolean;
  isHiddenUnderLine?: boolean;
  // idはhtmlのid属性
  id?: string;
};

export const Title: FC<Props> = ({
  title,
  subTitle,
  isCenter = false,
  isHiddenUnderLine = false,
  id,
}) => {
  return (
    <Box
      position="relative"
      minH={{ base: '56px', lg: '160px' }}
      mb={{ base: '48px', lg: '56px' }}
      id={id}
    >
      <Box
        position="absolute"
        top="50%"
        left={isCenter ? '50%' : '0'}
        transform={isCenter ? 'translate(-50%, -50%)' : 'translateY(-50%)'}
        color="#1A1A1A"
        fontSize={{ base: '36px', lg: '108px' }}
        textShadow="1px 1px 0 #707070, -1px -1px 0 #707070, -1px 1px 0 #707070, 1px -1px 0 #C0C0C0, 0px 1px 0 #C0C0C0, 0 -1px 0 #C0C0C0, -1px 0 0 #C0C0C0, 1px 0 0 #C0C0C0"
        zIndex="0"
      >
        {subTitle}
      </Box>
      <Box
        position="absolute"
        bottom="0"
        left={isCenter ? '50%' : '0'}
        transform={isCenter ? 'translateX(-50%)' : ''}
        color="#fff"
        fontSize={{ base: '24px', lg: '56px' }}
        fontWeight="bold"
        zIndex="1"
      >
        {title}
      </Box>
      <Box
        display={isHiddenUnderLine ? 'none' : 'block'}
        position="absolute"
        bottom="0"
        left={isCenter ? '50%' : '0'}
        transform={isCenter ? 'translateX(-50%)' : ''}
        w="10%"
        maxW="87px"
        height="3px"
        bg={'url(images/common/img-text-bg-rainbow.webp)'}
        bgSize="cover"
        bgRepeat="no-repeat"
      />
    </Box>
  );
};
