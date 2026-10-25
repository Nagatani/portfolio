// 画像を WebP に変換・縮小するスクリプト
//
// 使い方:
//   記事用（カバー 1600px と カード用サムネイル 800px を生成）
//     npm run image -- article <元画像> <名前>
//     → public/images/article/<名前>.webp, public/images/article/<名前>-thumb.webp
//
//   任意のサイズで 1 枚生成
//     npm run image -- <元画像> <出力先.webp> <最大幅px>

import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

const QUALITY = 75;

async function convert(src, dest, width) {
	await fs.mkdir(path.dirname(dest), { recursive: true });
	const info = await sharp(src)
		.rotate() // EXIF の向きを反映
		.resize({ width, withoutEnlargement: true })
		.webp({ quality: QUALITY })
		.toFile(dest);
	const before = (await fs.stat(src)).size;
	console.log(
		`${dest}  ${info.width}x${info.height}  ${Math.round(before / 1024)}KB → ${Math.round(info.size / 1024)}KB`
	);
}

const [mode, ...args] = process.argv.slice(2);

if (mode === 'article' && args.length === 2) {
	const [src, name] = args;
	const dir = 'public/images/article';
	await convert(src, `${dir}/${name}.webp`, 1600);
	await convert(src, `${dir}/${name}-thumb.webp`, 800);
} else if (mode && args.length === 2) {
	const [dest, width] = args;
	await convert(mode, dest, Number(width));
} else {
	console.error('使い方:');
	console.error('  npm run image -- article <元画像> <名前>');
	console.error('  npm run image -- <元画像> <出力先.webp> <最大幅px>');
	process.exit(1);
}
