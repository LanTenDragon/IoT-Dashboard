const m = require('mithril')
const DNDGroupsPiece = require('../models/DNDGroupsPiece')
const DND = require('mithril-dnd')
m(DND.mirror)

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

const DNDGroupsCollection = {
  oninit: GroupData.groups.fetch(),
  view: function () {
    return GroupData.groups.list.map(function (item) {
      return m(DNDGroupsPiece, item)
    })
  }
}

module.exports = DNDGroupsCollection
