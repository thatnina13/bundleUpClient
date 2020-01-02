'use strict'

// we're going to greate a function that will let us communicate with the use
// across all our authentification communications wiht our users
const store = require('../store')
const showItemsTemplate = require('../item-listing.handlebars')

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
  // console.log = ('user was stored', store.user)
  onSuccess('Thank you for joining the bundleUp community! sign in to start donating')
}

// const failure = () => {
//   onFailure('something went wrong but try again!!')
// }
const onSignInSuccess = responseData => {
  store.user = responseData.user
  onSuccess('bundleUp cause baby, you look cold')
  // console.log = responseData
  // $('.after-auth').show()
  // $('.before-auth').hide()
  $('.after-auth').show()
  // $('.item').hide()
}
// hide anything with the CSS class of after aut

const onSignInFailure = () => {
  onFailure('something went wrong but try again! we got this!')
}
const onchangePasswordSuccess = () => {
  onSuccess('You have successfully changed your password!')
}

const onchangePasswordFailure = () => {
  onFailure('something went wrong but try again! we got this!')
}

const onsignOutFailure = () => {
  onFailure('something went wrong but try again! we got this!')
}
const oncreateNewSuccess = data => {
  onSuccess('Thank you! you have added to you list of donations')
  store.item = data.item
  // $('.after-create').show()
}
const oncreateNewFailure = () => {
  onFailure('Shoot- somethig went wrong. Try again, we got this!')
}
const onviewItemsSuccess = (data) => {
  onSuccess('Here are your items! if you see none, create some you maniac')
  const showItemsHtml = showItemsTemplate({ items: data.items })
  $('.results').html(showItemsHtml)
}

const onviewItemsFailure = message => {
  onFailure('to view your list, first add an item')
}
const onremoveItemSuccess = message => {
  onSuccess('you have deleted your item')
}
const onremoveItemFailure = message => {
  onFailure('Shoot- try deleting again')
}

const onsignOutSuccess = () => {
  onSuccess('You have successfully signed out!')
  store.user = {} // now store.js object will revert back to being empty
  $('.before-auth').show()
  $('.after-auth').hide()
}

const onsubmitItemUpdateSuccess = message => {
  onSuccess('you have updated your item')
}
const onsubmitItemUpdateFailure = message => {
  onFailure('oops- something went wrong! try again!')
}

module.exports = {
  onSignUpSuccess,
  // failure,
  onSignInSuccess,
  onSignInFailure,
  onchangePasswordSuccess,
  onchangePasswordFailure,
  onsignOutSuccess,
  onsignOutFailure,
  oncreateNewSuccess,
  oncreateNewFailure,
  onviewItemsSuccess,
  onviewItemsFailure,
  onremoveItemSuccess,
  onremoveItemFailure,
  onsubmitItemUpdateSuccess,
  onsubmitItemUpdateFailure
}
