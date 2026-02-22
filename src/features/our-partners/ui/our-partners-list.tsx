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
        role="group"
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="#fff"
        minH="152px"
        rounded="10px"
      >
        <Box
          w={image.partnersPageLogoImageWidth}
          maxW={{ base: '132px', lg: '224px' }}
          objectFit="contain"
        >
          {image.imagePath !== '' && (
            <Image
              src={image.imagePath}
              alt=""
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
          <Text color="#333333" fontSize="16px" fontWeight="bold">
            Read more
          </Text>
          <Box
            display="flex"
            alignItems="center"
            transition="transform 0.3s ease-in-out"
            _groupHover={{ transform: 'translateX(5px)' }}
          >
            <Image src="images/common/ico-arrow-brock.svg" alt="" />
          </Box>
        </Box>
      </Box>
    </Link>
  ));
  return (
    <Box mb="47px">
      <Text color="text.white" fontSize="36px" fontWeight="bold" mb="21px">
        {title}
      </Text>
      <Grid
        templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
        gap={1.5}
      >
        {imageContent}
      </Grid>
    </Box>
  );
};
