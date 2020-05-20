const m = require('mithril')
const tabArray = require('./TabPiece')

const Layout = {
  view: function (vnode) {
    return m('',
      [
        m('meta', { charset: 'UTF-8' }),
        m('title',
          'IoT Dashboard'
        ),
        m('meta', { charset: 'UTF-8' }),
        m('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
        m('link', { rel: 'stylesheet', href: 'css/w3.css' }),
        m('link', { rel: 'stylesheet', href: 'css/toggle.css' }),
        m('link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway' }),
        m('link', {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
        }),
        m('button', {
          class: 'w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey',
          onclick: 'w3_open();'
        },
        [
          m('i', { class: 'fa fa-bars' }),
          ' Menu'
        ]
        ),
        m('nav', {
          class: 'w3-sidebar w3-collapse w3-grey',
          id: 'mySidebar',
          style: { 'z-index': '3', width: '250px', height: '100%' }
        },
        [
          m('br'),
          m('div', { class: 'w3-container w3-row' },
            [
              m('div', { class: 'w3-col s4' },
                m('img', {
                  class: 'w3-circle w3-margin-right',
                  src: 'images/avatar.png',
                  alt: '',
                  style: { width: '80px' }
                })
              ),
              m('div', { class: 'w3-col s8 w3-bar' },
                [
                  m('span',
                    [
                      'Welcome, ',
                      m('strong',
                        'Siang'
                      )
                    ]
                  ),
                  m('br'),
                  m('a', { class: 'w3-bar-item w3-button' },
                    m('i', { class: 'fa fa-user' })
                  ),
                  m('a', { class: 'w3-bar-item w3-button' },
                    m('i', { class: 'fa fa-cog' })
                  )
                ]
              )
            ]
          ),
          m('hr'),
          m('div', { class: 'w3-container' },
            m('h5',
              'Dashboard'
            )
          ),
          m('div', { class: 'w3-bar-block', id: 'tabPieceContainer' },
            m(tabArray)
          )
        ]
        ),
        m('div', {
          class: 'w3-overlay w3-hide-large',
          onclick: 'w3_close()',
          title: 'close side menu',
          id: 'myOverlay',
          style: { cursor: 'pointer' }
        }),
        m('div', { class: 'TabPieces w3-animate-opacity', id: 'w3-main', style: { height: '93%' } },
          m('div', { id: 'content-section', style: { 'margin-left': '250px', height: '100%' } },
            vnode.children
          )
        )
      ]
    )
  }
}

module.exports = Layout
