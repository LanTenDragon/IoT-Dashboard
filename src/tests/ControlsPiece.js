const mq = require('mithril-query')
const o = require('ospec')
const Piece = require('../models/ControlsPiece')

o.spec('Piece', function () {
  o("says 'Hello, world!' when `type` is `hello`", function () {
    const out = mq(Piece, { imgpath: 'stove.jpg', text: 'Kitchen' })
    out.should.not.have('img')
  })
})
