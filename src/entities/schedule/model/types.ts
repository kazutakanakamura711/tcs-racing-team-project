// ラッパー型（プロジェクト向け EndPoints）を実際に利用
import type { EndPoints } from '@/entities/microcms/model/types';

type LocalizedScheduleFields = {
  [key: `title${string}`]: string;
} & {
  [key: `location${string}`]: string;
} & {
  [key: `startDate${string}`]: string;
} & {
  [key: `endDate${string}`]: string;
};

export type ScheduleItem = Omit<EndPoints['get']['schedule'], 'category'> &
  LocalizedScheduleFields & {
    category?: string | null | { id?: string };
  };
