const m = require('mithril')
const url = process.env.URL
/* global localStorage */

const SocketData = {
  state: {
    list: [],
    fetch: function () {
      m.request({
        method: 'GET',
        url: url + '/sockets/belongingto/' + localStorage.getItem('userid')
      })
        .then(function (items) {
          SocketData.state.list = items
        })
    },
    updateState: function (socketId, status) {
      m.request({
        method: 'PUT',
        url: url + '/sockets/' + socketId + '/state',
        body: {
          userid: localStorage.getItem('userid'),
          socketState: status ? 'on' : 'off'
        }
      })
        .then(function (items) {
          SocketData.state.list = items
        })
    }
  }
}

function Piece () {
  return {
    view: function (vnode) {
      const i = SocketData.state.list.findIndex(x => x._id === vnode.attrs._id)
      return m('div',
        {
          class: 'w3-panel', style: { width: '48%' }
        },
        m('div', { class: 'w3-card-2' },
          m('div', { class: 'w3-row', style: { display: 'flex' } },
            [
              m('div', { class: 'w3-col s4 m5 l4' },
                m('div', { style: { height: '100%' } },
                  m('img', { class: 'w3-image', src: url + '/img/' + SocketData.state.list[i].image, style: { width: '100%', height: '100%', margin: 'auto' } })
                )
              ),
              m('div', { class: 'w3-col s4 m5 l4' },
                m('div', { class: 'w3-container' },
                  m('p',
                    SocketData.state.list[i].name
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
                            m('button', { onclick: () => SocketData.state.updateState(SocketData.state.list[i]._id, !SocketData.state.list[i].status) }, SocketData.state.list[i].status ? 'On' : 'Off')
                          ]
                        )
                      ]
                    )
                  )
                )
              )
            ]
          )
        )
      )
    }
  }
}

module.exports = { Piece, SocketData }
