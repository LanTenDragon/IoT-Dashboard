const m = require('mithril')
const Layout = require('../models/Layout')
const url = process.env.URL
/* global localStorage */

const UsageData = {
  data: {
    list: [],
    fetch: () => {
      m.request({
        method: 'GET',
        url: url + '/statistics/' + localStorage.getItem('userid') + '/power'
      })
        .then((res) => {
          UsageData.data.list = res
        })
    }
  }
}

const PowerUsage = {
  oninit: UsageData.data.fetch,
  view: function () {
    return m(Layout, { class: 'w3-main' },
      m('div', { class: 'w3-container' },
        [
          m('header', { class: 'w3-container' },
            m('h5',
              m('b',
                [
                  m('i', { class: 'fa fa-dashboard' }),
                  ' Power Usage of Individual Sockets ( Highest to Lowest )'
                ]
              )
            )
          ),
          m('table', { class: 'w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white' },
            m('tbody',
              [
                m('tr',
                  [
                    m('td',
                      m('b', 'Socket Name')
                    ),
                    m('td',
                      m('b', 'Watts')
                    )
                  ]
                ),
                UsageData.data.list === []
                  ? m('tr',
                    m('td',
                      'No data yet...Please Check back later!'
                    ),
                    m('td',
                      ''
                    )
                  )
                  : UsageData.data.list.map(item => {
                    m('tr',
                      [
                        m('td',
                          item.name
                        ),
                        m('td',
                          item.total
                        )
                      ]
                    )
                  })
              ]
            )
          ),
          m('br')
        ]
      )
    )
  }
}

module.exports = PowerUsage
