# メンバー更新作業ガイド

このドキュメントでは、チームメンバーの追加・削除・更新方法について説明します。

## 目次

- [新規メンバーの追加](#新規メンバーの追加)
- [メンバー情報の更新](#メンバー情報の更新)
- [メンバーの削除](#メンバーの削除)
- [翻訳ファイルの更新](#翻訳ファイルの更新)

## 新規メンバーの追加

新規メンバーを追加する際は、以下の手順で作業を行います。

### 1. メンバー定数の追加

ファイル: [`src/shared/constants/members.ts`](src/shared/constants/members.ts)

#### 1.1 `MemberId` に追加

```typescript
export const MemberId = {
  // 既存のメンバー...
  EusebiaNicole: 'eusebia-nicole', // 追加
} as const;
```

#### 1.2 `parseMemberId` に追加

```typescript
export const parseMemberId = (id: string): MemberId | null => {
  switch (id) {
    // 既存のケース...
    case MemberId.EusebiaNicole:
      return MemberId.EusebiaNicole;
    // ...
  }
};
```

#### 1.3 `MemberKey` に追加

```typescript
export const MemberKey = {
  // 既存のメンバー...
  EusebiaNicole: 'EusebiaNicole', // 追加
} as const;
```

#### 1.4 `members` オブジェクトに詳細情報を追加

```typescript
export const members: Record<MemberKey, Member> = {
  // 既存のメンバー...
  [MemberKey.EusebiaNicole]: {
    id: MemberId.EusebiaNicole,
    nameJa: 'エセビア ニコル',
    nameEn: 'Eusebia Nicole',
    memberType: MemberType.Rider,
    gradationImagesPath:
      '/images/member/img-member-eusebia-nicole-gradation.webp',
    topTheTeamSectionBackgroundImagePath:
      '/images/top/img-top-philippines-flag.webp',
    topTheTeamSectionImagePath:
      '/images/member/img-member-eusebia-nicole-rider.webp',
    ourTeamPageTheRiderSectionImagePath:
      '/images/member/img-member-eusebia-nicole-rider.webp',
    memberPageAboutSectionImagesPath:
      '/images/memberPage/img-memberPage-bg-eusebia-nicole.jpeg',
    memberPageFirstViewMemberImagePath:
      '/images/memberPage/img-memberPage-eusebia-nicole.webp',
    memberPageFirstViewBackgroundImagePc:
      '/images/memberPage/img-memberPage-top-eusebia-nicole-pc.webp',
    memberPageFirstViewBackgroundImageSp:
      '/images/memberPage/img-memberPage-top-eusebia-nicole-sp.webp',
  },
};
```

### 2. 画像ファイルの配置

以下のディレクトリに必要な画像を配置します：

- `/public/images/member/` - メンバー画像（グラデーション、ライダー画像など）
- `/public/images/memberPage/` - メンバー詳細ページ用画像（背景、トップビューなど）
- `/public/images/top/` - トップページ用背景画像（国旗など）

**画像ファイル名の命名規則:**

- グラデーション画像: `img-member-{member-id}-gradation.webp`
- ライダー画像: `img-member-{member-id}-rider.webp`
- メンバーページ背景: `img-memberPage-bg-{member-id}.jpeg`
- メンバーページ画像: `img-memberPage-{member-id}.webp`
- メンバーページトップビュー: `img-memberPage-top-{member-id}-pc.webp` / `-sp.webp`

### 3. 翻訳ファイルの更新

以下の3つのロケールファイルに翻訳を追加します：

#### 日本語: `public/locales/ja/teamMember.json`

```json
{
  "eusebia-nicole": {
    "result": "2024年の主な成績...",
    "homeTown": "出身地: フィリピン",
    "birth": "1999年10月30日生まれ"
  }
}
```

#### 英語: `public/locales/en/teamMember.json`

```json
{
  "eusebia-nicole": {
    "result": "Main results in 2024...",
    "homeTown": "Hometown: Philippines",
    "birth": "Born: October 30, 1999"
  }
}
```

#### インドネシア語: `public/locales/id/teamMember.json`

```json
{
  "eusebia-nicole": {
    "result": "Hasil utama di 2024...",
    "homeTown": "Kampung halaman: Filipina",
    "birth": "Lahir: 30 Oktober 1999"
  }
}
```

#### トップページのTheTeamセクションについて

トップページのTheTeamセクションでは、メンバータイプによって参照する翻訳ファイルが異なります：

- **Director（監督）**: `public/locales/{ja,en,id}/topTheTeam.json` の `directorDescription` を参照
- **Rider（ライダー）**: `public/locales/{ja,en,id}/teamMember.json` の `result.{member-id}` を参照

例：

```json
// topTheTeam.json
{
  "teamDescription": "マウンテンバイクを通じて...",
  "directorDescription": "マウンテンバイク競技オリンピック4大会連続出場..."
}

// teamMember.json
{
  "result": {
    "eusebia-nicole": "2024\nフィリピン・ナショナル選手権..."
  }
}
```

**新規Riderメンバーの追加について:**

通常、新規メンバーはRider（ライダー）として追加されます。Directorの追加や変更はほとんど発生しません。

新規Riderを追加する際は、`public/locales/{ja,en,id}/teamMember.json` の `result` セクションにメンバーIDをキーとして成績情報を追加するだけで、以下の箇所で自動的に反映されます：

1. **トップページのTheTeamセクション** - メンバーの簡単な紹介として表示
2. **メンバー詳細ページ** - メンバーの詳細情報として表示

つまり、1箇所の更新で複数のページに連動して反映されるため、管理が容易になっています。

## メンバー情報の更新

既存メンバーの情報を更新する場合：

### 1. 基本情報の更新

[`src/shared/constants/members.ts`](src/shared/constants/members.ts) の該当メンバーの情報を更新します。

### 2. 翻訳の更新

`public/locales/{ja,en,id}/teamMember.json` の該当メンバーの翻訳を更新します。

### 3. 画像の差し替え

必要に応じて `/public/images/` 配下の画像ファイルを更新します。

## メンバーの削除

メンバーを削除する場合：

### 1. メンバー定数から削除

[`src/shared/constants/members.ts`](src/shared/constants/members.ts) から以下を削除：

- `MemberId` のエントリ
- `parseMemberId` のケース
- `MemberKey` のエントリ
- `members` オブジェクトのエントリ

### 2. 翻訳ファイルから削除

以下のファイルから該当メンバーのエントリを削除：

- `public/locales/ja/teamMember.json`
- `public/locales/en/teamMember.json`
- `public/locales/id/teamMember.json`

### 3. 画像ファイルの削除（オプション）

不要になった画像ファイルを削除します。

## メンバータイプについて

`memberType` には以下の値が使用できます：

```typescript
export const MemberType = {
  Director: 'Director', // 監督
  GeneralManager: 'GeneralManager', // GM（ゼネラルマネージャー）
  Rider: 'Rider', // ライダー
  Communications: 'Communications', // 広報
  Staff: 'Staff', // スタッフ
} as const;
```

## 画像パスの注意点

- 画像が存在しない場合は、空文字列 `''` を設定してください
- パスは `/` から始まる絶対パスで指定します
- 画像が存在しない場合でも、メンバーは表示されます（条件付きレンダリングで対応済み）

## トラブルシューティング

### ルーティングがTOPにリダイレクトされる

メンバーIDが正しく `parseMemberId` に追加されているか確認してください。

### 画像が表示されない

- 画像パスが正しいか確認
- 画像ファイルが実際に配置されているか確認
- パスの先頭に `/` があるか確認

### ホバーエフェクトが動作しない

コンポーネントで `role="group"` と `_groupHover` が正しく使用されているか確認してください。
