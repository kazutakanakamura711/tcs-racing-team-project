import { ScheduleItem } from '@/features/top/Schedule/Schedule';
import axios from 'axios';
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
        const responseRaceFilter = await axios.get(urlWithRaceFilter, {
          headers: {
            'X-API-KEY': import.meta.env.VITE_API_KEY,
          },
        });
        setRaceSchedule(responseRaceFilter.data.contents);

        const responseEventFilter = await axios.get(urlWithEventFilter, {
          headers: {
            'X-API-KEY': import.meta.env.VITE_API_KEY,
          },
        });
        setEventSchedule(responseEventFilter.data.contents);
      } catch (error) {
        console.error('スケジュールの取得に失敗しました', error);
      }
    };

    fetchNews();
  }, []);

  return {
    raceScheduleList: raceSchedule,
    eventScheduleList: eventSchedule,
  };
};
