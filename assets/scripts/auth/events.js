
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
    // .then(function () {
    //   onviewItems(event)
    // })
    .catch(console.error)
}

const onviewItems = event => {
  event.preventDefault()
  // console.log('show items button works')
  api.viewItems()
    .then(ui.onViewItemsSuccess)
    .catch(ui.onViewItemsFailure)
  $('.item').show()
  $('.default-state').hide()
}

const onremoveItem = event => {
  event.preventDefault()
  const itemId = $(event.target).data('id')
  // console.log(itemId + 'is the item id')
  api.removeItem(itemId)
    // .then(console.log + ('api made request'))
    .then(function () {
      onviewItems(event)
    })
    .catch(ui.onremoveItemFailure)
}

const onSubmitItemUpdate = event => {
  event.preventDefault()
  // console.log('submit items button works')
  const itemId = $(event.target).data('id')
  // console.log('in events.js itemId event.target is', event.target)
  const form = event.target
  // console.log('in events.js form is', form, 'event.target is', event.target)
  const formData = getFormFeilds(form)
  // console.log('in events.js formData is', formData)
  api.submitItemUpdate(itemId, formData)
    .then(function (data) {
      onviewItems(event)
    })
    .catch(ui.onItemUpdateFailure)
}

const onUpdateItem = event => {
  $('.update').show()
  // .data('id')
  $('.item').hide()
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
  $('.results').on('submit', '.update-item', onSubmitItemUpdate)
  $('.results').on('click', '.update', onUpdateItem)
}
module.exports = {
  addHandlers
}
