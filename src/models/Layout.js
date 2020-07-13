const m = require('mithril')
const tabArray = require('./TabPiece')
/* global localStorage */

const Layout = {
  view: function (vnode) {
    return m('',
      [
        m('button', {
          class: 'w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey',
          onclick: function () {
            if (mySidebar.style.display === 'block') {
              mySidebar.style.display = 'none'
              overlayBg.style.display = 'none'
            } else {
              mySidebar.style.display = 'block'
              overlayBg.style.display = 'block'
            }
          }
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
                  src: process.env.URL + '/img/avatar.png',
                  alt: '',
                  style: { width: '60px' }
                })
              ),
              m('div', { class: 'w3-col s8 w3-bar' },
                [
                  m('span',
                    [
                      'Welcome, ',
                      m('strong',
                        localStorage.getItem('username')
                      )
                    ]
                  ),
                  m('br')
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
          onclick: function () {
            mySidebar.style.display = 'none'
            overlayBg.style.display = 'none'
          },
          title: 'close side menu',
          id: 'myOverlay',
          style: { cursor: 'pointer' }
        }),
        m('div', { class: 'TabPieces w3-animate-opacity', style: { height: '93%' } },
          m('div', { class: 'w3-main', id: 'content-section', style: { 'margin-left': '250px', height: '100%' } },
            vnode.children
          )
        )
      ]
    )
  }
}

module.exports = Layout
