/**
 * CMSで作成された記事内に空の見出しタグが混入することがある。
 * 空の見出しタグはアクセシビリティ違反（axe DevToolsで検出）となるため、
 * dangerouslySetInnerHTMLで描画する前にこの関数で除去する。
 *
 * 例: <h2 id="xxx"></h2> → 削除
 *
 * また、MicroCMS（imgix CDN）の画像に対して以下の最適化を行う：
 * - w=800&q=75&fm=webp パラメータでリサイズ・圧縮・WebP変換
 * - loading="lazy" で遅延読み込み
 */
export const cleanHtml = (html: string): string => {
  if (!html) return '';

  // 空の見出しタグを除去し、<img> タグに対して画像最適化と遅延読み込みを適用
  const result = html
    .replace(/<h[1-6][^>]*>\s*<\/h[1-6]>/g, '')
    .replace(/<img([^>]*?)>/gi, (_, attrs) => {
      // MicroCMS（imgix）の画像URLにパラメータを付与してWebP変換・圧縮
      const optimizedAttrs = attrs.replace(
        /src="(https:\/\/images\.microcms-assets\.io[^"]*)"/i,
        (_: string, src: string) => {
          const sep = src.includes('?') ? '&' : '?';
          return `src="${src}${sep}w=800&q=75&fm=webp"`;
        },
      );

      // loading="lazy" が未設定の場合のみ追加
      const hasLoading = /\bloading=/i.test(optimizedAttrs);
      const finalAttrs = hasLoading
        ? optimizedAttrs
        : `${optimizedAttrs} loading="lazy"`;

      return `<img${finalAttrs}>`;
    });

  return result;
};
