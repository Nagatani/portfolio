# コンテンツの編集

## 記事（Markdownページ）を追加する

1. `src/pages/<slug>.md`を作成し、frontmatterを書く。ファイル名がそのままURL（`/<slug>`）になります。

   ```markdown
   ---
   title: About Something
   description: "ページの説明（見出し下に表示）"
   cover_image: /images/article/xxxx.jpg
   ---

   本文（Markdown）
   ```

   レイアウトは`svelte.config.js`のmdsvex設定により、`src/pages/_article.svelte`が自動で適用されます。
2. カバー画像を`public/images/article/`に置く。
3. 必要に応じて導線を追加する。
   - トップページのカード: `src/pages/_posts.svelte`の`links`（パス、英題、和題、サムネイル、一言）
   - ナビゲーションメニュー: `src/pages/_module.svelte`の`links`（パス、表示名）

### frontmatterの項目

| 項目 | 用途 |
| --- | --- |
| `title` | 記事タイトル。ページの`<title>`の先頭にも付きます |
| `description` | タイトル下に表示する説明 |
| `cover_image` | 記事上部のカバー画像のパス（`public/`からの絶対パス） |

## トップページを編集する

トップページ（`src/pages/index.svelte`）は以下の部品を上から順に並べています。

| 部品 | 内容 |
| --- | --- |
| `_hero.svelte` | 背景画像とキャッチコピー |
| `_lead.svelte` | 自己紹介文（縦書き） |
| `_paper.svelte` | 名刺セクション（`_namecard.svelte`を表示） |
| `_posts.svelte` | 記事カード一覧 |
| `_footer.svelte` | フッター |

連絡先やSNSのリンクは`_namecard.svelte`にあります。

## スタイル

- 色・余白・幅などのデザイントークンは`src/style/_variables.scss`のCSSカスタムプロパティで管理しています。
- グローバルスタイル（`src/style/index.scss`）は`src/main.ts`でimportしています。
- コンポーネント固有のスタイルは各`.svelte`ファイル内の`<style lang="scss">`に書きます。
- フォントは`index.html`でGoogle Fonts（Azeret Mono / BIZ UDGothic / BIZ UDPMincho）を読み込んでいます。

## 画像

`public/`以下に置いたファイルは、ビルド時にそのまま`dist/client/`へコピーされ、`/images/...`のような絶対パスで参照できます。
