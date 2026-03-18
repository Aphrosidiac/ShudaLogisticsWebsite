import sharp from 'sharp';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const srcImage = join(root, 'public', 'favicon-source.png');

// Dilate (thicken) white pixels by radius — spreads lines outward
function dilate(data, width, height, radius) {
  const out = Buffer.alloc(data.length);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      let maxAlpha = 0;
      // Check all neighbors within radius
      for (let dy = -radius; dy <= radius; dy++) {
        for (let dx = -radius; dx <= radius; dx++) {
          const nx = x + dx, ny = y + dy;
          if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
            const nIdx = (ny * width + nx) * 4;
            if (data[nIdx + 3] > maxAlpha) {
              maxAlpha = data[nIdx + 3];
            }
          }
        }
      }
      out[idx] = 255;     // R
      out[idx + 1] = 255; // G
      out[idx + 2] = 255; // B
      out[idx + 3] = maxAlpha;
    }
  }
  return out;
}

async function generate() {
  const canvasSize = 512;
  const padding = 40; // less padding so truck is bigger in small icons
  const truckArea = canvasSize - padding * 2;

  // Resize source
  const { data, info } = await sharp(srcImage)
    .resize(truckArea, truckArea, { fit: 'contain', background: { r: 230, g: 230, b: 230, alpha: 255 } })
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Color threshold: extract truck (dark/purple pixels) as white on transparent
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    const brightness = (r + g + b) / 3;

    if (brightness > 180) {
      data[i] = 0; data[i + 1] = 0; data[i + 2] = 0; data[i + 3] = 0;
    } else {
      const opacity = Math.min(255, Math.round((220 - brightness) * 2.5));
      data[i] = 255; data[i + 1] = 255; data[i + 2] = 255;
      data[i + 3] = Math.max(0, Math.min(255, opacity));
    }
  }

  // Dilate the truck lines by 3px to make them bolder
  const dilated = dilate(data, info.width, info.height, 3);

  const whiteTruckBuffer = await sharp(dilated, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png()
    .toBuffer();

  // Purple rounded-square background
  const bgSvg = `<svg width="${canvasSize}" height="${canvasSize}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#7C3AED"/>
        <stop offset="100%" stop-color="#4A1D63"/>
      </linearGradient>
    </defs>
    <rect width="${canvasSize}" height="${canvasSize}" rx="96" fill="url(#bg)"/>
  </svg>`;

  const master = await sharp(Buffer.from(bgSvg))
    .composite([{ input: whiteTruckBuffer, top: padding, left: padding }])
    .png()
    .toBuffer();

  // Save all sizes
  await sharp(master).toFile(join(root, 'public', 'android-chrome-512x512.png'));
  console.log('Created android-chrome-512x512.png');

  await sharp(master).resize(192, 192).png().toFile(join(root, 'public', 'android-chrome-192x192.png'));
  console.log('Created android-chrome-192x192.png');

  await sharp(master).resize(180, 180).png().toFile(join(root, 'public', 'apple-touch-icon.png'));
  console.log('Created apple-touch-icon.png');

  await sharp(master).resize(32, 32).png().toFile(join(root, 'public', 'favicon-32x32.png'));
  console.log('Created favicon-32x32.png');

  await sharp(master).resize(16, 16).png().toFile(join(root, 'public', 'favicon-16x16.png'));
  console.log('Created favicon-16x16.png');

  // ICO
  const ico32 = await sharp(master).resize(32, 32).png().toBuffer();
  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0);
  icoHeader.writeUInt16LE(1, 2);
  icoHeader.writeUInt16LE(1, 4);
  const dirEntry = Buffer.alloc(16);
  dirEntry.writeUInt8(32, 0);
  dirEntry.writeUInt8(32, 1);
  dirEntry.writeUInt8(0, 2);
  dirEntry.writeUInt8(0, 3);
  dirEntry.writeUInt16LE(1, 4);
  dirEntry.writeUInt16LE(32, 6);
  dirEntry.writeUInt32LE(ico32.length, 8);
  dirEntry.writeUInt32LE(22, 12);
  writeFileSync(join(root, 'src', 'app', 'favicon.ico'), Buffer.concat([icoHeader, dirEntry, ico32]));
  console.log('Created favicon.ico');

  console.log('\nDone!');
}

generate().catch(console.error);
