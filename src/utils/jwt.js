const JavaScriptWebToken = require('jsonwebtoken')

const jwt = new JavaScriptWebToken({
  crypto: {
    algorithm: 'HS512',
    secret: process.env.TOKEN_SECRET || 'rand'
  }
})

module.exports = jwt
