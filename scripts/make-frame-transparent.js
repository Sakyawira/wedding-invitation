// Usage: node scripts/make-frame-transparent.js public/background.png public/background-frame.png
// This script uses sharp to convert a near-uniform background color to transparent.
// It performs a simple alpha channel mapping by thresholding luminance.

const fs = require('fs');
const path = require('path');

async function main() {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.error('Usage: node make-frame-transparent.js <input> <output>');
    process.exit(1);
  }
  const [input, output] = args;
  try {
    const sharp = require('sharp');

    // Read the input image and compute alpha by thresholding based on greenish background
    const img = sharp(input).ensureAlpha();
    const { width, height } = await img.metadata();

    const buffer = await img.raw().toBuffer();
    const out = Buffer.alloc(buffer.length); // RGBA

    for (let i = 0; i < buffer.length; i += 4) {
      const r = buffer[i];
      const g = buffer[i + 1];
      const b = buffer[i + 2];
      const a = buffer[i + 3];

      // Simple heuristic: if color is near the existing pale green (217,226,209)
      const dr = r - 217;
      const dg = g - 226;
      const db = b - 209;
      const dist = Math.sqrt(dr * dr + dg * dg + db * db);

      // If within threshold, make it transparent
      if (dist < 40) {
        out[i] = r;
        out[i + 1] = g;
        out[i + 2] = b;
        out[i + 3] = 0; // transparent
      } else {
        out[i] = r;
        out[i + 1] = g;
        out[i + 2] = b;
        out[i + 3] = a;
      }
    }

    await sharp(out, { raw: { width, height, channels: 4 } })
      .png()
      .toFile(output);

    console.log('Wrote', output);
  } catch (err) {
    console.error('Error: make sure `sharp` is installed (npm install sharp)');
    console.error(err);
    process.exit(1);
  }
}

main();
