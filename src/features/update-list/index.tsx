import { Title } from '@/shared/ui/title';
import { PageLayout } from '@/shared/ui/page-layout';
import { OurPartners } from '../top/OurPartners';
import { OfficialMedia } from '../top/OfficialMedia';
import { Box } from '@chakra-ui/react';
import { UpdateListPagiNation } from './UpdateListPagiNation/UpdateListPagiNation';

export const UpdateListContent = () => {
  return (
    <PageLayout>
      <Box pt="128px" mb="128px">
        <Title title="Updates" subTitle="Updates" />
      </Box>
      <UpdateListPagiNation />
      <Title title="Our Partners" subTitle="Our Partners" />
      <OurPartners />
      <OfficialMedia />
    </PageLayout>
  );
};
