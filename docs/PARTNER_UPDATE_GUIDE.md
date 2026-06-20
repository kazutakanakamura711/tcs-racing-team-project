# パートナー更新作業ガイド

このドキュメントでは、パートナーロゴの追加・削除・更新方法について説明します。

## 目次

- [新規パートナーの追加](#新規パートナーの追加)
- [パートナー情報の更新](#パートナー情報の更新)
- [パートナーの削除](#パートナーの削除)
- [カテゴリ変更](#カテゴリ変更)
- [トラブルシューティング](#トラブルシューティング)

## 新規パートナーの追加

新規パートナーを追加する際は、以下の手順で作業を行います。

### 1. 変更対象資料を更新

ファイル: [docs/PARTNER.md](docs/PARTNER.md)

まず一覧資料を更新し、追加対象の企業名・カテゴリ・URLを整理します。

### 2. ロゴ画像を配置

以下のディレクトリにロゴ画像を配置します。

- /public/images/partner/

推奨命名規則:

- img-sponsor-{partner-key}.webp

既存資産との整合上、jpg/png を使う場合もあります。既存ファイルに合わせて選択してください。

### 3. 定数を追加

ファイル: [src/shared/constants/partners-images.ts](src/shared/constants/partners-images.ts)

#### 3.1 PartnersKey に追加

```typescript
export type PartnersKey =
  | 'alpenBlick'
  // ...
  | 'newPartner';
```

#### 3.2 partners オブジェクトに追加

```typescript
export const partners: Record<PartnersKey, Partner> = {
  // ...
  newPartner: {
    imagePath: '/images/partner/img-sponsor-new-partner.webp',
    link: 'https://example.com/',
    partnersPageLogoImageWidth: '120px',
    commonLogoImageWidth: '120px',
  },
};
```

項目の意味:

- imagePath: ロゴ画像のパス
- link: 遷移先 URL
- partnersPageLogoImageWidth: Our Partners ページでの表示幅（必須）
- commonLogoImageWidth: 共通表示で使用する幅（任意）

#### 3.3 partnersImages のカテゴリ配列に追加

```typescript
export const partnersImages: Record<PartnerCategory, Partner[]> = {
  black: [partners.alpenBlick],
  platinum: [partners.blisStage, partners.hokuei, partners.newPartner],
  // ...
};
```

### 4. 表示順・カテゴリ見出しを確認

ファイル: [src/features/our-partners/our-partners-container.tsx](src/features/our-partners/our-partners-container.tsx)

カテゴリ見出しの表示順はコンテナ側で固定です。通常は [src/shared/constants/partners-images.ts](src/shared/constants/partners-images.ts) の更新だけで反映されます。

## パートナー情報の更新

既存パートナーのロゴやリンクを更新する場合:

### 1. 一覧資料を更新

[docs/PARTNER.md](docs/PARTNER.md) の状態（変わらず・新規・削除）を更新します。

### 2. 定数を更新

[src/shared/constants/partners-images.ts](src/shared/constants/partners-images.ts) の該当パートナーを更新します。

- link の更新
- partnersPageLogoImageWidth の調整
- imagePath の差し替え

### 3. 必要に応じて画像を差し替え

/public/images/partner/ 配下の画像ファイルを差し替えます。

## パートナーの削除

パートナーを削除する場合:

### 1. 一覧資料を更新

[docs/PARTNER.md](docs/PARTNER.md) の該当企業を 削除 として記録します。

### 2. 定数から削除

[src/shared/constants/partners-images.ts](src/shared/constants/partners-images.ts) から以下を削除:

- PartnersKey のエントリ
- partners オブジェクトのエントリ
- partnersImages のカテゴリ配列内の参照

### 3. 画像ファイルの削除（任意）

不要になった画像ファイルを /public/images/partner/ から削除します。

## カテゴリ変更

カテゴリ移動のみ行う場合（例: Supporter から Suppliers へ移動）:

1. [docs/PARTNER.md](docs/PARTNER.md) の状態を更新
2. [src/shared/constants/partners-images.ts](src/shared/constants/partners-images.ts) の partnersImages 配列で移動

カテゴリ一覧:

- black
- platinum
- gold
- silver
- bronze
- supporters
- suppliers

## 動作確認

更新後は以下を確認します。

1. npm run build が通ること
2. Our Partners ページで対象ロゴが表示されること
3. リンク遷移先が正しいこと
4. カテゴリ位置が意図通りであること

## トラブルシューティング

### ロゴが表示されない

- imagePath のパスが正しいか確認
- /public/images/partner/ に実ファイルがあるか確認
- パス先頭が / になっているか確認

### リンク遷移がおかしい

- link が正しい URL か確認
- プロトコル（https://）を付けているか確認

### サイズが崩れる

- partnersPageLogoImageWidth を見直す
- 元画像の余白が大きすぎないか確認
