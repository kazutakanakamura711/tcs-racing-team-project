import { Box, Text, Image, Grid } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  imagePath: {
    imagePath: string;
    partnersPageLogoImageWidth: string;
    link: string;
  }[];
}

export const OurPartnersList: FC<Props> = ({ title, imagePath }) => {
  const imageContent = imagePath.map((image, index) => (
    <Link to={image.link} key={index} target="_blank" rel="noopener noreferrer">
      <Box
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="#fff"
        minH="153px"
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
      >
        <Box
          w={image.partnersPageLogoImageWidth}
          maxW={{ base: '132px', lg: '224px' }}
          objectFit="contain"
        >
          {image.imagePath !== '' && (
            <Image
              className="image"
              src={image.imagePath}
              alt="black"
              transition="transform 0.3s ease-in-out"
            />
          )}
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
  ));
  return (
    <Box mb="47px">
      <Text color="#fff" fontSize="36px" fontWeight="bold" mb="21px">
        {title}
      </Text>
      <Grid
        templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
        gap="6px"
      >
        {imageContent}
      </Grid>
    </Box>
  );
};
