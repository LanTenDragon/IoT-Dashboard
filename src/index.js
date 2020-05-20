const m = require('mithril')
const piece = require('./models/ControlsPiece')

m.render(document.body, m(piece, { imgpath: 'stove.jpg', text: 'Stove' }))
