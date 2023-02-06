import { google } from "googleapis";

export const revalidate = 60;

export default async function handler(req, res) {
    const { q } = req.query;



    const client = new google.auth.JWT(
        process.env.GCP_CLIENT_EMAIL, 
        null, 
        process.env.GCP_PVT_KEY,
        ['https://www.googleapis.com/auth/spreadsheets']
    );

    try {
        await client.authorize();
    } catch (error) {
        return res.status(400).json({ error: true });
    }

    const gsapi = google.sheets({ version: 'v4', auth: client });
    const opt = {
        spreadsheetId: process.env.SHEET_ID,
        range: 'blogs'
    };

    let response;
    try {
        response = await gsapi.spreadsheets.values.get(opt);
    } catch (error) {
        return res.status(400).json({ error: true });
    }

    const [titles, ...blogs] = response.data.values;
    const formattedItems = blogs.map((row) => {
        const obj = {};
        row.forEach((field, index) => obj[titles[index]] = field);
        return obj;
    });

    const myObject = JSON.parse(JSON.stringify(formattedItems));

          // const searchObject = myObject.find((searchObject) => 
            //     searchObject.title === title || 
            //     searchObject.authorTitle === authorTitle)
            const searchObject = myObject.filter(searchObject => {
                const titleSearch = q ? searchObject.title.toLowerCase().includes(q.toLowerCase()) : false;
                const authorTitleSearch = q ? searchObject.authorTitle.toLowerCase().includes(q.toLowerCase()) : false;
                return titleSearch || authorTitleSearch;
            });
            

    
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            
            return res.json(searchObject);
}
