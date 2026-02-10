# Asia Union TCS Racing Team Website

Asia Union TCS Racing Team の公式ウェブサイト

## 🚀 技術スタック

- **フレームワーク**: React 18 + TypeScript
- **ビルドツール**: Vite
- **UIライブラリ**: Chakra UI
- **状態管理**: Zustand
- **ルーティング**: React Router v6
- **国際化**: i18next (日本語、英語、インドネシア語対応)
- **CMS**: MicroCMS
- **アーキテクチャ**: Feature-Sliced Design (FSD)
- **UIドキュメント**: Storybook
- **テスト**: Vitest + React Testing Library + happy-dom
- **コード品質**: ESLint + Prettier + Husky

## 📋 必要な環境

- Node.js: `>=20.0.0`
- npm: `>=10.0.0`

推奨: `nvm` を使用してNode.jsバージョンを管理

## 🛠️ セットアップ

```bash
# リポジトリをクローン
git clone https://github.com/kazutakanakamura711/tcs-racing-team-project.git
cd tcs-racing-team-project

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

開発サーバーは `http://localhost:5173` で起動します。

## 📝 スクリプト

```bash
# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build

# リント実行
npm run lint

# リント自動修正
npm run lint:fix

# コードフォーマット実行
npm run format

# フォーマットチェック（CI用）
npm run format:check

# ビルド結果のプレビュー
npm run preview
```

## ✨ コード品質管理

### ESLint

TypeScript + React に最適化された設定で、コードの問題を自動検出します。

```bash
# エラーチェック
npm run lint

# 自動修正
npm run lint:fix
```

### Prettier

統一されたコードスタイルを自動適用します。

```bash
# フォーマット実行
npm run format

# フォーマットチェック
npm run format:check
```

### Husky + lint-staged

コミット時に自動的にリントとフォーマットを実行します。

**動作フロー:**

```bash
git add .
git commit -m "your message"
# ↓ 自動実行
# 1. ステージされた .ts/.tsx → ESLint修正 → Prettier
# 2. ステージされた .json/.css/.md → Prettier
# 3. エラーがあればコミット中断
```

**設定内容:**

- `.husky/pre-commit`: pre-commitフック
- `package.json` の `lint-staged`: 実行内容を定義

## 🧪 テスト

プロジェクトの品質を保証するために、ユニットテストとインテグレーションテストを導入しています。

- **テストランナー**: Vitest
- **DOM環境**: happy-dom
- **ユーティリティ**: React Testing Library

### テスト対象コンポーネント

- **shared/ui**: 再利用可能なUIコンポーネント（全てStorybookと連動）
- **widgets**: ヘッダー、フッターなどの大きなUIブロック

**テストポリシー**: Storybookを持つ全てのコンポーネントには対応するテストファイル（`.test.tsx`）が存在します。

### テストの実行

```bash
# テストをウォッチモードで実行（開発中）
npm test

# テストを1回だけ実行（CI/CD等）
npm run test:run

# UIモードでテストを実行（詳細確認用）
npm run test:ui

# カバレッジレポート付きでテスト実行
npm run test:coverage

# 特定のファイルのテストのみ実行
npm test src/shared/ui/link-button/link-button.test.tsx
```

### テストの書き方ガイドライン

#### 基本構造

```tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { YourComponent } from './your-component';

describe('YourComponent', () => {
  it('正常にレンダリングされること', () => {
    render(<YourComponent />);
    expect(screen.getByText('テキスト')).toBeInTheDocument();
  });
});
```

#### React Routerを使用するコンポーネント

```tsx
import { MemoryRouter } from 'react-router-dom';

render(
  <MemoryRouter>
    <YourComponent />
  </MemoryRouter>,
);
```

#### イベントハンドラーのテスト

```tsx
import { fireEvent } from '@testing-library/react';
import { vi } from 'vitest';

const handleClick = vi.fn();
render(<Button onClick={handleClick}>クリック</Button>);
fireEvent.click(screen.getByText('クリック'));
expect(handleClick).toHaveBeenCalled();
```

