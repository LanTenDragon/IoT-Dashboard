const m = require('mithril')
const Overview = require('./pages/Overview')
const SocketControls = require('./pages/SocketControls')
const PowerUsage = require('./pages/PowerUsage')
/* global localStorage */

m.route(document.body, '/Login', {
  '/Overview': {
    onmatch: function () {
      if (!localStorage.getItem('token')) m.route.set('/Login')
      else return Overview
    }
  },
  '/Socket-Controls': {
    onmatch: function () {
      if (!localStorage.getItem('token')) m.route.set('/Login')
      else return SocketControls
    }
  },
  '/Power-Usage': {
    onmatch: function () {
      if (!localStorage.getItem('token')) m.route.set('/Login')
      else return PowerUsage
    }
  },
  '/Login': require('./pages/Login'),
  '/Register': require('./pages/Register')
})
