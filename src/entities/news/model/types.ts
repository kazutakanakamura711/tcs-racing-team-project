export interface NewsItem {
  id: string;
  [key: `title${string}`]: string;
  [key: `content${string}`]: string;
  createdAt: string;
  publishedAt: string;
  revisedAt: string;
  updatedAt: string;
  category: {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
  };
  eyecatch: {
    url: string;
  };
}
