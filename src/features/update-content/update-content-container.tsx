import { Text, useBreakpointValue } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import { MainLayout } from '@/shared/ui/main-layout';
import { useLanguage } from '@/state/languageState/useLanguage';
import { useSingleNewsContent } from './model/hooks/use-single-news-content';
import { useUpDateContents } from './model/hooks/use-contact';
import {
  UpdateContentNews,
  RelatedUpdates,
  UpdateContentHeroImage,
} from './ui';

export const UpdateContentContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { singleNews } = useSingleNewsContent(id || '');
  const [selectedLanguage] = useLanguage();
  const updateArray = useUpDateContents(id || '');

  const heroImageSrc = useBreakpointValue({
    base: '/images/updateContent/img-updateContent-top.jpeg',
    lg: '/images/updateContent/img-updateContent-top.jpeg',
  });

  return (
    <>
      <UpdateContentHeroImage heroImageSrc={heroImageSrc} />
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
    </>
  );
};
