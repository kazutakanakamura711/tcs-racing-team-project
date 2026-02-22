import { Box, Image, SimpleGrid } from '@chakra-ui/react';
import { FC } from 'react';
import { Partner, PartnerCategory } from '@/shared/constants/partners-images';

interface Props {
  partnersData: Record<PartnerCategory, Partner[]>;
}

export const OurPartners: FC<Props> = ({ partnersData }) => {
  return (
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
        columns={partnersData.black.length}
        spacing={4}
        justifyItems="center"
        mb={{ base: '54px', lg: '84px' }}
      >
        {partnersData.black.map((partnerImage, index) => (
          <Box
            key={index}
            maxW={partnerImage.commonLogoImageWidth}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image src={partnerImage.imagePath} alt="" w="100%" h="auto" />
          </Box>
        ))}
      </SimpleGrid>

      {/* 2段目（3つの画像） */}
      <SimpleGrid
        columns={partnersData.platinum.length}
        spacing={4}
        justifyItems="center"
        mb={{ base: '54px', lg: '84px' }}
      >
        {partnersData.platinum.map((partnerImage, index) => (
          <Box
            key={index}
            maxW={partnerImage.partnersPageLogoImageWidth}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image src={partnerImage.imagePath} alt="" w="100%" h="auto" />
          </Box>
        ))}
      </SimpleGrid>

      {/* 3段目（4つの画像） */}
      <SimpleGrid
        columns={partnersData.gold.length}
        spacing={4}
        justifyItems="center"
        mb={{ base: '54px', lg: '84px' }}
      >
        {partnersData.gold.map((partnerImage, index) => (
          <Box
            key={index}
            maxW={partnerImage.partnersPageLogoImageWidth}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image src={partnerImage.imagePath} alt="" w="100%" h="auto" />
          </Box>
        ))}
      </SimpleGrid>

      {/* 4段目（中央配置） */}
      <SimpleGrid
        columns={partnersData.silver.length}
        spacing={4}
        justifyItems="center"
        mb={{ base: '54px', lg: '84px' }}
      >
        {partnersData.silver.map((partnerImage, index) => (
          <Box
            key={index}
            maxW={partnerImage.commonLogoImageWidth}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image src={partnerImage.imagePath} alt="" w="100%" h="auto" />
          </Box>
        ))}
      </SimpleGrid>

      {/* 5段目（2つの画像） */}
      <SimpleGrid
        columns={partnersData.bronze.length}
        spacing={4}
        justifyItems="center"
        mb={{ base: '54px', lg: '84px' }}
      >
        {partnersData.bronze.map((partnerImage, index) => (
          <Box
            key={index}
            maxW={partnerImage.commonLogoImageWidth}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image src={partnerImage.imagePath} alt="" w="100%" h="auto" />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};
