const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const expressSession = require('express-session')
const expressValidator = require('express-validator')
const passport = require('passport')
const mongo = require('mongodb')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/planit', { useNewUrlParser: true }).then(connection => console.log('connected to planit db')).catch(errors => console.log('error connecting to planit api'))
const db = mongoose.connection

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(passport.session())



app.use(require('./routes/indexRoutes'))


app.listen(4000, (req, res) => {
    console.log("port 4000 working")
})