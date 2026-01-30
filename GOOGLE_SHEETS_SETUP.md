# Google Sheets (Deprecated)

The project previously included an option to read guestbook responses directly from Google Sheets (CSV export or Sheets API). That feature has been removed and is no longer supported in this repository.

If you previously followed this guide, you can now rely on Google Forms submissions only. See `GOOGLE_FORMS_SETUP.md` for the current instructions on configuring form submission.

If you need to restore server-side reading of responses in the future, consider implementing a server endpoint that uses authenticated access to the Sheets API and sanitizes any output before display.
