const m = require('mithril')
const Layout = require('./models/Layout')
const Overview = require('./Pages/Overview')
const SocketControls = require('./Pages/SocketControls')

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
      return m(Layout, m('', 'hi'))
    }
  }
})
