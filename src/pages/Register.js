const m = require('mithril')
const Auth = require('../utils/auth')
/* global location */

const Login = {
  view: function () {
    return m('', { style: { display: 'flex', 'justify-content': 'center', 'align-items': 'center', height: '100%' } },
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

        m('div', { class: 'w3-card-4', style: { 'min-width': '600px' } },
          [
            m('div', { class: 'w3-center' },
              m('br')
            ),
            m('div', { class: 'w3-container', action: '/action_page.php' },
              m('div', { class: 'w3-section' },
                [
                  m('label',
                    m('b',
                      'Username'
                    )
                  ),
                  m('input', {
                    class: 'w3-input w3-border w3-margin-bottom',
                    type: 'text',
                    value: Auth.username,
                    oninput: function (e) {
                      Auth.setUsername(e.target.value)
                    }
                  }),
                  m('div', { class: 'w3-text-red' }, !Auth.validUsername ? 'Username must be between 3 - 20 characters long' : ''),
                  m('br'),
                  m('label',
                    m('b',
                      'Password'
                    )
                  ),
                  m('input', {
                    class: 'w3-input w3-border w3-margin-bottom',
                    type: 'password',
                    value: Auth.password,
                    oninput: function (e) {
                      Auth.setPassword(e.target.value)
                    }
                  }),
                  m('div', { class: 'w3-text-red' }, !Auth.validPassword ? 'Password must be between 4 - 21 characters long' : ''),
                  m('br'),
                  m('label',
                    m('b',
                      'Confirm Password'
                    )
                  ),
                  m('input', {
                    class: 'w3-input w3-border w3-margin-bottom',
                    type: 'password',
                    value: Auth.reenteredpassword,
                    oninput: function (e) {
                      Auth.setreenteredPassword(e.target.value)
                    }
                  }),
                  m('br'),
                  m('div', { class: 'w3-text-red' }, !Auth.passwordMatching && Auth.reenteredpassword !== '' ? 'Password does not match' : ''),
                  m('button', { class: 'w3-button w3-block w3-green w3-section w3-padding', disabled: !Auth.canSubmitRegister(), onclick: Auth.register }, 'Register'),
                  m('div', { class: 'w3-text-red' }, Auth.registerError)
                ]
              )
            ),
            m('div', { class: 'w3-container w3-border-top w3-padding-16 w3-light-grey' },
              [
                m('button', { class: 'w3-button w3-red', onclick: function () { location.href = '#!/Login' }, type: 'button' },
                  'Login'
                )
              ]
            )
          ]
        )
      ]
    )
  }
}

module.exports = Login
