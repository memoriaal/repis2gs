const express = require('express')
const {google} = require('googleapis')

const app = express()

app.get('/', (req, res) => {
    res.send('foo')
})

const port = 1337
app.listen(port, (req, res) => {
    console.log('Running on ', port)
})