// Root path
global.APP_ROOT_PATH = __dirname

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const passport = require('passport')
const flash = require('connect-flash')
const session = require('express-session')

const db = require('../config/db')

const app = express()

mongoose.connect(db.MONGO_CONNECT_URL, function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('connected to the database')
  }
})

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.use(session({
  secret: 'thisisasecret', // session secret
  resave: true,
  saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

require('../config/passport')(passport)
require('../routes/user')(app, passport)

app.listen(process.env.PORT || 8081, function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('Server Running')
  }
})
