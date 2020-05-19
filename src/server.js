'use strict'

require('dotenv').config()
const port = process.env.PORT || 3000

const express = require('express')
const app = express()

require('../routes/client')(app)

const server = app.listen(port, function () {
  const host = 'localhost'
  const port = server.address().port

  console.log('App listening at http://%s:%s', host, port)
})