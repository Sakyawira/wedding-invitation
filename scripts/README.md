Run the frame transparency script

1. Install sharp locally:

```bash
npm install --save-dev sharp
```

2. Run the script to convert `public/background.png` → `public/background-frame.png`:

```bash
node scripts/make-frame-transparent.js public/background.png public/background-frame.png
```

3. The app prefers `public/background-frame.png` if it exists — otherwise it will fall back to `public/background.png`.

Adjust the color threshold in `scripts/make-frame-transparent.js` if needed.
