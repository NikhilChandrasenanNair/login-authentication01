// Root path
global.APP_ROOT_PATH = __dirname

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const db = require('../config/db')

const app = express()

mongoose.connect(db.MONGO_CONNECT_URL)

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
  res.send({
    message: 'Registered'
  })
})

app.listen(process.env.PORT || 8081, function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('Server Running')
  }
})
