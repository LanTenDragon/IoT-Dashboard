const m = require('mithril')
const SocketPiece = require('./SocketPiece')

const SocketData = {
  sockets: {
    list: [],
    fetch: function () {
      // m.request({
      //   method: 'GET',
      //   url: 'http://localhost:8080/socket/get'
      // })
      //   .then(function (items) {
      //     SocketData.sockets.list = items
      //   })
      SocketData.sockets.list = [
        { imgpath: 'stove.jpg', text: 'Stove', group: [1, 2] },
        { imgpath: 'toaster.jpg', text: 'Toaster', group: [2] }
      ]
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
    return SocketData.sockets.list.map(function (item) {
      let display = false
      item.group.map(function (item2) {
        if (item2 === SocketsCollection.currentGroup) {
          display = true
        }
      })
      if (display) {
        return m(SocketPiece, item)
      }
    })
  }
}

module.exports = SocketsCollection
