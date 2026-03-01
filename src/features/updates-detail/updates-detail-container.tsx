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
        {/* TODO: Chakraを削除したら!を外す */}
        <p className="text-light text-2xl font-bold mb-10.5! md:text-[56px] ">
          Related Updates
        </p>
        {id && (
          <RelatedUpdates
            updateArray={updateArray}
            selectedLanguage={selectedLanguage}
            navigate={navigate}
            isSquareImage={true}
          />
        )}
      </CenteredContainer>
    </>
  );
};
