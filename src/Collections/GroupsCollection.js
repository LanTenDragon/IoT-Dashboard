const m = require('mithril')
const GroupsPiece = require('../models/GroupsPiece')
const url = process.env.URL
/* global localStorage  */

const GroupData = {
  groups: {
    list: [],
    fetch: function () {
      m.request({
        method: 'GET',
        url: url + '/groups/belongingto/' + localStorage.getItem('userid')
      })
        .then(function (items) {
          GroupData.groups.list = items
          const ungrouped = {
            status: false,
            image: 'power-symbol.jpg',
            _id: '0',
            name: 'Ungrouped'
          }
          GroupData.groups.list.push(ungrouped)
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
