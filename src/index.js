const m = require('mithril')
const Layout = require('./models/Layout')
const Overview = require('./models/Overview')

m.route(document.body, '/Overview', {
  '/Overview': {
    render: function () {
      return m(Layout, m(Overview))
    }
  },
  '/Socket-Controls': {
    render: function () {
      return m(Layout, m(''))
    }
  }
})