### テストのベストプラクティス

1. **視覚的な結果をテスト**: ユーザーが見えるもの（テキスト、画像のalt属性など）をテストする
2. **実装の詳細には依存しない**: クラス名やDOM構造ではなく、役割（role）やテキストでクエリする
3. **モックは最小限に**: 実際の動作をテストし、必要な場合のみモックを使用
4. **テストケース名は日本語でわかりやすく**: 何をテストしているかが一目でわかるように記述

### カバレッジレポート

テストカバレッジは以下のコマンドで確認できます：

```bash
npm run test:coverage
```

カバレッジレポートは `coverage/` ディレクトリに生成され、ブラウザで `coverage/index.html` を開くと詳細を確認できます。

### Storybookとの連携

このプロジェクトでは、Storybookとテストを密接に連携させています：

- **Storybook**: コンポーネントのビジュアル確認とドキュメント
- **Vitest**: コンポーネントのロジックと動作の検証

```bash
# Storybookを起動してビジュアル確認
npm run storybook

# テストを実行して動作を検証
npm test
```

## 📁 プロジェクト構造 (FSD)

```
src/
├── app/              # アプリケーション初期化、ルーティング、グローバルスタイル
├── widgets/          # 独立した大きなUIブロック (Header, Footer)
├── features/         # ビジネスロジックを持つ機能単位
├── entities/         # ビジネスエンティティ (News, Schedule)
├── shared/           # 再利用可能なコード（UI、hooks、utils、constants）
├── pages/            # アプリケーションのページ
└── test/             # テスト環境のグローバル設定
```

### FSD層の責務

- **app**: アプリ全体の設定と初期化
- **widgets**: ヘッダーやフッターなどの複雑なUIブロック
- **features**: ユーザーアクション（お問い合わせフォーム、言語切り替えなど）
- **entities**: ビジネスモデル（ニュース、スケジュールなど）
- **shared**: プロジェクト全体で共有される汎用コード
- **pages**: ページコンポーネント（ルーティングと対応）
- **test**: Vitestのセットアップファイル（テストファイル自体は各コンポーネントと同じ場所に配置）

## 🌍 多言語対応

3つの言語をサポート：

- 日本語 (ja)
- 英語 (en)
- インドネシア語 (id)

翻訳ファイルは `public/locales/{言語}/` に配置されています。

### 言語コードの使い分け

- **MicroCMSフィールド名**: 大文字始まり (`Ja`, `En`, `Id`)
  - 例: `titleJa`, `contentEn`
- **i18nロケール**: 小文字 (`ja`, `en`, `id`)
  - 変換は `toLowerCase()` で自動処理

## 🗂️ 命名規則

- **フォルダ/ファイル**: ケバブケース (`member-detail`, `use-language.ts`)
- **コンポーネント**: パスカルケース (`MemberDetail.tsx`)
- **定数**: アッパーケース (`TEAM_MEMBER`, `OUR_PARTNERS`)
- **関数/変数**: キャメルケース (`handleClick`, `userName`)

## 🚢 デプロイ

本番環境へのデプロイ手順：

```bash
# ビルド実行
npm run build

# dist フォルダの内容をロリポップサーバーにアップロード
```

## 🔧 開発ガイドライン

### 新しい機能を追加する場合

1. `features/` に新しい機能フォルダを作成
2. `ui/` にUIコンポーネント、`model/` にロジックを配置
3. 必要に応じて `entities/` にエンティティを定義
4. `pages/` で機能を統合

### コンポーネント作成のベストプラクティス

- UIとロジックを分離する
- Propsの型を明示的に定義
- 共通UIは `shared/ui/` に配置
- カスタムフックは適切な層の `model/hooks/` に配置

## 📄 ライセンス

Private

## 👥 コントリビューター

このプロジェクトに貢献してくれた方々に感謝します。
