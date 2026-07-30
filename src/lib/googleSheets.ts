import { google } from "googleapis";
import { IEnquiry } from "@/models/Enquiry";

export async function appendEnquiryToSheets(enquiry: IEnquiry): Promise<boolean> {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  if (!clientEmail || !privateKey || !spreadsheetId) {
    console.warn(
      "[Google Sheets] Skipped: GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY, or GOOGLE_SHEET_ID is missing in environment variables."
    );
    return false;
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const formattedDate = new Date(enquiry.createdAt || Date.now()).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const rowData = [
      formattedDate,
      enquiry.name || "",
      enquiry.phone || "",
      enquiry.email || "",
      enquiry.subject || "",
      enquiry.message || "",
      enquiry.status || "new",
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:G", // Appends to Sheet1 or default first sheet
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [rowData],
      },
    });

    return true;
  } catch (error) {
    console.error("[Google Sheets Append Error]:", error);
    return false;
  }
}
