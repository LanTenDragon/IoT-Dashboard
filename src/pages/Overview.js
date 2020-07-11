const m = require('mithril')
const Layout = require('../models/Layout')
const Chart = require('chart.js')
require('chartjs-plugin-streaming')
const mqtt = require('mqtt')
const MqttClient = mqtt.connect('wss://lantendragon.southeastasia.cloudapp.azure.com:8084/mqtt')

MqttClient.subscribe('socket/+/+/power', function (err) {
  if (!err) {
    console.log('Subscribed to socket power tree topic')
  }
})

function chartPiece () {
  return {
    oncreate: function () {
      const ctx = document.getElementById('chart').getContext('2d')
      Chart.defaults.global.defaultFontColor = 'white'
      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          datasets: [{
            label: 'High Power Socket',
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            lineTension: 0,
            data: []
          }, {
            label: 'Low Power Socket',
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            data: []
          }]
        },
        options: {
          maintainAspectRatio: false,
          title: {
            display: true,
            text: 'Simulated Socket Data'
          },
          scales: {
            xAxes: [{
              type: 'realtime',
              realtime: {
                duration: 60000,
                delay: 1000,
                frameRate: 60,
                refresh: 50,
                pause: false
              }
            }],
            yAxes: [{
              type: 'linear',
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Watts'
              }
            }]
          },
          tooltips: {
            mode: 'nearest',
            intersect: false
          },
          hover: {
            mode: 'nearest',
            intersect: false
          },
          plugins: {
            streaming: {
              frameRate: 30
            }
          }
        }
      })
      MqttClient.on('message', function (topic, message) {
        const POJO = JSON.parse(message.toString())
        const dataset = POJO.id === '5f048ae68ade5f0a6c64905c' ? 0 : 1
        myChart.data.datasets[dataset].data.push({
          x: Date.now(),
          y: POJO.power
        })

        myChart.update({
          preservation: true
        })
      })
    },
    view: function () {
      return m('div', { class: 'chart-container w3-padding-16', style: { position: 'relative', margin: 'auto', height: '70vh', width: '80vw' } },
        m('canvas', { id: 'chart' })
      )
    }
  }
}

const Overview = {
  view: function () {
    return m(Layout, { class: 'w3-main' },
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
        m(chartPiece)
      ]
    )
  }
}

module.exports = Overview
