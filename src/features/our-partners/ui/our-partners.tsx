import { Title } from '@/shared/ui/title';
import { MainLayout } from '@/shared/ui/main-layout';
import { PageLayout } from '@/shared/ui/page-layout';
import { Box, Divider, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { OurPartnersList } from './our-partners-list';
import { OfficialMedia } from '../../top/OfficialMedia';
import { Partner, PartnerCategory } from '@/constants';
import { FC } from 'react';

type PartnersImages = Record<PartnerCategory, Partner[]>;

type Props = {
  blackPartner: Partner;
  partnersImages: PartnersImages;
};

export const OurPartners: FC<Props> = ({ blackPartner, partnersImages }) => {
  return (
    <PageLayout>
      <Box pt="110px" bg="#1a1a1a">
        <Title title="Our Partners" subTitle="Our Partners" id="Partners" />
        <MainLayout>
          {/* Black Partner */}
          <Box mt="72px" mb="47px">
            <Text color="#fff" fontSize="36px" fontWeight="bold" mb="21px">
              Black
            </Text>
            <Link
              to={blackPartner.link}
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
              >
                <Box w="100%" objectFit="cover">
                  <Image
                    className="image"
                    src={blackPartner.imagePath}
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
                    <Image
                      src="images/common/ico-arrow-brock.svg"
                      alt="arrow"
                    />
                  </Box>
                </Box>
              </Box>
            </Link>
          </Box>

          {/* Other Partners */}
          <OurPartnersList
            title="Platinum"
            imagePath={partnersImages.platinum}
          />
          <OurPartnersList title="Gold" imagePath={partnersImages.gold} />
          <OurPartnersList title="Silver" imagePath={partnersImages.silver} />
          <OurPartnersList title="Bronze" imagePath={partnersImages.bronze} />
          <OurPartnersList
            title="Supporter"
            imagePath={partnersImages.supporters}
          />
          <Divider orientation="horizontal" mx="auto" w="100%" mb="40px" />
          <OurPartnersList
            title="Suppliers"
            imagePath={partnersImages.suppliers}
          />
        </MainLayout>
        <Box mt="121px">
          <OfficialMedia />
        </Box>
      </Box>
    </PageLayout>
  );
};
