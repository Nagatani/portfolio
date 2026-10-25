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
2. カバー画像をWebPに変換して`public/images/article/`に出力する（詳しくは下記「画像」を参照）。

   ```sh
   npm run image -- article ~/Downloads/photo.jpg <名前>
   ```

   frontmatterの`cover_image`には`/images/article/<名前>.webp`を指定します。
3. 必要に応じて導線を追加する。
   - トップページのカード: `src/pages/_posts.svelte`の`links`（パス、英題、和題、サムネイル、一言）。サムネイルには`/images/article/<名前>-thumb.webp`を指定します
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

### 画像の変換（`npm run image`）

表示速度のため、画像はWebPに変換し、表示サイズに合わせて縮小してから置きます。
変換には`scripts/optimize-image.mjs`（`sharp`を使用、品質75）を使います。

| コマンド | 出力 |
| --- | --- |
| `npm run image -- article <元画像> <名前>` | `public/images/article/<名前>.webp`（幅1600px、記事カバー用）と`<名前>-thumb.webp`（幅800px、カード用） |
| `npm run image -- <元画像> <出力先.webp> <最大幅px>` | 指定した幅で1枚出力（元画像より大きくはしません） |

元画像（カメラやUnsplashのJPEGなど）はリポジトリに置かず、変換後のWebPだけをコミットします。

### 画像ごとのサイズの目安

| 用途 | 幅 | 例 |
| --- | --- | --- |
| 記事カバー | 1600px | `article/*.webp` |
| トップページのカード | 800px | `article/*-thumb.webp` |
| 全画面の背景 | 1920〜2400px | `tome.webp`、`bg.webp` |
| 名刺の写真 | 400px | `author.webp` |
| SNSアイコン | 120px | `tw_prof.webp`、`gh_prof.webp` |

### `<img>`タグの書き方

- 最初の画面に表示されない画像には`loading="lazy" decoding="async"`を付け、スクロールしたときに読み込みます。
- 記事カバーのように最初に目に入る画像には`fetchpriority="high"`を付けます。
- `width`と`height`を指定し、読み込み時のレイアウトのずれを防ぎます。
