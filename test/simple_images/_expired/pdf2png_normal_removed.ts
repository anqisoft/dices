/* 
  deno run --unstable --allow-net --allow-read --allow-write pdf2png.ts
  deno run --allow-read --allow-write pdf2png.ts
*/

import * as path from "https://deno.land/std/path/mod.ts";
import { ensureDir, ensureDirSync } from "https://deno.land/std/fs/mod.ts";
import Converter from 'npm:@hckrnews/pdf2png';

import * as imagescript from "https://deno.land/x/imagescript@1.2.15/mod.ts";
const { Image } = imagescript;

// console.log(Deno.cwd());
const CURRENT_PATH = Deno.cwd().concat('\\').replace(/\\/g, '/');
const SOURCE_PATH = CURRENT_PATH.concat('../simple/');

const pdf2png = async (directory: string) => {
  for await (const dirEntry of Deno.readDir(directory)) {
    const filename = dirEntry.name;
    // console.log(filename);
    const filePath = path.join(directory, filename);
    const stats = Deno.statSync(filePath);
    if (stats.isDirectory) {
      await pdf2png(filePath);
    } else {
      const isFile = stats.isFile;
      const extname = isFile ? path.extname(filePath) : '';
      if (extname === '.pdf') {
        // const goalPath = filePath.replace(/\\/g, '/').replace('/simple/', '/simple_images/');
        const goalPath = directory.replace(/\\/g, '/').replace('/simple/', '/simple_images/').concat('/');
        // console.log({ filePath, goalPath });
        ensureDirSync(goalPath);
        Converter.create({
          file: filePath,
          output: goalPath
        }).convert();
        
        crop(path.join(goalPath, filename.replace('.pdf', '.png')));
      }
    }
  }
}

pdf2png(SOURCE_PATH);

async function crop(filename: string): void {
	const [originalImageData] = await Promise.all([
		Deno.readFile(filename),
	]);
	const originalImage = await Image.decode(originalImageData);
  
  const { width: originalWidth, height: originalHeight } = originalImage;
	
	// const originalWidth = originalImage.width;
	// const originalHeight = originalImage.height;
	// console.log(originalWidth, originalHeight);
  
  let left = 1, right = originalWidth, top = 1, bottom = originalHeight;
  const FIRST_PIXEL = originalImage.getPixelAt(1, 1);
  // console.log(FIRST_PIXEL);
  
  for(let x = 1; x <= originalWidth; ++x) {
    let find = false;
    for(let y = 1; y <= originalHeight; ++y) {
      if (originalImage.getPixelAt(x, y) !== FIRST_PIXEL) {
        find = true;
        left = x;
        break;
      }
    }
    if (find) { break; }
  }
	
  for(let x = originalWidth; x >= left; --x) {
    let find = false;
    for(let y = 1; y <= originalHeight; ++y) {
      if (originalImage.getPixelAt(x, y) !== FIRST_PIXEL) {
        find = true;
        right = x;
        break;
      }
    }
    if (find) { break; }
  }
  
  
  for(let y = 1; y <= originalHeight; ++y) {
    let find = false;
    for(let x = left; x <= right; ++x) {
      if (originalImage.getPixelAt(x, y) !== FIRST_PIXEL) {
        find = true;
        top = y;
        break;
      }
    }
    if (find) { break; }
  }
	
  for(let y = originalHeight; y >= top; --y) {
    let find = false;
    for(let x = left; x <= right; ++x) {
      if (originalImage.getPixelAt(x, y) !== FIRST_PIXEL) {
        find = true;
        bottom = y;
        break;
      }
    }
    if (find) { break; }
  }
  
	// crop(x, y, width, height)
	// const x = 0;
	// const y = 0;
	// const width = originalWidth;
	// const height = originalHeight;
	// const goalImage: Image = originalImage.crop(left, right, right - left + 1, bottom - top + 1);
  left -= 1;
  top -= 1;
  const width = right - left;
  const height = bottom - top;
  // console.log({ left, right, top, bottom, width, height, originalWidth, originalHeight });
  
  // 导出jpg成功（如果先crop后导出，则会报错：y越界）
	// const goalImage2: Image = new Image(width, height);
  // for(let x = 1; x <= width; ++x) {
  //   for(let y = 1; y <= height; ++y) {
  //     goalImage2.setPixelAt(x, y, originalImage.getPixelAt(x+left, y+top));
  //   }
  // }
	// const encoded2 = await goalImage2.encodeJPEG();
	// await Deno.writeFile(filename.replace('.png', '_cropped.jpg'), encoded2);
  
  // 这段导出的png图片为空白（尺寸合适，但所有像素都是空白）
	// const goalImage: Image = originalImage.crop(left, right, right - left, bottom - top);
	// const goalFileFullName: string = filename.replace('.png', '_cropped.png');
	// const encoded = await goalImage.encode(1, {creationTime: 0, software: ''});
	// await Deno.writeFile(goalFileFullName, encoded);
  
	const goalImage: Image = new Image(width, height);
  for(let x = 1; x <= width; ++x) {
    for(let y = 1; y <= height; ++y) {
      goalImage.setPixelAt(x, y, originalImage.getPixelAt(x+left, y+top));
    }
  }
	const encoded =await goalImage.encode(1, {creationTime: 0, software: ''});
	// await Deno.writeFile(filename.replace('.png', '_cropped.png'), encoded);
	await Deno.writeFile(filename, encoded);
}