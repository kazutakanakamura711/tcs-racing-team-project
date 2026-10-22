## CI/CD（GitHub Actionsで自動デプロイ）

main ブランチへの push（PR merge を含む）をトリガーに、GitHub Actions が自動でビルドし、dist をレンタルサーバへ FTPS 転送します。

### デプロイの流れ

main ブランチへ push
-> .github/workflows/deploy.yml が起動
-> .nvmrc の Node.js をセットアップ
-> npm ci
-> npm run build
-> dist/ を FTPS でサーバへ転送

### Node.js と Actions のバージョン

- ビルドに使用する Node.js は `.nvmrc` の `24.22.1` です。`actions/setup-node` の `node-version-file` で読み込み、ローカルの `nvm install` / `nvm use` と揃えています。
- Actions は `actions/checkout@v7.0.1`、`actions/setup-node@v7.1.0`、`SamKirkland/FTP-Deploy-Action@v4.4.0` を使用します。いずれも Action 自体は Node.js 24 で動作します。この実行環境は `.nvmrc` で指定するビルド用 Node.js とは別です。
- Node.js を更新する場合は `.nvmrc` を変更し、ローカルで依存関係のインストール・ビルド・Lint・テストを確認してください。

### 事前準備

#### 1. レンタルサーバの FTP 情報を確認

レンタルサーバ管理画面で以下を確認します。

- FTP ホスト名
- FTP ユーザー名
- FTP パスワード
- アップロード先ディレクトリ（公開ディレクトリ）

#### 2. GitHub Secrets を設定

GitHub リポジトリの Settings -> Secrets and variables -> Actions で、次の Secrets を作成します。

| Secret 名                       | 値の例                           | 説明                                 |
| ------------------------------- | -------------------------------- | ------------------------------------ |
| FTP_SERVER                      | ftp.lolipop.jp                   | FTP サーバーホスト名                 |
| FTP_USERNAME                    | your-username                    | FTP ユーザー名                       |
| FTP_PASSWORD                    | your-password                    | FTP パスワード                       |
| FTP_REMOTE_DIR                  | /your-account/html/              | dist のアップロード先（末尾 / 推奨） |
| VITE_API_URL                    | https://xxxx.microcms.io/api/v1/ | microCMS API のベース URL            |
| VITE_API_KEY                    | xxxxxxxxxxxxxxxx                 | microCMS API キー                    |
| VITE_UPDATES_CONTENTS_ID        | akksc0wgpp                       | updates 用 category ID               |
| VITE_RACE_SCHEDULE_CONTENTS_ID  | ticmjofd83m                      | race schedule 用 category ID         |
| VITE_EVENT_SCHEDULE_CONTENTS_ID | d--puacxtl                       | event schedule 用 category ID        |

### 注意点

- この構成は FTPS（port 21）を使います。
- SFTP サーバの場合は、workflow の転送ステップを SFTP 用へ変更してください。
- dist 直下のみ転送するため、ソースコードや node_modules はアップロードされません。
- Vite はビルド時に `VITE_*` を埋め込むため、GitHub Actions 側にも同じ値を Secrets として設定する必要があります。

### 動作確認

1. main にマージする
2. GitHub の Actions タブで Deploy dist to rental server を開く
3. ジョブが Success になれば完了
