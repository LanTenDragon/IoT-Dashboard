const m = require('mithril')
const DNDGroup = require('../Collections/DNDGroupCollection')
const DNDInclusiveSocket = require('../Collections/DNDInclusiveSocketCollection')
const DNDExclusiveSocket = require('../Collections/DNDExclusiveSocketCollection')
const Layout = require('../models/Layout')

const SocketControls = {
  view: function () {
    return m(Layout,
      m('div',
        m('div', { class: 'w3-animate-opacity w3-row', id: 'socket-container', style: { height: '100%' } },
          [
            m('div', { class: 'w3-col w3-container w3-round-small w3-rightbar m5 l4', id: 'group-container', style: { height: '100%', overflow: 'auto' } },
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
                m('div', { class: 'w3-container' },
                  m(DNDGroup)
                )
              ]
            ),
            m('div', { class: 'w3-col w3-container w3-round-small w3-rightbar m5 l4', id: 'group-container', style: { height: '100%', overflow: 'auto' } },
              [
                m('header', { class: 'w3-animate-opacity w3-container' },
                  m('h5',
                    m('b',
                      [
                        m('i', { class: 'fa fa-dashboard' }),
                        ' Includes'
                      ]
                    )
                  )
                ),
                m(DNDInclusiveSocket)
              ]
            ),
            m('div', { class: 'w3-col w3-container w3-round-small w3-rightbar m5 l4', id: 'group-container', style: { height: '100%', overflow: 'auto' } },
              [
                m('header', { class: 'w3-animate-opacity w3-container' },
                  m('h5',
                    m('b',
                      [
                        m('i', { class: 'fa fa-dashboard' }),
                        ' Excludes'
                      ]
                    )
                  )
                ),
                m(DNDExclusiveSocket)
              ]
            )
          ]
        )
      )
    )
  }
}

module.exports = SocketControls
