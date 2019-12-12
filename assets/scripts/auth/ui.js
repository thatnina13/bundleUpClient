'use strict'

// we're going to greate a function that will let us communicate with the use
// across all our authentification communications wiht our users
const store = require('../store')

const onSuccess = message => {
  $('#message')
    .removeClass('failure')
    .addClass('sucess')
    .text(message)
  $('form').trigger('reset')
}

const onFailure = message => {
  $('#message')
    .removeClass('success')
    .addClass('faliure')
    .text(message)
  $('form').trigger('reset')
}

const onSignUpSuccess = () => {
  onSuccess('Mozel Tov! you successfuly signed up! Now, sign in!')
}

const onSignUpFailure = () => {
  onFailure('Try again, ya maniac!')
}
const onSignInSuccess = (responseData) => {
  store.user = responseData.users
  console.log = store
  onSuccess('Oppa! you are in the mainframe!!')
  // show anything with the CSS class of after auth
  $('.after-auth').show()
  $('.before-auth').hide()
}
// hide anything with the CSS class of after aut

const onSignInFailure = () => {
  onFailure('Try again, ya maniac')
}
const onchangePasswordSuccess = () => {
  onSuccess('Well Done!')
}

const onchangePasswordSuccessFailure = () => {
  onFailure('...Sucks to suck...')
}
const onsignOutSuccess = () => {
  onSuccess('Adios')
  // return to before authEvents
  // we need to delete the token
  store.user = {} // the store no longer knows who we are
  $('.after-auth').hide()
  $('.before-auth').show()
}
const onsignOutFailure = () => {
  onFailure('something went wrong')
}
const onCreateNewSuccess = () => {
  onSuccess('Damn dude, spread that love and cloth your neighbor')
}
const onCreateNewFailure = () => {
  onSuccess('Shoot- somethig went wrong. Try again, we got this!')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onchangePasswordSuccess,
  onchangePasswordSuccessFailure,
  onsignOutSuccess,
  onsignOutFailure,
  onCreateNewSuccess,
  onCreateNewFailure
}
