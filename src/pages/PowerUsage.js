const m = require('mithril')
const Layout = require('../models/Layout')
const url = process.env.URL
/* global localStorage */

const UsageData = {
  data: {
    dailyPowerList: [],
    weeklyPowerList: [],
    fetch: () => {
      m.request({
        method: 'POST',
        url: url + '/statistics/' + localStorage.getItem('userid') + '/power',
        body: { days: 1 }
      })
        .then((res) => {
          UsageData.data.dailyPowerList = res
        })

      m.request({
        method: 'POST',
        url: url + '/statistics/' + localStorage.getItem('userid') + '/power',
        body: { days: 7 }
      })
        .then((res) => {
          UsageData.data.weeklyPowerList = res
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
          [
            m('div', { class: 'w3-bar w3-grey' },
              [
                m('button', { class: 'w3-bar-item w3-button w3-padding w3-blue tabButton', id: 'buttonDaily', onclick: () => { openTab('Daily') } },
                  'Past 24 Hours'
                ),
                m('button', { class: 'w3-bar-item w3-button w3-padding tabButton', id: 'buttonWeekly', onclick: () => { openTab('Weekly') } },
                  'Past 7 Days'
                )
              ]
            ),
            m('div', { class: 'tab', id: 'Daily' },
              [
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
                      UsageData.data.dailyPowerList.map(item => {
                        return m('tr',
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
                )
              ]
            ),
            m('div', { class: 'tab', id: 'Weekly', style: { display: 'none' } },
              [
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
                      UsageData.data.weeklyPowerList.map(item => {
                        return m('tr',
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
                )
              ]
            )
          ]
        ]
      )
    )
  }
}

module.exports = PowerUsage
