import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const svg = readFileSync(join(root, 'public', 'favicon.svg'));

async function generate() {
  // apple-touch-icon 180x180
  await sharp(svg).resize(180, 180).png().toFile(join(root, 'public', 'apple-touch-icon.png'));
  console.log('Created apple-touch-icon.png (180x180)');

  // favicon-32x32
  await sharp(svg).resize(32, 32).png().toFile(join(root, 'public', 'favicon-32x32.png'));
  console.log('Created favicon-32x32.png (32x32)');

  // favicon-16x16
  await sharp(svg).resize(16, 16).png().toFile(join(root, 'public', 'favicon-16x16.png'));
  console.log('Created favicon-16x16.png (16x16)');

  // android-chrome sizes
  await sharp(svg).resize(192, 192).png().toFile(join(root, 'public', 'android-chrome-192x192.png'));
  console.log('Created android-chrome-192x192.png (192x192)');

  await sharp(svg).resize(512, 512).png().toFile(join(root, 'public', 'android-chrome-512x512.png'));
  console.log('Created android-chrome-512x512.png (512x512)');

  // Generate ICO (using 16, 32, 48 px PNGs combined)
  // Sharp can't make .ico directly, so we'll copy the 32x32 as favicon.ico placeholder
  // and rely on the SVG + PNG links for modern browsers
  const ico32 = await sharp(svg).resize(32, 32).png().toBuffer();

  // Build a minimal ICO file with 32x32 PNG
  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0);     // reserved
  icoHeader.writeUInt16LE(1, 2);     // ICO type
  icoHeader.writeUInt16LE(1, 4);     // 1 image

  const dirEntry = Buffer.alloc(16);
  dirEntry.writeUInt8(32, 0);        // width
  dirEntry.writeUInt8(32, 1);        // height
  dirEntry.writeUInt8(0, 2);         // color palette
  dirEntry.writeUInt8(0, 3);         // reserved
  dirEntry.writeUInt16LE(1, 4);      // color planes
  dirEntry.writeUInt16LE(32, 6);     // bits per pixel
  dirEntry.writeUInt32LE(ico32.length, 8);  // size of image data
  dirEntry.writeUInt32LE(22, 12);    // offset to image data (6 + 16 = 22)

  const ico = Buffer.concat([icoHeader, dirEntry, ico32]);
  writeFileSync(join(root, 'src', 'app', 'favicon.ico'), ico);
  console.log('Created src/app/favicon.ico');

  // Web manifest
  const manifest = {
    name: "Shuda Logistics",
    short_name: "Shuda",
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }
    ],
    theme_color: "#6B2D8B",
    background_color: "#ffffff",
    display: "standalone"
  };
  writeFileSync(join(root, 'public', 'site.webmanifest'), JSON.stringify(manifest, null, 2));
  console.log('Created site.webmanifest');
}

generate().catch(console.error);
