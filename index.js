const express = require('express')
const {google} = require('googleapis')

const app = express()
const port = 8080

app.get('/', (req, res) => {
    console.log(`Served on port ${port}`)
    res.send('foo')
})

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`)
})