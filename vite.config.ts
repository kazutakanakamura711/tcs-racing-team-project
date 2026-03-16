import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import sitemap from 'vite-plugin-sitemap';

// 詳細ページがあるメンバーのルート（Director / GeneralManager / Rider のみ）
// members.ts に MemberId を追加・削除した場合はこちらも合わせて更新すること
const ourTeamDetailRoutes = [
  '/our-team/kohei-yamamoto',
  '/our-team/yusuke-fukumitsu',
  '/our-team/eusebia-nicole',
  '/our-team/rina-zaki',
  '/our-team/ayaka-hiyoshi',
  '/our-team/tsewang-norboo',
  '/our-team/ikuta-yuga',
  '/our-team/kadek-dwi',
];

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    tailwindcss(),

    // ビルド時に画像を圧縮してファイルサイズを削減する
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      webp: { quality: 80 },
    }),

    // ビルド時に dist/sitemap.xml を自動生成する
    // サイトマップは検索エンジンにサイト構造を伝えるためのファイル
    sitemap({
      hostname: 'https://a-uniontcs.com',
      dynamicRoutes: [
        '/',
        '/our-team',
        '/contact',
        '/schedule',
        '/our-partners',
        '/updates',
        // /our-team/:id — 詳細ページありのメンバーのみ（上記 ourTeamDetailRoutes 参照）
        ...ourTeamDetailRoutes,
        // /updates/:id — MicroCMS の記事IDが必要なため省略
      ],
      // パラメータ付きルートのテンプレート文字列がサイトマップに混入しないよう除外
      exclude: ['/our-team/:id', '/updates/:id'],
    }),
  ],
  optimizeDeps: {
    // storybook-static などのビルド成果物をスキャン対象から除外
    entries: ['src/**/*.{ts,tsx}'],
  },
});
