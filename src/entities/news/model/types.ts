// ラッパー型（プロジェクト向け EndPoints）を実際に利用
import type { EndPoints } from '@/entities/microcms/model/types';

type LocalizedNewsFields = {
  [key: `title${string}`]: string;
} & {
  [key: `content${string}`]: string;
};

type NewsCategory =
  | string
  | null
  | {
      id?: string;
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      revisedAt?: string;
    };

export type NewsItem = Omit<
  EndPoints['get']['blogs'],
  'category' | 'contentJa' | 'contentEn' | 'contentId'
> &
  LocalizedNewsFields & {
    category: NewsCategory;
  };
