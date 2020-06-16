const m = require('mithril')

const SocketData = {
  state: {
    list: [],
    fetch: function () {
      m.request({
        method: 'GET',
        url: 'http://localhost:8080/sockets'
      })
        .then(function (items) {
          SocketData.state.list = items
        })
    },
    updateState: function (socketId, status) {
      m.request({
        method: 'PUT',
        url: 'http://localhost:8080/sockets/' + socketId + '/state',
        body: { socketState: status ? 'on' : 'off' }
      })
        .then(function (items) {
          console.log(items)
          SocketData.state.list = items
        })
    }
  }
}

function Piece ({ attrs: { _id } }) {
  const i = SocketData.state.list.findIndex(x => x._id === _id)
  return {
    view: function () {
      return m('div',
        {
          class: 'w3-panel', style: { width: '48%' }
        },
        m('div', { class: 'w3-card-2' },
          m('div', { class: 'w3-row', style: { display: 'flex' } },
            [
              m('div', { class: 'w3-col s4 m5 l4' },
                m('div', { style: { height: '100%' } },
                  m('img', { class: 'w3-image', src: 'http://localhost:8080/img/' + SocketData.state.list[i].image, style: { width: '100%', height: '100%', margin: 'auto' } })
                )
              ),
              m('div', { class: 'w3-col s4 m5 l4' },
                m('div', { class: 'w3-container' },
                  m('p',
                    vnode.attrs.text
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
                            m('input', { type: 'checkbox' }),
                            m('span', { class: 'slider round' })
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
      )
    }
  }
}

module.exports = Piece
