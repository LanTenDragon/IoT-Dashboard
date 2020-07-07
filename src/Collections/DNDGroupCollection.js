const m = require('mithril')
const DNDGroupsPiece = require('../models/DNDGroupsPiece')
const DND = require('mithril-dnd')
const url = process.env.URL || 'http://localhost:3001'
m(DND.mirror)

const GroupData = {
  groups: {
    list: [],
    fetch: function () {
      m.request({
        method: 'GET',
        url: url + '/groups'
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
