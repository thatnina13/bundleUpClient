
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
  // console.log('Changed PW clicked')
  const form = event.target
  const formData = getFormFeilds(form)

  api.changePassword(formData)
    .then(ui.onchangePasswordSuccess)
    .catch(ui.onchangePasswordFailure)
}
const onsignOut = event => {
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const oncreateNew = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFeilds(form)

  $('form').trigger('reset')
  api.createNew(formData)
    .then(function () {
      onviewItems(event)
    })
    .catch(console.error)
}

const onviewItems = event => {
  event.preventDefault()
  console.log('view all items')
  api.viewItems()
    .then(ui.onViewItemsSuccess)
    .catch(ui.onViewItemsFailure)
}

const onremoveItem = event => {
  event.preventDefault()
  // console.log('clicked on remove item')

  const itemId = $(event.target).data('id')

  api.removeItem(itemId)
    .then(function () {
      onviewItems(event)
    })
    .catch(ui.onremoveItemFailure)
}

// when #sign-up is submitted I want to run OnSignUp
const addHandlers = event => {
  $('#sign-up').on('submit', onsignUp)
  $('#sign-in').on('submit', onsignIn)
  $('#change-password').on('submit', onchangePassword)
  $('#sign-out').on('submit', onsignOut)
  $('#new-item').on('submit', oncreateNew)
  $('#see-all-items').on('submit', onviewItems)
  $('#create-item').on('submit', oncreateNew)
  $('.results').on('click', '.delete', onremoveItem)
}
module.exports = {
  addHandlers
}
