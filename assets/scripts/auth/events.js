
'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFeilds = require('../../../lib/get-form-fields.js')

const onsignUp = function (event) {
  event.preventDefault()
  console.log('user signed up')
  const form = event.target
  const formData = getFormFeilds(form)

  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}
const onsignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFeilds(form)

  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}
const onchangePassword = event => {
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
const oncreateNew = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFeilds(form)

  api.createNew(formData)
    .then(ui.onCreateNewSuccess)
    .catch(ui.onCreateNewFailure)
}

const onviewItems = event => {
  event.preventDefault()
  console.log('view all items')
  api.viewItens()
    .then(ui.onViewItemsSuccess)
    .catch(ui.onViewItemsFailure)
}

// when #sign-up is submitted I want to run OnSignUp
const addHandlers = event => {
  $('#sign-up').on('submit', onsignUp)
  $('#sign-in').on('submit', onsignIn)
  $('#change-password').on('submit', onchangePassword)
  $('#sign-out').on('submit', onsignOut)
  $('#new-item').on('submit', oncreateNew)
  $('#view-items').on('submit', onviewItems)
  $('#create-item').on('submit', oncreateNew)
}
module.exports = {
  addHandlers
}
