const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



app.use(require('./routes/indexRoutes'))


app.listen(4000, (req, res) => {
    console.log("port 4000 working")
})