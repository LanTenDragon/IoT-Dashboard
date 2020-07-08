'use strict'

require('dotenv').config({ path: '.env.' + process.env.NODE_ENV })
const Logger = require('./logger')
const port = process.env.PORT || 80

const express = require('express')
const app = express()

require('../routes/client')(app)

const server = app.listen(port, function () {
  const host = 'localhost'
  const port = server.address().port

  Logger('App listening at http://' + host + ':' + port)
})
