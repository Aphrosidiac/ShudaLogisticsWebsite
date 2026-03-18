import sharp from 'sharp';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const srcImage = join(root, 'public', 'favicon-source.png');

async function generate() {
  const canvasSize = 512;
  const padding = 60;
  const truckArea = canvasSize - padding * 2;

  // Resize source
  const truckResized = await sharp(srcImage)
    .resize(truckArea, truckArea, { fit: 'contain', background: { r: 230, g: 230, b: 230, alpha: 255 } })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { data, info } = truckResized;

  // Color threshold: background is light grey (R,G,B all > 200)
  // Truck is purple (R < 180, B > R, generally darker)
  // Convert truck pixels to white, background to transparent
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    const brightness = (r + g + b) / 3;

    if (brightness > 180) {
      // Background pixel — make transparent
      data[i] = 0;
      data[i + 1] = 0;
      data[i + 2] = 0;
      data[i + 3] = 0;
    } else {
      // Truck pixel — make white, with opacity based on how dark/saturated it is
      const opacity = Math.min(255, Math.round((220 - brightness) * 2.5));
      data[i] = 255;
      data[i + 1] = 255;
      data[i + 2] = 255;
      data[i + 3] = Math.max(0, Math.min(255, opacity));
    }
  }

  const whiteTruckBuffer = await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
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
    .composite([{
      input: whiteTruckBuffer,
      top: padding,
      left: padding,
    }])
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
