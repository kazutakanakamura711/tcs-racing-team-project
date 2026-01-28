import { OurPartners } from './ui';
import { partnersImages } from '@/constants/partnersImages';

export const OurPartnersContainer = () => {
  const blackPartner = partnersImages.black[0];

  return (
    <OurPartners blackPartner={blackPartner} partnersImages={partnersImages} />
  );
};
