import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useGetWindowWidth } from '@/shared/hooks/use-get-window-width';
import {
  getTopTheStaffList,
  getDirector,
  getRiders,
  Member,
  topSliderImages,
} from '@/constants';
import { useGetSchedule } from '@/shared/hooks/use-get-schedule';
import { useLanguage } from '@/shared/hooks/use-language';
import { useGetNews } from '@/shared/hooks/use-get-news';
import { NewsItem } from '@/entities/news';

export const useTopContainer = () => {
  const { t } = useTranslation('topMessage');
  const { t: tTopTheTeam } = useTranslation('topTheTeam');
  const message = {
    title: 'Asia Union TCS Racing Team',
    text: t('teamDescription'),
  };

  const { isTablet } = useGetWindowWidth();
  const navigate = useNavigate();
  const staffList = getTopTheStaffList();
  const [selectedLanguage] = useLanguage();
  const { raceScheduleList, eventScheduleList } = useGetSchedule({ limit: 6 });
  const { news } = useGetNews({ limit: 8 });

  // 0番目は大きく表示、1,2番目は小さく表示、3~6番目はテキストのみ表示、それぞれを配列に格納
  const categorizedArrays = news.reduce<{
    first: NewsItem[];
    second: NewsItem[];
    third: NewsItem[];
  }>(
    (acc, item, index) => {
      if (index === 0) {
        acc.first.push(item);
        return acc;
      }
      if (index === 1 || index === 2) {
        acc.second.push(item);
        return acc;
      }
      if (index >= 3 && index <= 7) {
        acc.third.push(item);
        return acc;
      }
      return acc;
    },
    { first: [], second: [], third: [] },
  );

  const {
    first: updateFirstArray,
    second: updateSecondArray,
    third: updateThirdArray,
  } = categorizedArrays;

  // memberType で director と riders を取得
  const director = getDirector();
  const riders = getRiders();

  // riders を2人ずつのペアに分割
  const riderPairs: [Member, Member | undefined][] = [];
  for (let i = 0; i < riders.length; i += 2) {
    riderPairs.push([riders[i], riders[i + 1]]);
  }

  return {
    tTopTheTeam,
    message,
    isTablet,
    navigate,
    staffList,
    raceScheduleList,
    eventScheduleList,
    selectedLanguage,
    updateFirstArray,
    updateSecondArray,
    updateThirdArray,
    director,
    riderPairs,
    topSliderImages,
  };
};
