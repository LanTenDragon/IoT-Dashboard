const m = require('mithril')
const usernameRegex = /^[a-z][a-z0-9]{3,19}$/i
const passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+|{}:"<>?\-=\\[\];',./]{4,20}$/
const url = process.env.URL
/* global localStorage */

const Auth = module.exports = {
  token: '',
  userid: '',
  username: '',
  password: '',
  reenteredpassword: '',
  error: '',
  registerError: '',
  validUsername: true,
  validPassword: true,
  validRenteredPassword: true,
  passwordMatching: true,

  setUsername: function (value) {
    Auth.username = value
    Auth.validUsername = usernameRegex.exec(Auth.username)
  },
  setPassword: function (value) {
    Auth.password = value
    Auth.validPassword = passwordRegex.exec(Auth.password)
  },
  setreenteredPassword: function (value) {
    Auth.reenteredpassword = value
    Auth.validRenteredPassword = passwordRegex.exec(Auth.reenteredpassword)
    Auth.passwordMatching = Auth.password === Auth.reenteredpassword
  },
  canSubmit: function () { return Auth.validUsername && Auth.validPassword },
  canSubmitRegister: function () { return Auth.validUsername && Auth.validPassword && Auth.validRenteredPassword && Auth.passwordMatching },
  authorised: function () {
    return localStorage.getItem('token') !== ''
  },

  login: function () {
    m.request({
      method: 'POST',
      url: url + '/login',
      body: {
        username: Auth.username,
        password: Auth.password
      }
    })
      .then(function (res) {
        localStorage.setItem('userid', res.id)
        localStorage.setItem('token', res.accessToken)
        Auth.error = ''
        m.route.set('/Overview')
      })
      .catch(function (e) {
        console.table(e)
        Auth.error = e.response.message
      })
  },

  // delete token and storage
  // logout: function () {
  //   this.token = false
  //   this.userid = false
  //   delete storage.token
  //   delete storage.userid
  // },

  register: function () {
    return m.request({
      method: 'POST',
      url: url + '/register',
      body: {
        username: Auth.username,
        password: Auth.password
      }
    })
      .then(function (res) {
        Auth.registerError = ''
        m.route.set('/Login')
      })
      .catch(function (e) {
        console.table(e)
        Auth.registerError = e.response.message
      })
  },

  // ensure verify token is correct
  // verify: function(token){
  //   return m.request({
  //     method: 'POST',
  //     url: '/auth/verify',
  //     data: {token: token}
  //   });
  // },
  verify: function (token) {
    return m.request({
      method: 'GET',
      url: '/auth/verify',
      data: {
        token: token
      }
    })
  },

  // get current user object
  user: function () {
    return Auth.req('/auth/user')
  },

  // make an authenticated request
  req: function (options) {
    if (typeof options === 'string') {
      options = {
        method: 'GET',
        url: options
      }
    }
    var oldConfig = options.config || function () {}
    options.config = function (xhr) {
      xhr.setRequestHeader('Authorization', 'Bearer ' + Auth.token)
      oldConfig(xhr)
    }

    // try request, if auth error, redirect
    // TODO: remember where the user was, originally
    var deferred = m.deferred()
    m.request(options).then(deferred.resolve, deferred.reject)

    return deferred.promise
  }
}
