import { google } from "googleapis";

export const revalidate = 60; // revalidate this page every 60 seconds
export default function handler(req, res) {
        const { slug } = req.query

        const client = new google.auth.JWT(
            process.env.GCP_CLIENT_EMAIL, 
            null, 
            process.env.GCP_PVT_KEY,
            ['https://www.googleapis.com/auth/spreadsheets']
        );

        client.authorize(async function(err, tokens) {
            if (err) {
                return res.status(400).send(JSON.stringify({error: true}));
            }

            const gsapi = google.sheets({version:'v4', auth: client});

            //CUSTOMIZATION FROM HERE
            const opt = {
                spreadsheetId: process.env.SHEET_ID,
                range: 'events'
            };

           

            const response = await gsapi.spreadsheets.values.get(opt);
            console.log(response);

            // return res.status(400).send(JSON.stringify({error: false, data: data.data.values}));
            const [titles, ...events] = response.data.values;
        
            const formattedItems = events.map((row) => {
             const obj = {}
             row.forEach((field, index) => obj[titles[index]] = field)
                 return obj;
            });


            for(var i = 0; i < formattedItems.length; i++){
                var obj = formattedItems[i];
                for(var prop in obj){
                    if(obj.hasOwnProperty(prop) && obj[prop] !== null && !isNaN(obj[prop])){
                        obj[prop] = +obj[prop];   
                    }
                }
            }
          
            const myObject = JSON.parse(JSON.stringify(formattedItems));
            
            const slugObject = myObject.find((slugObject) => slugObject.slug === (slug))

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            
            return res.json(slugObject);
        
            
            


        });
  
}