import { Title } from '@/shared/ui/title';
import { Schedule, ScheduleHeroImage } from './ui';
import { CenteredContainer } from '@/shared/ui';
import { useScheduleContainer } from './model/hooks/use-schedule-container';

export const ScheduleContainer = () => {
  const {
    selectedLanguage,
    raceScheduleList,
    eventScheduleList,
    heroImageSrc,
  } = useScheduleContainer();

  if (!raceScheduleList || !eventScheduleList)
    return <p className="text-light">データがありません。</p>;

  return (
    <>
      <ScheduleHeroImage heroImageSrc={heroImageSrc} />
      <CenteredContainer>
        <Title as="h1" title="Schedule" subTitle="Schedule" />
      </CenteredContainer>
      <Schedule
        raceScheduleList={raceScheduleList}
        eventScheduleList={eventScheduleList}
        selectedLanguage={selectedLanguage}
      />
      <CenteredContainer>
        <div className="mb-36 md:mb-48">
          {/* WinCounterコンポーネントを使う場合は、ここに配置 */}
        </div>
      </CenteredContainer>
    </>
  );
};
