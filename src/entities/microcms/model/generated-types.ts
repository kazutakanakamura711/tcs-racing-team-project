/* eslint-disable @typescript-eslint/no-explicit-any */
type Reference<T, R> = T extends 'get' ? R : string | null;
interface GetsType<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}
type DateType = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
type MediaType = {
  url: string;
  width: number;
  height: number;
};
type Structure<T, P> = T extends 'get'
  ? { id: string } & DateType & Required<P>
  : T extends 'gets'
    ? GetsType<{ id: string } & DateType & Required<P>>
    : Partial<DateType> & (T extends 'patch' ? Partial<P> : P);

export type schedule<T = 'get'> = Structure<
  T,
  {
    /**
     * タイトル
     */
    titleJa: string;
    /**
     * タイトル(英語)
     */
    titleEn?: string;
    /**
     * タイトル(インドネシア語)
     */
    titleId?: string;
    /**
     * カテゴリ
     */
    category: Reference<T, unknown>;
    /**
     * 開催場所
     */
    locationJa: string;
    /**
     * 開催場所(英語)
     */
    locationEn?: string;
    /**
     * 開催場所(インドネシア語)
     */
    locationId?: string;
    /**
     * リンク先
     */
    url?: string;
    /**
     * 開始日
     */
    startDateJa: string;
    /**
     * 開始日(英語)
     */
    startDateEn?: string;
    /**
     * 開始日(インドネシア語)
     */
    startDateId?: string;
    /**
     * 終了日
     */
    endDateJa?: string;
    /**
     * 終了日(英語)
     */
    endDateEn?: string;
    /**
     * 終了日(インドネシア語)
     */
    endDateId?: string;
  }
>;

export type categories<T = 'get'> = Structure<
  T,
  {
    /**
     * カテゴリ名
     */
    name?: string;
  }
>;

export type blogs<T = 'get'> = Structure<
  T,
  {
    /**
     * タイトル
     */
    titleJa: string;
    /**
     * タイトル（英語）
     */
    titleEn?: string;
    /**
     * タイトル（インドネシア語）
     */
    titleId?: string;
    /**
     * 内容
     */
    contentJa: any;
    /**
     * 内容（英語）
     */
    contentEn?: any;
    /**
     * 内容（インドネシア語）
     */
    contentId?: any;
    /**
     * アイキャッチ
     */
    eyecatch?: MediaType;
    /**
     * カテゴリ
     */
    category: Reference<T, unknown>;
    /**
     * 開始日
     */
    startDateJa?: string;
    /**
     * 開始日（英語）
     */
    startDateEn?: string;
    /**
     * 開始日（インドネシア語）
     */
    startDateId?: string;
    /**
     * 終了日
     */
    endDateJa?: string;
    /**
     * 終了日（英語）
     */
    endDateEn?: string;
    /**
     * 終了日（インドネシア語）
     */
    endDateId?: string;
    /**
     * 開催場所
     */
    locationJa?: string;
    /**
     * 開催場所（英語）
     */
    locationEn?: string;
    /**
     * 開催場所（インドネシア語）
     */
    locationId?: string;
  }
>;

export interface EndPoints {
  get: {
    schedule: schedule<'get'>;
    categories: categories<'get'>;
    blogs: blogs<'get'>;
  };
  gets: {
    schedule: schedule<'gets'>;
    categories: categories<'gets'>;
    blogs: blogs<'gets'>;
  };
  post: {
    schedule: schedule<'post'>;
    categories: categories<'post'>;
    blogs: blogs<'post'>;
  };
  put: {
    schedule: schedule<'put'>;
    categories: categories<'put'>;
    blogs: blogs<'put'>;
  };
  patch: {
    schedule: schedule<'patch'>;
    categories: categories<'patch'>;
    blogs: blogs<'patch'>;
  };
}
