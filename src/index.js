const m = require('mithril')
const Layout = require('./models/Layout')
const Overview = require('./Pages/Overview')
const SocketControls = require('./Pages/SocketControls')
const Management = require('./Pages/ManageSocketsGroups')
const AddGroups = require('./Pages/AddGroups')

m.route(document.body, '/Overview', {
  '/Overview': {
    render: function () {
      return m(Layout, m(Overview))
    }
  },
  '/Socket-Controls': {
    render: function () {
      return m(Layout, m(SocketControls))
    }
  },
  '/Add-Remove-Sockets': {
    render: function () {
      return m(Layout, m(Management))
    }
  },
  '/Add-Groups': {
    render: function () {
      return m(Layout, m(AddGroups))
    }
  }
})
