import { OurPartners } from './ui/our-partners';
import { useOurPartners } from './model/use-our-partners';

export const OurPartnersContainer = () => {
  const { partnersData } = useOurPartners();

  return <OurPartners partnersData={partnersData} />;
};
