const m = require('mithril')
//const Sockets = require('../Collections/SocketsCollection')

function DNDGroupsPiece () {
  return {
    view: function (vnode) {
      return m('div',
        {
          onclick: function () { Sockets.set(vnode.attrs._id) },
          class: 'w3-card-2'
        },
        m('div', { class: 'w3-row', style: { display: 'flex' } },
          [
            m('div', { class: 'w3-col s4 m5 l4' },
              m('div', { style: { height: '100%' } },
                m('img', { class: 'w3-image', src: 'http://localhost:8080/img/' + vnode.attrs.image, style: { width: '100%', height: '100%', margin: 'auto' } })
              )
            ),
            m('div', { class: 'w3-col s4 m5 l4' },
              m('div', { class: 'w3-container' },
                m('p',
                  vnode.attrs.name
                )
              )
            )
          ]
        )
      )
    }
  }
}

module.exports = DNDGroupsPiece
