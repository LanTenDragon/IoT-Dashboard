const m = require('mithril')

function Piece () {
  return {
    view: function (vnode) {
      return m('div',
        {
          class: 'w3-panel', style: { width: '48%' }
        },
        m('div', { class: 'w3-card-2' },
          m('div', { class: 'w3-row', style: { display: 'flex' } },
            [
              m('div', { class: 'w3-col s4 m5 l4' },
                m('div', { style: { height: '100%' } },
                  m('img', { class: 'w3-image', src: 'img/' + vnode.attrs.imgpath, style: { width: '100%', height: '100%', margin: 'auto' } })
                )
              ),
              m('div', { class: 'w3-col s4 m5 l4' },
                m('div', { class: 'w3-container' },
                  m('p',
                    "hiiiii"
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
