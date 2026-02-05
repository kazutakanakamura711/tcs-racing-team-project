import { Box, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Partner } from '@/constants';

interface Props {
  partners: Partner[];
}

export const OurPartnersBlackList: FC<Props> = ({ partners }) => {
  return (
    <Box mt="72px" mb="47px">
      <Text color="#fff" fontSize="36px" fontWeight="bold" mb="21px">
        Black
      </Text>
      {partners.map((partner, index) => (
        <Link
          key={index}
          to={partner.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box
            position="relative"
            w={{ base: '100%', lg: '50%' }}
            maxW={{ base: '341px', lg: 'auto' }}
            bg="#fff"
            py="90px"
            px={{ base: '16px', lg: '88px' }}
            rounded="10px"
            _hover={{
              '.arrow': {
                transform: 'translateX(5px)',
                transition: 'transform 0.3s ease-in-out',
              },
              '.image': {
                transform: 'scale(1.05)',
                transition: 'transform 0.3s ease-in-out',
              },
            }}
            mb="24px"
          >
            <Box w="100%" objectFit="cover">
              <Image
                className="image"
                src={partner.imagePath}
                alt="black"
                transition="transform 0.3s ease-in-out"
              />
            </Box>
            <Box
              position="absolute"
              bottom="14px"
              left="21px"
              display="flex"
              alignItems="center"
            >
              <Text color="#000" fontSize="16px" fontWeight="bold">
                Read more
              </Text>

              <Box
                className="arrow"
                display="flex"
                alignItems="center"
                ml="8px"
                transition="transform 0.3s ease-in-out"
              >
                <Image src="images/common/ico-arrow-brock.svg" alt="arrow" />
              </Box>
            </Box>
          </Box>
        </Link>
      ))}
    </Box>
  );
};
