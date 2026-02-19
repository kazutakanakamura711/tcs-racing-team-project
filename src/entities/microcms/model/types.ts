import type { EndPoints as GeneratedEndPoints } from './generated-types';

// 生成型の richEditor 系(any)を string に正規化
type NormalizedBlogs<T> = T extends {
  contentJa: unknown;
  contentEn?: unknown;
  contentId?: unknown;
}
  ? Omit<T, 'contentJa' | 'contentEn' | 'contentId'> & {
      contentJa: string;
      contentEn?: string;
      contentId?: string;
    }
  : T;

// blogs だけを正規化後の型に差し替え
type ReplaceBlogs<T extends { blogs: unknown }> = Omit<T, 'blogs'> & {
  blogs: NormalizedBlogs<T['blogs']>;
};

// 生成型 EndPoints をプロジェクト用 EndPoints として再定義
export type EndPoints = Omit<
  GeneratedEndPoints,
  'get' | 'gets' | 'post' | 'put' | 'patch'
> & {
  get: ReplaceBlogs<GeneratedEndPoints['get']>;
  gets: ReplaceBlogs<GeneratedEndPoints['gets']>;
  post: ReplaceBlogs<GeneratedEndPoints['post']>;
  put: ReplaceBlogs<GeneratedEndPoints['put']>;
  patch: ReplaceBlogs<GeneratedEndPoints['patch']>;
};
