# 開発環境

## 必要なもの

- Node.js（バージョンはリポジトリ直下の`.node-version`を参照）
- npm

`.node-version`はnodenvとmiseのどちらでも読み込まれ、リポジトリ内に入ると自動的にそのバージョンに切り替わります。
GitHub Actionsも同じファイルを参照します。

## セットアップ

```sh
npm ci
```

> **補足**: npm 11以降では、esbuildなど一部パッケージのinstall scriptが既定で保留され、警告が表示されます。
> ビルドや開発サーバーの動作には影響ありません。許可する場合は`npm install-scripts approve <パッケージ名>`を実行します。

## npm scripts

| コマンド | 内容 |
| --- | --- |
| `npm run dev` | Vite開発サーバーを起動（`0.0.0.0`で待ち受け、HMRあり）。http://localhost:5173 |
| `npm run build` | 本番ビルド。`dist/client/`に出力 |
| `npm run preview` | ビルド結果をローカルで配信して確認。http://localhost:4173 |
| `npm run image` | 画像をWebPに変換・縮小（[content.md](content.md#画像)を参照） |
| `npm run check` | `svelte-check`による型チェック |

## 型チェックについて

`npm run check`は、ビルド時に生成される`.routify/routes.default.js`を参照します。
`.routify/`がない状態（クローン直後など）で実行すると「モジュールが見つからない」というエラーになるため、先に`npm run build`か`npm run dev`を実行してください。

現在、`src/pages/_footer.svelte`の未使用CSSセレクタ（`.footer p span`）について警告が1件出ますが、表示には影響しません。

## 本番と同じ状態で確認する

```sh
npm run build
npm run preview   # http://localhost:4173
```

`vite preview`も存在しないパスに`index.html`を返すため、`/about-programming`などへの直接アクセスも本番と同様に確認できます。
