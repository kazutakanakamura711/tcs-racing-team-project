import { CenteredContainer, ScheduleItem } from '@/shared/ui';
import { ScheduleTitle } from './schedule-title';
import { ScheduleItem as ScheduleItemType } from '@/entities/schedule';

interface Props {
  raceScheduleList: ScheduleItemType[];
  eventScheduleList: ScheduleItemType[];
  selectedLanguage: string;
}

export const Schedule: React.FC<Props> = ({
  raceScheduleList,
  eventScheduleList,
  selectedLanguage,
}) => {
  return (
    <div className="mb-29">
      <CenteredContainer>
        <div className="block md:flex gap-16 mb-17.5">
          <div className="flex-1 mb-20 md:mb-0">
            <ScheduleTitle text="Race" />
            <div className="grid gap-6">
              {raceScheduleList.length === 0 && (
                <div className="text-white">Coming soon..</div>
              )}
              {raceScheduleList.map(item => (
                <ScheduleItem
                  key={item.id}
                  url={item.url}
                  title={item[`title${selectedLanguage}`]}
                  startDate={item[`startDate${selectedLanguage}`]}
                  endDate={item[`endDate${selectedLanguage}`]}
                  location={item[`location${selectedLanguage}`]}
                />
              ))}
            </div>
          </div>
          <div className="flex-1">
            <ScheduleTitle text="Events" />
            <div className="grid gap-6">
              {eventScheduleList.length === 0 && (
                <div className="text-white">Coming soon..</div>
              )}
              {eventScheduleList.map(item => (
                <ScheduleItem
                  key={item.id}
                  url={item.url}
                  title={item[`title${selectedLanguage}`]}
                  startDate={item[`startDate${selectedLanguage}`]}
                  endDate={item[`endDate${selectedLanguage}`]}
                  location={item[`location${selectedLanguage}`]}
                />
              ))}
            </div>
          </div>
        </div>
      </CenteredContainer>
    </div>
  );
};
