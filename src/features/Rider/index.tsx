import { Title } from '@/shared/ui/title';
import { MainLayout } from '@/shared/ui/main-layout';
import { PageLayout } from '@/shared/ui/page-layout';
import { OurPartners } from '../top/OurPartners';
import { OfficialMedia } from '../top/OfficialMedia';
import { MemberSlider } from './Slider';
import { FirstView } from './FirstView';
import { ProfileContent } from './ProfileContent';
import { About } from './About';
import { useParams } from 'react-router-dom';
import { parseMemberId } from '@/constants';

export const RiderComponent = () => {
  const { id } = useParams();
  if (!id) return;
  const parsedId = parseMemberId(id);
  if (!parsedId) return;
  return (
    <PageLayout>
      <FirstView id={parsedId} />
      <MainLayout>
        <ProfileContent id={parsedId} />
      </MainLayout>
      <About id={parsedId} />
      <MainLayout>
        <MemberSlider />
      </MainLayout>
      <Title title="Our Partners" subTitle="Our Partners" />
      <OurPartners />
      <OfficialMedia />
    </PageLayout>
  );
};
