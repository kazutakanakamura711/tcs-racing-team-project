import { CenteredContainer, RainbowUnderlineLink } from '@/shared/ui';
import { NavigateFunction } from 'react-router-dom';

// MicroCMSから返されるニュースアイテムの型を定義
import { NewsItem } from '@/entities/news';
import { FirstContent } from './first-content';
import { SecondContent } from './second-content';
import { OtherContents } from './other-contents';
import { UPDATES } from '@/shared/constants';
import { FC } from 'react';

interface Props {
  updateFirstArray: NewsItem[];
  updateSecondArray: NewsItem[];
  updateThirdArray: NewsItem[];
  navigate: NavigateFunction;
  selectedLanguage: string;
}

export const TopUpdates: FC<Props> = ({
  updateFirstArray,
  updateSecondArray,
  updateThirdArray,
  navigate,
  selectedLanguage,
}) => {
  return (
    <CenteredContainer>
      <div className="mb-24">
        <div className="block md:flex md:justify-between md:gap-8">
          {/* PC: 左カラム / モバイル: 上から順に */}
          <div className="w-full flex flex-col gap-4 mb-4 md:mb-0 md:flex-1 md:min-w-0">
            {updateFirstArray.length !== 0 && (
              <FirstContent
                updateArray={updateFirstArray}
                navigate={navigate}
                selectedLanguage={selectedLanguage}
              />
            )}
            {updateSecondArray.length !== 0 && (
              <SecondContent
                updateArray={updateSecondArray}
                navigate={navigate}
                selectedLanguage={selectedLanguage}
              />
            )}
          </div>

          {/* PC: 右カラム / モバイル: 下に続く */}
          {updateThirdArray.length !== 0 && (
            <div className="w-full md:flex-1 md:min-w-0">
              <OtherContents
                updateArray={updateThirdArray}
                navigate={navigate}
                selectedLanguage={selectedLanguage}
              />
            </div>
          )}

          {updateFirstArray.length === 0 &&
            updateSecondArray.length === 0 &&
            updateThirdArray.length === 0 && (
              <p className="text-light">Coming soon..</p>
            )}
        </div>

        <div className="flex justify-end">
          <RainbowUnderlineLink link={UPDATES} text="More Updates" />
        </div>
      </div>
    </CenteredContainer>
  );
};
