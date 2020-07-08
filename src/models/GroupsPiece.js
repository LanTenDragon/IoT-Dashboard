const m = require('mithril')
const Sockets = require('../Collections/SocketsCollection')
const url = process.env.URL

function Piece () {
  return {
    view: function (vnode) {
      return m('div',
        {
          onclick: function () {
            Sockets.set(vnode.attrs._id)
          },
          class: vnode.attrs._id === Sockets.currentGroup ? 'w3-card-2 w3-blue' : 'w3-card-2'
        },
        m('div', { class: 'w3-row', style: { display: 'flex' } },
          [
            m('div', { class: 'w3-col s4 m5 l4' },
              m('div', { style: { height: '100%' } },
                m('img', { class: 'w3-image', src: url + '/img/' + vnode.attrs.image, style: { width: '100%', height: '100%', margin: 'auto' } })
              )
            ),
            m('div', { class: 'w3-col s4 m5 l4' },
              m('div', { class: 'w3-container' },
                m('p',
                  vnode.attrs.name
                )
              )
            ),
            m('div', { class: 'w3-col s4 m7 l4' },
              m('div', { class: 'w3-row', style: { height: '100%' } },
                m('div', { class: 'w3-row', style: { height: '100%' } },
                  m('div', { style: { display: 'flex', 'justify-content': 'space-around', 'align-items': 'center', 'flex-direction': 'row', height: '100%' } },
                    [
                      m('label', { class: 'switch', style: { margin: 'auto' } },
                        [
                          m('input', { type: 'checkbox' })
                        ]
                      ),
                      m('input', { type: 'checkbox', style: { margin: 'auto' } })
                    ]
                  )
                )
              )
            )
          ]
        )
      )
    }
  }
}

module.exports = Piece
