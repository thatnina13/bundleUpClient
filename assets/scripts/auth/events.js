
'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFeilds = require('../../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('user signed up')
  const form = event.target
  const formData = getFormFeilds(form)

  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  console.log('user signed in')

  const form = event.target
  const formData = getFormFeilds(form)

  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}
const onChangePassword = event => {
  event.preventDefault()
  console.log('Changed PW clicked')
  const form = event.target
  const formData = getFormFeilds(form)

  api.changePasword(formData)
    .then(ui.onchangePasswordSuccess)
    .catch(ui.onchangePasswordFailure)
}
const onsignOut = event => {
  event.preventDefault()

  api.signOut()
    .then((res) => {
      console.log('server sent sign out response')
    })
}
const oncreateNew = function (event) {
  event.preventDefault()
  console.log('user created a new item')

  const form = event.target
  const formData = getFormFeilds(form)

  api.createNew(formData)
    .then(ui.onCreateNewSuccess)
    .catch(ui.onCreateNewFailure)
}

// when #sign-up is submitted I want to run OnSignUp
const addHandlers = event => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onsignOut)
  $('#new-item').on('submit', oncreateNew)
}
module.exports = {
  addHandlers
}
