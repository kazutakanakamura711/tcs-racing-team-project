/**
 * CMSで作成された記事内に空の見出しタグが混入することがある。
 * 空の見出しタグはアクセシビリティ違反（axe DevToolsで検出）となるため、
 * dangerouslySetInnerHTMLで描画する前にこの関数で除去する。
 *
 * 例: <h2 id="xxx"></h2> → 削除
 */
export const cleanHtml = (html: string): string => {
  if (!html) return '';
  return html.replace(/<h[1-6][^>]*>\s*<\/h[1-6]>/g, '');
};
