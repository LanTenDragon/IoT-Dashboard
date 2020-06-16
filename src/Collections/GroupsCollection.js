const m = require('mithril')
const GroupsPiece = require('../models/GroupsPiece')

const GroupData = {
  groups: {
    list: [],
    fetch: function () {
      m.request({
        method: 'GET',
        url: 'http://localhost:8080/groups'
      })
        .then(function (items) {
          GroupData.groups.list = items
        })
    }
  }
}

const GroupsCollection = {
  oninit: GroupData.groups.fetch(),
  view: function () {
    return GroupData.groups.list.map(function (item) {
      return m(GroupsPiece, item)
    })
  }
}

module.exports = GroupsCollection
