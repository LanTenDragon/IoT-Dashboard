const m = require('mithril')
const ControlsPiece = require('./ControlsPiece')

const GroupData = {
  groups: {
    list: [],
    fetch: function () {
      // m.request({
      //   method: 'GET',
      //   url: 'http://localhost:8080/group/get'
      // })
      //   .then(function (items) {
      //     GroupData.groups.list = items
      //   })
      GroupData.groups.list = [
        { imgpath: 'kitchen.jpg', text: 'Kitchen Group', group: 1, type: 'group' },
        { imgpath: 'gaming-setup.jpg', text: 'Kitchen Group 2', group: 2, type: 'group' }
      ]
    }
  }
}

const GroupsCollection = {
  oninit: GroupData.groups.fetch(),
  view: function () {
    return GroupData.groups.list.map(function (item) {
      return m(ControlsPiece, item)
    })
  }
}

module.exports = GroupsCollection
