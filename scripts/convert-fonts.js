const fs = require('fs');
const path = require('path');
const Font = require('fonteditor-core').Font;
const ttf2woff2 = require('ttf2woff2');

const fontsDir = path.join(__dirname, '..', 'public', 'fonts');
const files = fs.readdirSync(fontsDir).filter((f) => f.endsWith('.otf'));

files.forEach((file) => {
  const filePath = path.join(fontsDir, file);
  const nameBase = file
    .replace(/Fontspring-DEMO-/, '')
    .replace(/theseasons-/, 'theseasons-')
    .replace(/\.otf$/i, '');

  const otfBuffer = fs.readFileSync(filePath);
  // parse OTF
  const font = Font.create(otfBuffer, {
    type: 'otf',
    hinting: true,
  });
  const ttfBuffer = Buffer.from(font.write({ type: 'ttf', hinting: true }));
  const ttfPath = path.join(fontsDir, `${nameBase}.ttf`);
  fs.writeFileSync(ttfPath, ttfBuffer);
  console.log('Wrote', ttfPath);

  // convert to woff2
  try {
    const woff2Buffer = ttf2woff2(ttfBuffer);
    const woff2Path = path.join(fontsDir, `${nameBase}.woff2`);
    fs.writeFileSync(woff2Path, woff2Buffer);
    console.log('Wrote', woff2Path);
  } catch (err) {
    console.error('woff2 conversion failed for', file, err);
  }
});

console.log('Conversion complete');
