const m = require('mithril')
const SocketPiece = require('../models/SocketPiece')

const SocketData = {
  sockets: {
    list: [],
    fetch: function () {
      m.request({
        method: 'GET',
        url: 'http://localhost:8080/sockets'
      })
        .then(function (items) {
          SocketData.sockets.list = items
        })
    }
  }
}

const SocketsCollection = {
  currentGroup: 1,
  set: function (i) {
    SocketsCollection.currentGroup = i
  },
  oninit: SocketData.sockets.fetch(),
  view: function () {
    let display = false
    SocketData.sockets.list.map(function (item) {
      item.groups.map(function (item2) {
        if (item2 === SocketsCollection.currentGroup) {
          display = true
        }
      })
    })

    if (display) {
      return SocketData.sockets.list.map(function (item) {
        return m(SocketPiece, item)
      })
    } else return m('p', 'Currently no sockets to display')
  }
}

module.exports = SocketsCollection
