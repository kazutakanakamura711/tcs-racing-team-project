import { ScheduleItem } from '@/entities/schedule';
import { useEffect, useState } from 'react';

interface Props {
  limit: number;
}

export const useGetSchedule = ({ limit }: Props) => {
  const [raceSchedule, setRaceSchedule] = useState<ScheduleItem[]>([]);
  const [eventSchedule, setEventSchedule] = useState<ScheduleItem[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const apiUrl = `${import.meta.env.VITE_API_URL}schedule`;
      const raceCategoryFilter = encodeURIComponent(
        `category[equals]${import.meta.env.VITE_RACE_SCHEDULE_CONTENTS_ID}`,
      );
      const eventCategoryFilter = encodeURIComponent(
        `category[equals]${import.meta.env.VITE_EVENT_SCHEDULE_CONTENTS_ID}`,
      );
      const urlWithRaceFilter = `${apiUrl}?filters=${raceCategoryFilter}&limit=${limit}&orders=-updatedAt`;
      const urlWithEventFilter = `${apiUrl}?filters=${eventCategoryFilter}&limit=${limit}&orders=-updatedAt`;

      try {
        const responseRaceFilter = await fetch(urlWithRaceFilter, {
          headers: {
            'X-API-KEY': import.meta.env.VITE_API_KEY,
          },
        });
        if (!responseRaceFilter.ok) {
          throw new Error(
            `Race schedule fetch failed: ${responseRaceFilter.statusText}`,
          );
        }
        const raceData = await responseRaceFilter.json();
        setRaceSchedule(raceData.contents);

        const responseEventFilter = await fetch(urlWithEventFilter, {
          headers: {
            'X-API-KEY': import.meta.env.VITE_API_KEY,
          },
        });
        if (!responseEventFilter.ok) {
          throw new Error(
            `Event schedule fetch failed: ${responseEventFilter.statusText}`,
          );
        }
        const eventData = await responseEventFilter.json();
        setEventSchedule(eventData.contents);
      } catch (error) {
        console.error('スケジュールの取得に失敗しました', error);
      }
    };

    fetchNews();
  }, [limit]);

  return {
    raceScheduleList: raceSchedule,
    eventScheduleList: eventSchedule,
  };
};
