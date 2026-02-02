import { MainLayout } from '@/shared/ui/main-layout';
import { Box } from '@chakra-ui/react';
import { FirstContent } from './first-content';
import { SecondContent } from './second-content';
import { OtherContents } from './other-contents';
import { LinkButton } from '@/shared/ui/link-button';
import { NavigateFunction } from 'react-router-dom';

// MicroCMSから返されるニュースアイテムの型を定義
export interface NewsItem {
  id: string;
  [key: `title${string}`]: string;
  [key: `content${string}`]: string;
  createdAt: string;
  publishedAt: string;
  revisedAt: string;
  updatedAt: string;
  category: {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
  };
  eyecatch: {
    url: string;
  };
}

interface Props {
  updateFirstArray: NewsItem[];
  updateSecondArray: NewsItem[];
  updateThirdArray: NewsItem[];
  navigate: NavigateFunction;
  selectedLanguage: string;
}

export const TopUpdates: React.FC<Props> = ({
  updateFirstArray,
  updateSecondArray,
  updateThirdArray,
  navigate,
  selectedLanguage,
}) => {
  return (
    <MainLayout>
      <Box pb="96px">
        <Box
          display={{ base: 'block', lg: 'flex' }}
          justifyContent="space-between"
          mb="79px"
        >
          {updateFirstArray.length !== 0 && (
            <Box w={{ base: '100%', lg: 'calc(50% - 16px)' }}>
              <FirstContent
                updateArray={updateFirstArray}
                navigate={navigate}
                selectedLanguage={selectedLanguage}
              />
              {updateSecondArray.length !== 0 && (
                <SecondContent
                  updateArray={updateSecondArray}
                  navigate={navigate}
                  selectedLanguage={selectedLanguage}
                />
              )}
            </Box>
          )}

          {updateThirdArray.length !== 0 && (
            <Box w={{ base: '100%', lg: 'calc(50% - 16px)' }}>
              <OtherContents
                updateArray={updateThirdArray}
                navigate={navigate}
                selectedLanguage={selectedLanguage}
              />
            </Box>
          )}

          {updateFirstArray.length === 0 &&
            updateSecondArray.length === 0 &&
            updateThirdArray.length === 0 && (
              <Box color="#FFF">Coming soon..</Box>
            )}
        </Box>

        <LinkButton link="/update-list" text="More Updates" />
      </Box>
    </MainLayout>
  );
};
