// Include the google-spreadsheet library 
const {GoogleSpreadsheet} = require('google-spreadsheet')
const credentials = require('./credentials.json')
const SPREADSHEET_ID = '1Dx-Guk0dt00on_RoOyZ0Ps0XTEAnPbCbYHMa16g6mVM'

// Create a reference to the spreadsheet
const doc = new GoogleSpreadsheet(SPREADSHEET_ID)

const accessSheet = async () => {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    // console.log(doc.sheetsByIndex)
    const worksheet = doc.sheetsByIndex[0]
    const rows = await worksheet.getRows()
    rows.forEach((row) => {
      console.log(row.persoon, row.eesnimi, row.qr, row.memo)
    })

    console.log(worksheet)
    // watch the spreadsheet for updates
    // worksheet.watchRange('A1:B10', (err, row, column) => {
  
    //   if (err) {
    //     console.log(err);
    //   }
  
    //   // log out any updates
    //   console.log('Updates detected in range A1:B10, data was: ', row, column);
    // });

}

accessSheet()

