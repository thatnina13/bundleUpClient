'use strict'

// we're going to greate a function that will let us communicate with the use
// across all our authentification communications wiht our users
const store = require('../store')

const onSuccess = message => {
  $('#message')
    .removeClass('failure')
    .addClass('success')
    .text(message)
    .css('background-color', 'green')
 $('form').trigger('reset')
}

const onFailure = message => {
  $('#message')
    .removeClass('success')
    .addClass('failure')
    .text(message)
    .css('background-color', 'red')
$('form').trigger('reset')
}

const onSignUpSuccess = () => {
  store.user = store.user
  console.log = ('user was stored', store.user)
  onSuccess('Mozel Tov! you successfuly signed up! Now, sign in!')
}

const onSignUpFailure = () => {
  onFailure('Try again, ya maniac!')
}
const onSignInSuccess = (responseData) => {
  store.user = responseData.user
  // console.log = responseData
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
  onSuccess($('.status').text('You have successfully changed your password!'))
}

const onchangePasswordFailure = () => {
  onFailure('...Sucks to suck...')
}
const onsignOutSuccess = () => {
  onSuccess($('.status').text('You have successfully signed out!'))
    store.user = {} // now store.js object will revert back to being empty
    $('.before-auth').show()
    $('.after-auth').hide()
    $('.task-list').hide()
    $('.task').hide()
  }

const onsignOutFailure = () => {
  onFailure('something went wrong')
}
const onCreateNewSuccess = (formData) => {
  store.item = formData.item
  onSuccess('Thank you! spread that love and cloth your neighbor')
}
const onCreateNewFailure = () => {
  onSuccess('Shoot- somethig went wrong. Try again, we got this!')
}
const onViewItemsSuccess = (data) => {
  onSuccess($('.status').text('Items are below!'))
  // console.log('data is', data)
  const showItemsHtml = showItemsTemplate({ items: data.items })
  $('.results').html(showItemsHtml)
}

const onViewItemFailure = () => {
  onSuccess('Shoot- somethig went wrong. Try again, we got this!')
}
const onremoveItemSuccess = () => {
  onSuccess('you have deleted that item ')
}
const onremoveItemFailure = () => {
  onSuccess('Shoot- try deleting again ')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onchangePasswordSuccess,
  onchangePasswordFailure,
  onsignOutSuccess,
  onsignOutFailure,
  onCreateNewSuccess,
  onCreateNewFailure,
  onViewItemsSuccess,
  onViewItemFailure,
  onremoveItemSuccess,
  onremoveItemFailure
}
