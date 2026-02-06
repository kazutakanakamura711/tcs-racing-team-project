import { Text } from '@chakra-ui/react';
import { MainLayout } from '@/shared/ui/main-layout';
import { useUpdateContentContainer } from './model/hooks/use-update-content-container';
import {
  UpdateContentNews,
  RelatedUpdates,
  UpdateContentHeroImage,
} from './ui';

export const UpdateContentContainer = () => {
  const {
    id,
    navigate,
    singleNews,
    selectedLanguage,
    updateArray,
    heroImageSrc,
  } = useUpdateContentContainer();

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
