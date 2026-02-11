import { CenteredContainer, LinkButton } from '@/shared/ui';
import { NavigateFunction } from 'react-router-dom';

// MicroCMSから返されるニュースアイテムの型を定義
import { NewsItem } from '@/entities/news';
import { Box } from '@chakra-ui/react';
import { FirstContent } from './first-content';
import { SecondContent } from './second-content';
import { OtherContents } from './other-contents';
import { UPDATES } from '@/shared/constants';

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
    <CenteredContainer>
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

        <LinkButton link={UPDATES} text="More Updates" />
      </Box>
    </CenteredContainer>
  );
};
