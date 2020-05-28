const m = require('mithril')
const Sockets = require('../Collections/SocketsCollection')
const Groups = require('../Collections/GroupsCollection')

const SocketControls = {
  view: function () {
    return m('',
      [
        m('header', { class: 'w3-animate-opacity w3-container' },
          m('h5',
            m('b',
              [
                m('i', { class: 'fa fa-dashboard' }),
                ' Socket Controls'
              ]
            )
          )
        ),
        m('div', { id: 'socket-container', class: 'w3-animate-opacity w3-row', style: { height: '100%' } },
          [
            m('div', {
              class: 'w3-col w3-container w3-round-small w3-rightbar m5 l4',
              id: 'group-container',
              style: { height: '100%', overflow: 'auto' }
            },
            m(Groups)
            ),
            m('div', {
              class: 'w3-col w3-container m7 l8',
              id: 'switch-container',
              style: { height: '100%', display: 'flex', 'flex-wrap': 'wrap', 'align-items': 'flex-start', 'flex-direction': 'row', overflow: 'auto' }
            },
            m(Sockets)
            )
          ]
        )
      ]
    )
  }
}

module.exports = SocketControls
