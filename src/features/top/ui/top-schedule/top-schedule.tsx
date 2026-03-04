import { FC } from 'react';
import {
  CenteredContainer,
  ScheduleItem,
  RainbowUnderlineLink,
} from '@/shared/ui';
import { ScheduleTitle } from '.';
import { ScheduleItem as ScheduleItemType } from '@/entities/schedule';

interface Props {
  raceScheduleList: ScheduleItemType[];
  eventScheduleList: ScheduleItemType[];
  selectedLanguage: string;
}

export const TopSchedule: FC<Props> = ({
  raceScheduleList,
  eventScheduleList,
  selectedLanguage,
}) => {
  if (!raceScheduleList || !eventScheduleList)
    return <p className="text-white">データがありません。</p>;

  return (
    <div className="mb-30">
      <CenteredContainer>
        <div className="block md:flex gap-16 mb-17.5">
          <div className="flex-1 mb-20 md:mb-0">
            <ScheduleTitle text="Race" />
            <div className="grid gap-6">
              {raceScheduleList.length === 0 && (
                <p className="text-white">Coming soon..</p>
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
                <p className="text-white">Coming soon..</p>
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
        <div className="flex justify-end">
          <RainbowUnderlineLink link="/schedule-page" text="Overview" />
        </div>
      </CenteredContainer>
    </div>
  );
};
