import { MainLayout } from '@/shared/ui/main-layout';
import { partnersImages } from '@/shared/constants';
import { Box, Image, SimpleGrid } from '@chakra-ui/react';

export const OurPartners = () => {
  return (
    <MainLayout>
      <Box
        w="100%"
        bg="white"
        pt="85px"
        pb={{ base: '31px', lg: '64px' }}
        px={4}
        mb="95px"
      >
        {/* 一番上の画像（中央配置） */}
        <SimpleGrid
          columns={partnersImages.black.length}
          spacing={4}
          justifyItems="center"
          mb={{ base: '54px', lg: '84px' }}
        >
          {partnersImages.black.map((partnerImage, index) => (
            <Box
              key={index}
              maxW={partnerImage.commonLogoImageWidth}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src={partnerImage.imagePath}
                alt="OurPartners"
                w="100%"
                h="auto"
              />
            </Box>
          ))}
        </SimpleGrid>

        {/* 2段目（3つの画像） */}
        <SimpleGrid
          columns={partnersImages.platinum.length}
          spacing={4}
          justifyItems="center"
          mb={{ base: '54px', lg: '84px' }}
        >
          {partnersImages.platinum.map((partnerImage, index) => (
            <Box
              key={index}
              maxW={partnerImage.partnersPageLogoImageWidth}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src={partnerImage.imagePath}
                alt="OurPartners"
                w="100%"
                h="auto"
              />
            </Box>
          ))}
        </SimpleGrid>

        {/* 3段目（4つの画像） */}
        <SimpleGrid
          columns={partnersImages.gold.length}
          spacing={4}
          justifyItems="center"
          mb={{ base: '54px', lg: '84px' }}
        >
          {partnersImages.gold.map((partnerImage, index) => (
            <Box
              key={index}
              maxW={partnerImage.partnersPageLogoImageWidth}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src={partnerImage.imagePath}
                alt="OurPartners"
                w="100%"
                h="auto"
              />
            </Box>
          ))}
        </SimpleGrid>

        {/* 4段目（中央配置） */}
        <SimpleGrid
          columns={partnersImages.silver.length}
          spacing={4}
          justifyItems="center"
          mb={{ base: '54px', lg: '84px' }}
        >
          {partnersImages.silver.map((partnerImage, index) => (
            <Box
              key={index}
              maxW={partnerImage.commonLogoImageWidth}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src={partnerImage.imagePath}
                alt="OurPartners"
                w="100%"
                h="auto"
              />
            </Box>
          ))}
        </SimpleGrid>

        {/* 5段目（2つの画像） */}
        <SimpleGrid
          columns={partnersImages.bronze.length}
          spacing={4}
          justifyItems="center"
          mb={{ base: '54px', lg: '84px' }}
        >
          {partnersImages.bronze.map((partnerImage, index) => (
            <Box
              key={index}
              maxW={partnerImage.commonLogoImageWidth}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src={partnerImage.imagePath}
                alt="OurPartners"
                w="100%"
                h="auto"
              />
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </MainLayout>
  );
};
