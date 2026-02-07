import { OurPartnersBlackList, OurPartnersList } from './ui';
import { partnersImages } from '@/shared/constants';
import { Title, MainLayout } from '@/shared/ui';
import { Box, Divider } from '@chakra-ui/react';

export const OurPartnersContainer = () => {
  return (
    <Box pt="110px" bg="#1a1a1a">
      <Title title="Our Partners" subTitle="Our Partners" id="Partners" />
      <MainLayout>
        {/* Black Partner */}
        <OurPartnersBlackList partners={partnersImages.black} />
        {/* Other Partners */}
        <OurPartnersList title="Platinum" imagePath={partnersImages.platinum} />
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
    </Box>
  );
};
