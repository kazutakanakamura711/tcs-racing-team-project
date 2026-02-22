import { HStack, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface Props {
  text: string;
  url: string;
  isCenter?: boolean;
}

export const LinkUnderBarButton = ({ text, url, isCenter }: Props) => {
  return (
    <HStack justifyContent={isCenter ? 'center' : 'left'}>
      <Link to={url} style={{ color: 'text.white', display: 'inline-block' }}>
        <HStack borderBottom="solid 1px #FF9080">
          <Text color="text.white" fontSize={{ base: '10px', lg: '12px' }}>
            {text}
          </Text>
          <Image
            w="5px"
            h="10px"
            src="/images/common/ico-arrow-white-brock.svg"
            alt=""
          />
        </HStack>
      </Link>
    </HStack>
  );
};
