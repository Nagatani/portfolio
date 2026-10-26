# デプロイ

Firebase Hosting（プロジェクト: `nagatani-profile`）で`dist/client`を配信しています。
デプロイはGitHub Actionsで自動化しています。

## GitHub Actions（`.github/workflows/ci.yml`）

| トリガー | 実行内容 |
| --- | --- |
| `master`へのpush | ビルド→型チェック→ Firebase Hostingへデプロイ |
| `master`向けのPR | ビルド→型チェック（デプロイしない） |
| 手動実行（workflow_dispatch） | `master`で実行した場合のみデプロイまで行う |

### ジョブの流れ

1. リポジトリをチェックアウト
2. `.node-version`のNode.jsをセットアップ（npmキャッシュあり）
3. `npm ci`
4. `npm run build`
5. `npm run check`（`.routify/`を参照するため、ビルドの後に実行）
6. シークレット`GCLOUD_SERVICE_KEY`を復号し、ランナーの一時ディレクトリにサービスアカウントキーとして保存（`master`のみ）
7. `npx firebase-tools@15 deploy --only hosting`でデプロイ（`master`のみ）

### その他の設定

- ワークフローの権限は`contents: read`のみです。
- 同じブランチで実行が重なった場合、PRでは古い実行を中止します。デプロイは途中で中止しません。

## シークレット

| シークレット名 | 内容 | 状態 |
| --- | --- | --- |
| `GCLOUD_SERVICE_KEY` | サービスアカウントキー（JSON）をBase64エンコードしたもの | 使用中 |
| `FIREBASE_TOKEN` | 旧方式の認証トークン | 未使用（削除可） |

## サービスアカウントキーを更新する

デプロイのステップが認証エラーで失敗する場合は、キーを発行し直します。

1. Google Cloudコンソールで、プロジェクト`nagatani-profile`のサービスアカウントキー（JSON）を発行する。サービスアカウントには「Firebase Hosting 管理者」ロールが必要です。
2. Base64エンコードしてGitHubのシークレット`GCLOUD_SERVICE_KEY`に登録する。

   ```sh
   base64 -i service-account.json | gh secret set GCLOUD_SERVICE_KEY
   ```

3. 手元のキーファイルは削除する。

## 手動でデプロイする

```sh
npx firebase-tools@15 login   # 初回のみ
npm run build
npx firebase-tools@15 deploy --only hosting
```

## Hostingの設定（`firebase.json`）

- `public`: `dist/client`（Viteのビルド出力先）
- `rewrites`: 全パスを`/index.html`に向ける（SPAのため）
- `headers`: ブラウザキャッシュの期間（Cache-Control）を設定

| 対象 | Cache-Control | 理由 |
| --- | --- | --- |
| `/assets/**` | `public, max-age=31536000, immutable`（1年） | Viteがファイル名にハッシュを付けるため、内容が変わればURLも変わる |
| `/images/**` | `public, max-age=604800`（7日） | 画像を差し替えるときはファイル名を変える |
| HTML（`/`、`/index.html`、拡張子のないパス） | `no-cache` | デプロイ後すぐに新しい`/assets/`を参照させるため（毎回ETagで更新を確認） |

あわせて、すべてのパス（`**`）に`X-Robots-Tag: noindex`を付けています（下記「検索エンジンに登録しない設定」を参照）。

ヘッダーはリライト前のURLで判定されます。Cache-Controlのパターンは、適用順がわかりにくくならないよう重ならないように書いています。
`X-Robots-Tag`の`**`は他のパターンと重なりますが、ヘッダー名が異なるため両方が付くことをエミュレーターで確認しています。
ローカルでは`npx firebase-tools@15 emulators:start --only hosting`でヘッダーを確認できます。

## 検索エンジンに登録しない設定

このサイトは、Google検索などの検索結果に表示しない方針です。URLを知っている人や、リンクからの訪問は通常どおりできます。

| 設定 | 内容 |
| --- | --- |
| `index.html` | `<meta name="robots" content="noindex">` |
| `firebase.json` | すべてのパスに`X-Robots-Tag: noindex`ヘッダー（画像なども対象） |
| `public/robots.txt` | クロールは許可したまま（`Allow: /`） |

`robots.txt`で`Disallow`にすると、検索エンジンが`noindex`の指定を読めなくなり、外部からリンクされたURLが検索結果に残ることがあります。そのため、クロールは許可したうえで`noindex`で登録を止めています。

SNSでの共有時の表示（OGP）は`noindex`の影響を受けません。

すでに検索結果に出ているページは、検索エンジンが次に巡回したときに削除されます。早く消したい場合は、Google Search Consoleの「削除」ツールで一時的に非表示にできます。

## 経緯

公開中ファイルの更新日時から、2023年4月29日以降は公開サイトが更新されていなかったことが分かっています。
GitHub Actionsの実行履歴が残っていないため、失敗の原因（Node.js 16での実行、認証キーの失効など）は特定できていません。
2026年10月の依存パッケージ更新にあわせて、Node.jsのバージョン指定、ビルド出力先、Firebase CLIの実行方法を見直しています。
