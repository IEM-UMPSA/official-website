import { google } from "googleapis";

export const revalidate = 60; // revalidate this page every 60 seconds
export default function handler(req, res) {
const client = new google.auth.JWT(
process.env.GCP_CLIENT_EMAIL,
null,
process.env.GCP_PVT_KEY,
["https://www.googleapis.com/auth/spreadsheets"]
);

client.authorize(async function (err, tokens) {
if (err) {
return res.status(400).send(JSON.stringify({ error: true }));
}

const gsapi = google.sheets({ version: "v4", auth: client });

//CUSTOMIZATION FROM HERE
const opt = {
  spreadsheetId: process.env.SHEET_ID,
  range: "jobs",
};

const response = await gsapi.spreadsheets.values.get(opt);
const [titles, ...announcements] = response.data.values;

const formattedItems = announcements.map((row) => {
  const obj = {};
  row.forEach((field, index) => (obj[titles[index]] = field));
  return obj;
});

const myObject = JSON.parse(JSON.stringify(formattedItems));

const { emcee } = req.body; // Assuming that the name of the emcee is passed in the request body

// Find the row corresponding to the selected emcee
const rowIndex = formattedItems.findIndex((row) => row.Name === emcee);

if (rowIndex === -1) {
  return res.status(400).send(JSON.stringify({ error: true }));
}

// Increment the vote count for the selected emcee
const currentVotes = parseInt(formattedItems[rowIndex]["Votes"]);
const newVotes = currentVotes + 1;

// Update the corresponding cell in the spreadsheet with the new vote count
const updateRequest = {
  spreadsheetId: process.env.SHEET_ID,
  range: `jobs!C${rowIndex + 2}`,
  valueInputOption: "USER_ENTERED",
  resource: {
    values: [[newVotes]],
  },
};
await gsapi.spreadsheets.values.update(updateRequest);

res.statusCode = 200;
res.setHeader("Content-Type", "application/json");
return res.json({ success: true });
});
}