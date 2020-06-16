const m = require('mithril')
const SocketPieces = require('../models/SocketPiece')

const SocketsCollection = {
  currentGroup: 1,
  set: function (i) {
    SocketsCollection.currentGroup = i
  },
  oninit: SocketPieces.SocketData.state.fetch,
  view: function () {
    let display = false
    SocketPieces.SocketData.state.list.map(item =>
      item.groups.map(item2 => {
        if (item2 === SocketsCollection.currentGroup) {
          display = true
        }
      })
    )

    if (display) {
      return SocketPieces.SocketData.state.list.map(item =>
        m(SocketPieces.Piece, { _id: item._id })
      )
    } else return m('p', 'Currently no sockets to display')
  }
}

module.exports = SocketsCollection
