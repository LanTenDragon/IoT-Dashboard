const m = require('mithril')
const Overview = require('./pages/Overview')
const SocketControls = require('./pages/SocketControls')
const Management = require('./pages/ManageSocketsGroups')
const AddGroups = require('./pages/AddGroups')
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
  '/Add-Remove-Sockets': {
    onmatch: function () {
      if (!localStorage.getItem('token')) m.route.set('/Login')
      else return Management
    }
  },
  '/Add-Groups': {
    onmatch: function () {
      if (!localStorage.getItem('token')) m.route.set('/Login')
      else return AddGroups
    }
  },
  '/Login': require('./pages/Login'),
  '/Register': require('./pages/Register')
})
