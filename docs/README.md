# ドキュメント

@Nagatani（ナガタニヒデヒロ）のポートフォリオサイト（https://nagatani.me/）の開発用ドキュメントです。

| ドキュメント | 内容 |
| --- | --- |
| [architecture.md](architecture.md) | 技術スタック、ディレクトリ構成、ルーティングの仕組み |
| [development.md](development.md) | 開発環境のセットアップ、npm scripts |
| [content.md](content.md) | 記事の追加、スタイルの編集 |
| [deployment.md](deployment.md) | GitHub ActionsとFirebase Hostingによるデプロイ |
| [dependencies.md](dependencies.md) | 依存パッケージのバージョン方針、既知の注意点 |

## 概要

- 公開URL: https://nagatani.me/
- ホスティング: Firebase Hosting（プロジェクト: `nagatani-profile`）
- 構成: Svelte 5 + Routify 3 + Vite 7によるSPA
- デプロイ: `master`ブランチへのpushでGitHub Actionsが自動デプロイ

## クイックスタート

```sh
npm ci
npm run dev       # http://localhost:5173
```

Node.jsのバージョンはリポジトリ直下の`.node-version`で指定しています。
