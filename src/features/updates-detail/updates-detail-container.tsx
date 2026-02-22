import { Text } from '@chakra-ui/react';
import { CenteredContainer } from '@/shared/ui';
import { useUpdatesDetailContainer } from './model/hooks/use-updates-detail-container';
import {
  UpdatesDetailNews,
  RelatedUpdates,
  UpdatesDetailHeroImage,
} from './ui';

export const UpdatesDetailContainer = () => {
  const {
    id,
    navigate,
    singleNews,
    selectedLanguage,
    updateArray,
    heroImageSrc,
  } = useUpdatesDetailContainer();

  return (
    <>
      <UpdatesDetailHeroImage heroImageSrc={heroImageSrc} />
      <UpdatesDetailNews
        singleNews={singleNews}
        selectedLanguage={selectedLanguage}
      />
      <CenteredContainer>
        <Text
          color="text.white"
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
      </CenteredContainer>
    </>
  );
};
