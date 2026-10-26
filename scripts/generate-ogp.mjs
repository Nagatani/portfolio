// SNS 共有用の OGP 画像（1200x630）を生成するスクリプト
//
// 使い方: node scripts/generate-ogp.mjs <背景画像> <出力先.jpg>
//   例: node scripts/generate-ogp.mjs public/images/tome.webp public/images/ogp.jpg
//
// 文字の描画に macOS のフォント（ヒラギノ明朝、Menlo）を使います。
import sharp from 'sharp';
const [src, out] = process.argv.slice(2);
const W = 1200, H = 630;
const chars = [...'猫のように生きたい'];
const vertical = chars.map((c, i) => `<text x="600" y="${150 + i * 44}" text-anchor="middle">${c}</text>`).join('');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs><linearGradient id="g" x1="0" y1="1" x2="0" y2="0">
    <stop offset="0" stop-color="hsl(177,66%,79%)" stop-opacity="0.3"/>
    <stop offset="1" stop-color="hsl(341,95%,92%)" stop-opacity="0.3"/>
  </linearGradient></defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <rect width="${W}" height="${H}" fill="#000" fill-opacity="0.15"/>
  <g font-family="Hiragino Mincho ProN, serif" font-size="38" fill="#fff" letter-spacing="4">${vertical}</g>
  <g transform="translate(48 66) rotate(-6)" font-family="Menlo, monospace" fill="#fff">
    <text font-size="44" font-weight="bold">@Nagatani</text>
    <text y="34" font-size="22">$ echo 'Hello, World!!'</text>
  </g>
  <text x="${W - 40}" y="${H - 32}" text-anchor="end" font-family="Menlo, monospace" font-size="22" fill="#fff" fill-opacity="0.85">nagatani.me</text>
</svg>`;
// トップページの背景と同じく、縦方向は 75% の位置で切り抜く
const resized = await sharp(src).resize({ width: W }).toBuffer({ resolveWithObject: true });
const top = Math.round((resized.info.height - H) * 0.75);
await sharp(resized.data).extract({ left: 0, top, width: W, height: H })
  .composite([{ input: Buffer.from(svg) }])
  .jpeg({ quality: 82, mozjpeg: true }).toFile(out);
console.log('ok');
