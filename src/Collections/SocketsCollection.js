const m = require('mithril')
const SocketPieces = require('../models/SocketPiece')

const SocketsCollection = {
  currentGroup: '0',
  set: function (i) {
    SocketsCollection.currentGroup = i
  },
  oninit: SocketPieces.SocketData.state.fetch,
  view: function () {
    if (SocketsCollection.currentGroup === '0') {
      console.log('hit')
      return SocketPieces.SocketData.state.list
        .filter(item => item.groups.length === 0)
        .map(item => m(SocketPieces.Piece, { _id: item._id }))
    } else {
      console.log('hit2')
      return SocketPieces.SocketData.state.list
        .filter(item => item.groups.includes(SocketsCollection.currentGroup))
        .map(item => m(SocketPieces.Piece, { _id: item._id }))
    }
  }
}

module.exports = SocketsCollection
