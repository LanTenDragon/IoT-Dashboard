const m = require('mithril')
const frontendUrl = process.env.FRONTEND + '/#!'
/* global location */

let active = 0
let tabs = 0

const viewOf = function (v) {
  return v.children[0] && typeof v.children[0].children === 'function'
    ? v.children[0].children : () => v.children
}

const Tab = {
  view: function ({ children, attrs: { tab = tabs++, link } }) {
    return m('button',
      {
        class: location.href === frontendUrl + link || location.href === frontendUrl + '/' + link
          ? 'w3-bar-item w3-button w3-padding w3-blue'
          : 'w3-bar-item w3-button w3-padding',
        type: 'button',
        onclick: function () {
          active = tab
          location.href = frontendUrl + link
        }
      },
      children
    )
  }
}

function Tabs ({ attrs: { initial = 0 } }) {
  active = initial
  return {
    view: function (v) {
      return (
        tabs = 0,
        viewOf(v)({
          Tab
        })
      )
    }
  }
}

const tabArray = {
  view: function () {
    return m(Tabs, [
      m(Tab, { link: 'Overview' }, 'Overview'),
      m(Tab, { link: 'Socket-Controls' }, 'Socket Controls'),
      m(Tab, { link: 'Add-Remove-Sockets' }, 'Manage Sockets'),
      m(Tab, { link: 'Add-Groups' }, 'Add Groups')
    ])
  }
}

module.exports = tabArray
