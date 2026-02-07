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

## 📁 プロジェクト構造 (FSD)

```
src/
├── app/              # アプリケーション初期化、ルーティング、グローバルスタイル
├── widgets/          # 独立した大きなUIブロック (Header, Footer)
├── features/         # ビジネスロジックを持つ機能単位
├── entities/         # ビジネスエンティティ (News, Schedule)
├── shared/           # 再利用可能なコード（UI、hooks、utils、constants）
└── pages/            # アプリケーションのページ
```

### FSD層の責務

- **app**: アプリ全体の設定と初期化
- **widgets**: ヘッダーやフッターなどの複雑なUIブロック
- **features**: ユーザーアクション（お問い合わせフォーム、言語切り替えなど）
- **entities**: ビジネスモデル（ニュース、スケジュールなど）
- **shared**: プロジェクト全体で共有される汎用コード
- **pages**: ページコンポーネント（ルーティングと対応）

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
