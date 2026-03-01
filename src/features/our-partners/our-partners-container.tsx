import { OurPartnersBlackList, OurPartnersList } from './ui';
import { partnersImages } from '@/shared/constants';
import { Title, CenteredContainer } from '@/shared/ui';

export const OurPartnersContainer = () => {
  return (
    <div className="pt-27.5 bg-[#1a1a1a]">
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
        <hr className="w-full mb-10! border! border-white! opacity-40" />
        <OurPartnersList
          title="Suppliers"
          imagePath={partnersImages.suppliers}
        />
      </CenteredContainer>
    </div>
  );
};
