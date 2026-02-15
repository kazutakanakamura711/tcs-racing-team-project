import { Box, Image, Text, Grid } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Partner } from '@/shared/constants';

interface Props {
  partners: Partner[];
}

export const OurPartnersBlackList: FC<Props> = ({ partners }) => {
  const imageContent = partners.map((partner, index) => (
    <Link
      to={partner.link}
      key={index}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Box
        role="group"
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="#fff"
        minH="240px"
        rounded="10px"
      >
        <Box
          w={partner.partnersPageLogoImageWidth}
          maxW={{ base: '192px', lg: '192px' }}
          objectFit="contain"
        >
          {partner.imagePath !== '' && (
            <Image
              src={partner.imagePath}
              alt="black"
              transition="transform 0.3s ease-in-out"
              _groupHover={{ transform: 'scale(1.05)' }}
            />
          )}
        </Box>
        <Box
          position="absolute"
          bottom="14px"
          left="21px"
          display="flex"
          alignItems="center"
          gap={2}
        >
          <Text color="#000" fontSize="16px" fontWeight="bold">
            Read more
          </Text>
          <Box
            display="flex"
            alignItems="center"
            transition="transform 0.3s ease-in-out"
            _groupHover={{ transform: 'translateX(5px)' }}
          >
            <Image src="images/common/ico-arrow-brock.svg" alt="arrow" />
          </Box>
        </Box>
      </Box>
    </Link>
  ));
  return (
    <Box mt="72px" mb="47px">
      <Text color="#fff" fontSize="36px" fontWeight="bold" mb="21px">
        Black
      </Text>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
        gap={1.5}
      >
        {imageContent}
      </Grid>
    </Box>
  );
};
