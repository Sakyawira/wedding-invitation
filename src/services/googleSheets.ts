// Google Forms service - no API key needed!
interface GuestbookEntry {
  name: string;
  message: string;
  timestamp: string;
}

class GoogleFormsService {
  private readonly formUrl: string;
  private readonly nameFieldId: string;
  private readonly messageFieldId: string;

  constructor() {
    // These come from your Google Form
    this.formUrl = (import.meta.env.VITE_GOOGLE_FORM_URL as string) || '';
    this.nameFieldId = (import.meta.env.VITE_GOOGLE_FORM_NAME_FIELD_ID as string) || '';
    this.messageFieldId = (import.meta.env.VITE_GOOGLE_FORM_MESSAGE_FIELD_ID as string) || '';
  }

  async appendEntry(entry: GuestbookEntry): Promise<boolean> {
    try {
      console.log('Attempting to submit to Google Form:', entry);

      // Create form data
      const formData = new FormData();
      formData.append(`entry.${this.nameFieldId}`, entry.name);
      formData.append(`entry.${this.messageFieldId}`, entry.message);

      const response = await fetch(this.formUrl, {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Important for Google Forms
      });

      console.log('Form submission response status:', response.status);

      // With no-cors, we can't read the response, but if no error is thrown, it worked
      return true;
    } catch (error) {
      console.error('Error submitting to Google Form:', error);
      return false;
    }
  }
  // Note: CSV-reading feature removed — entries are submitted via Google Form only.
}

export const googleSheetsService = new GoogleFormsService();
export type { GuestbookEntry };
