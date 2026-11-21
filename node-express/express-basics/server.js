const express = require('express')
const app = express()

const port = 5000

app.get('/Wikrama', (req,res) => {
    res.write('Wikrama')
    res.end()
})

app.get('/About', (req, res) => {
    res.write('About')
    res.end()
})

app.listen(port, () => {
    console.log(` http://localhost:${port}`)
})