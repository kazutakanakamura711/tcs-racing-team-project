import { OurPartnersBlackList, OurPartnersList } from './ui';
import { partnersImages } from '@/shared/constants';
import { Title, CenteredContainer } from '@/shared/ui';
import { Box, Divider } from '@chakra-ui/react';

export const OurPartnersContainer = () => {
  return (
    <Box pt="110px" bg="#1a1a1a">
      <CenteredContainer>
        <Title
          as="h1"
          title="Our Partners"
          subTitle="Our Partners"
          id="Partners"
        />
      </CenteredContainer>
      <CenteredContainer>
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
        <Divider
          orientation="horizontal"
          mx="auto"
          w="100%"
          mb="40px"
          borderColor="white"
        />
        <OurPartnersList
          title="Suppliers"
          imagePath={partnersImages.suppliers}
        />
      </CenteredContainer>
    </Box>
  );
};
