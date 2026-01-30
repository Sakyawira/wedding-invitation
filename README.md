# Mobile Wedding Invitation

Concise, mobile-first wedding invitation web app built with React + TypeScript and Vite.

Key features

- Mobile-optimized invitation UI with timeline and gallery
- Image gallery (react-photoswipe-gallery)
- Location map integration (react-naver-maps) — requires a Naver Maps client ID
- Guestbook form that submits responses directly to Google Forms (no server)
- Optional Firebase hooks in the repo for likes/advanced features (not required)

Quick start

1. Clone the repo

```bash
git clone https://github.com/your-username/wedding-invitation.git
cd wedding-invitation
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` (copy `.env.sample`) and set required variables:

```env
# Naver Maps client id (if using map features)
VITE_APP_NAVERMAPS_CLIENT_ID=your_naver_client_id

# Google Forms (guestbook) — Form submit URL and field IDs
VITE_GOOGLE_FORM_URL=https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse
VITE_GOOGLE_FORM_NAME_FIELD_ID=123456789
VITE_GOOGLE_FORM_MESSAGE_FIELD_ID=987654321
```

4. Run the dev server

```bash
npm run dev
```

Build & preview

```bash
npm run build
npm run preview
```

Notes

- The app submits guestbook entries directly to Google Forms; it no longer reads or displays responses from Google Sheets/CSV.
- `VITE_*` env variables are exposed in the client bundle — do not store secrets here.
- For production-grade handling (validation, spam protection, private storage), add a server-side endpoint.

License

This project is released under the MIT License. See the `LICENSE` file for details.
