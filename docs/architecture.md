# アーキテクチャ

## 技術スタック

| 用途 | 使用技術 |
| --- | --- |
| UIフレームワーク | [Svelte 5](https://svelte.dev/)（TypeScript） |
| ルーティング | [Routify 3](https://routify.dev/)（ファイルベースルーティング） |
| Markdownページ | [mdsvex](https://github.com/pngwn/MDsveX)（`.md`をSvelteコンポーネントとして扱う） |
| スタイル | SCSS（`sass`、Viteが直接コンパイル） |
| ビルド・開発サーバー | [Vite 7](https://vite.dev/) |
| ホスティング | Firebase Hosting |
| CI/CD | GitHub Actions |

サーバーサイドの処理はなく、ビルドした静的ファイルをFirebase Hostingで配信するSPA（シングルページアプリケーション）です。

## ディレクトリ構成

```
.
├── .github/workflows/ci.yml    # PR でチェック＆ビルド、master への push でデプロイ
├── .node-version               # 使用する Node.js のバージョン（ローカル・CI 共通）
├── docs/                       # このドキュメント
├── firebase.json               # Hosting 設定（dist/client を配信、全パスを index.html へリライト）
├── .firebaserc                 # Firebase プロジェクト指定
├── index.html                  # エントリ HTML（Google Fonts 読み込み、src/main.ts を読み込む）
├── vite.config.js              # Vite 設定（Routify プラグインなど）
├── svelte.config.js            # Svelte 設定（preprocess、mdsvex）
├── tsconfig.json
├── dist/client/                # ビルド出力先 ※gitignore
├── public/                     # 静的ファイル（ビルド時にそのまま dist/client へコピー）
│   ├── images/                 # 画像（記事カバー、背景、プロフィール等）
│   └── manifest.json / robots.txt / favicon.png / 404.svg
└── src/
    ├── main.ts                 # エントリポイント（グローバル SCSS を読み込み、App を body にマウント）
    ├── App.svelte              # Routify の Router
    ├── pages/                  # ルーティング対象（下記参照）
    └── style/                  # グローバル SCSS（index.scss から各パーシャルを @use）
```

## 処理の流れ

1. ブラウザが`index.html`を読み込み、`src/main.ts`が実行される。
2. `main.ts`がグローバルSCSS（`src/style/index.scss`）を読み込み、`App.svelte`を`<body>`にマウントする。
3. `App.svelte`の`<Router>`が、URLに対応する`src/pages/`内のコンポーネントを表示する。
4. 全ページ共通で`_module.svelte`（ナビゲーション）が外側に描画される。

## ルーティング（`src/pages/`）

Routifyのファイルベースルーティングにより、ファイル名がそのままURLになります。
**`_`で始まるファイルはルートにならず**、レイアウトや部品として使われます。

> **注意**: Routify 3では、ファイル名に`_module`・`_layout`・`_reset`を含むファイルは`_`始まりでもルート扱いになります。
> 部品のファイル名にこれらの語を含めないでください。

| ファイル | 役割 |
| --- | --- |
| `index.svelte` | トップページ`/`（Hero → Lead → Paper → Posts → Footer） |
| `about-programming.md` | `/about-programming`（プログラミングのこと） |
| `about-part-time-instructor.md` | `/about-part-time-instructor`（非常勤講師のこと） |
| `about-research-and-development.md` | `/about-research-and-development`（研究・開発のこと） |
| `work.md` | `/work`（お仕事のご依頼。メールボタンで依頼項目入りのメールを作成） |
| `privacy-policy.md` | `/privacy-policy`（プライバシーポリシー） |
| `_module.svelte` | 全ページ共通レイアウト（ナビゲーションのリンク一覧を定義） |
| `_article.svelte` | mdsvexの記事レイアウト（frontmatterの`title` / `description` / `cover_image`を使用） |
| `_navigation.svelte` | 固定ヘッダーとハンバーガーメニュー |
| `_hero.svelte` / `_lead.svelte` / `_paper.svelte` | トップページの各セクション |
| `_posts.svelte` | トップページの記事カード一覧 |
| `_namecard.svelte` | 名刺（連絡先・SNSリンク）。トップと記事ページの下部で使用 |
| `_footer.svelte` | フッター（お仕事のご依頼・プライバシーポリシーへのリンク） |
| `_mail-button.svelte` | 件名・本文入りのメール作成画面を開くボタン（`work.md`で使用） |
| `nested.svelte` / `subpage.svelte` | 動作確認用のサンプルページ（`/nested`・`/subpage`として公開されます） |

ルート定義はVite起動時・ビルド時に`.routify/`へ自動生成されます（gitignore済み）。
`App.svelte`は生成された`.routify/routes.default.js`を読み込んでいます。

## SPAとしての配信

`firebase.json`で全パスを`/index.html`にリライトしています。
そのため`/about-programming`などに直接アクセスしても`index.html`が返り、クライアント側でRoutifyがページを切り替えます。
