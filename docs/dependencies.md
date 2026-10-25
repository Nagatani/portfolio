# 依存パッケージ

## 主要パッケージ

| パッケージ | バージョン | 備考 |
| --- | --- | --- |
| `svelte` | 5系 | 既存コンポーネントはSvelte 4の書き方（`export let`、`$:`、`<slot>`）のまま動作しています |
| `@roxi/routify` | 3系 | Vite専用 |
| `vite` | 7系 | 最新は8系ですが、Routifyが未対応 |
| `@sveltejs/vite-plugin-svelte` | 6系 | Vite 7に対応する系列 |
| `mdsvex` | 0.12系 | Markdownページ用 |
| `sass` | 1系 | |
| `typescript` | 6系 | 最新は7系ですが、`svelte-check`が未対応 |
| `svelte-check` | 4系 | |

## バージョンを固定している理由

### Viteを7系に留めている

Routify 3.6のpeer依存は`vite`が`^7.0.0`まで、`@sveltejs/vite-plugin-svelte`が`^6.0.0`までです。
Routifyが対応したら、`vite@8`と`@sveltejs/vite-plugin-svelte@7`へ上げられます。

### TypeScriptを6系に留めている

TypeScript 7はGo製の新しいコンパイラで、従来のコンパイラAPIを提供していません。
`svelte-check`はTypeScriptのコンパイラAPIを使うため、peer依存が`^5.0.0 || ^6.0.0`になっています。

## 2026年10月の更新で変えたこと

| 変更前 | 変更後 | 理由 |
| --- | --- | --- |
| Rollup 2 | Vite 7 | Routify 3がVite専用のため |
| Routify 2 | Routify 3 | Routify 2はNode 22以降で動かず、Svelte 5にも非対応のため |
| Svelte 4 | Svelte 5 | 最新安定版 |
| `_layout.svelte` | `_module.svelte` | Routify 3のレイアウトのファイル名 |
| `_article_layout.svelte` | `_article.svelte` | 名前に`layout`を含むとRoutify 3がルートとして扱うため |
| `public/index.html` | `index.html` | Viteはリポジトリ直下の`index.html`をエントリにするため |
| `public/global.css`（sass CLIで生成） | `src/main.ts`でSCSSをimport | Viteで直接コンパイルできるため |
| `new App(...)` | `mount(App, ...)` | Svelte 5のAPI |
| `public/build/` | `dist/client/` | Routify 3のViteプラグインの出力先 |

不要になったRollupのプラグイン、`sirv-cli`、`npm-run-all`、`svelte-preprocess`などは削除しました。

## 更新の確認方法

```sh
npx npm-check-updates
```

更新後は以下を確認してください。

```sh
npm run build
npm run check
npm run preview   # トップページと記事ページを表示して確認
```
