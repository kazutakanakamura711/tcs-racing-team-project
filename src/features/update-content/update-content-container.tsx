import { Title } from '@/shared/ui/title';
import { PageLayout } from '@/shared/ui/page-layout';
import { Box, Image, Text } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import { TopOurPartners } from '../top/ui/top-our-partners';
import { TopOfficialMedia } from '../top/ui/top-official-media/top-official-media';
import { MainLayout } from '@/shared/ui/main-layout';
import { useLanguage } from '@/state/languageState/useLanguage';
import { useSingleNewsContent } from './model/hooks/use-single-news-content';
import { useUpDateContents } from './model/hooks/use-contact';
import { UpdateContentNews, RelatedUpdates } from './ui';

export const UpdateContentContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { singleNews } = useSingleNewsContent(id || '');
  const [selectedLanguage] = useLanguage();
  const updateArray = useUpDateContents(id || '');

  return (
    <PageLayout>
      <Box
        mt={{ base: '110px', lg: '50px' }}
        w="100vw"
        objectFit="contain"
        position="relative"
      >
        <Image
          w="100%"
          display="block"
          src="/images/updateContent/img-updateContent-top.jpeg"
          alt="UpdateContent"
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="#000"
          opacity={0.5}
          zIndex="1"
        />
      </Box>

      <UpdateContentNews
        singleNews={singleNews}
        selectedLanguage={selectedLanguage}
      />

      <MainLayout>
        <Text
          color="#fff"
          fontSize={{ base: '24px', lg: '56px' }}
          fontWeight="bold"
          mb="42px"
        >
          Related Updates
        </Text>
        {id && (
          <RelatedUpdates
            updateArray={updateArray}
            selectedLanguage={selectedLanguage}
            navigate={navigate}
          />
        )}
      </MainLayout>

      <Title title="Our Partners" subTitle="Our Partners" id="Partners" />
      <TopOurPartners />
      <TopOfficialMedia />
    </PageLayout>
  );
};
