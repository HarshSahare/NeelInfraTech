import { google } from "googleapis";

export async function POST(req: Request) {
  const { sheetId, values } = await req.json();

  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_CLIENT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({
    version: "v4",
    auth,
  });

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: "Sheet1",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [values],
    },
  });

  return Response.json({ success: true });
}
