export interface ScheduleItem {
  id: number;
  [key: `title${string}`]: string;
  [key: `location${string}`]: string;
  [key: `startDate${string}`]: string;
  [key: `endDate${string}`]: string;
  url?: string;
}
