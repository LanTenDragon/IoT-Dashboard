const m = require('mithril')

const Overview = {
  view: function () {
    return m('div', { class: 'w3-animate-opacity', id: 'Overview' },
      m('div', { class: 'w3-main' },
        [
          m('header', { class: 'w3-container' },
            m('h5',
              m('b',
                [
                  m('i', { class: 'fa fa-dashboard' }),
                  ' Power Usage History'
                ]
              )
            )
          ),
          m('div', { class: 'w3-row-padding w3-margin-bottom' },
            [
              m('div', { class: 'w3-quarter' },
                m('div', { class: 'w3-container w3-red w3-padding-16' },
                  [
                    m('div', { class: 'w3-left' },
                      m('i', { class: 'fa fa-comment w3-xxxlarge' })
                    ),
                    m('div', { class: 'w3-right' },
                      m('h3',
                        '52'
                      )
                    ),
                    m('div', { class: 'w3-clear' }),
                    m('h4',
                      'Active Switches'
                    )
                  ]
                )
              ),
              m('div', { class: 'w3-quarter' },
                m('div', { class: 'w3-container w3-blue w3-padding-16' },
                  [
                    m('div', { class: 'w3-left' },
                      m('i', { class: 'fa fa-eye w3-xxxlarge' })
                    ),
                    m('div', { class: 'w3-right' },
                      m('h3',
                        '99'
                      )
                    ),
                    m('div', { class: 'w3-clear' }),
                    m('h4',
                      'Total Devices'
                    )
                  ]
                )
              ),
              m('div', { class: 'w3-quarter' },
                m('div', { class: 'w3-container w3-teal w3-padding-16' },
                  [
                    m('div', { class: 'w3-left' },
                      m('i', { class: 'fa fa-share-alt w3-xxxlarge' })
                    ),
                    m('div', { class: 'w3-right' },
                      m('h3',
                        '23'
                      )
                    ),
                    m('div', { class: 'w3-clear' }),
                    m('h4',
                      'Idle Switches'
                    )
                  ]
                )
              ),
              m('div', { class: 'w3-quarter' },
                m('div', { class: 'w3-container w3-orange w3-text-white w3-padding-16' },
                  [
                    m('div', { class: 'w3-left' },
                      m('i', { class: 'fa fa-users w3-xxxlarge' })
                    ),
                    m('div', { class: 'w3-right' },
                      m('h3',
                        '50'
                      )
                    ),
                    m('div', { class: 'w3-clear' }),
                    m('h4',
                      'Unassigned '
                    )
                  ]
                )
              )
            ]
          ),
          m('div', { class: 'chart-container', id: 'canvas-container' },
            m('canvas', { id: 'myChart', width: '100', height: '100' })
          )
        ]
      )
    )
  }
}

module.exports = Overview
