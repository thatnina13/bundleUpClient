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
  onSuccess('Thank you for joining the bundleUp community! Sign in to start listing your items and clothing your neighbor')
}

const onSignUpFailure = () => {
  onFailure('something went wrong but try again!!')
}
const onSignInSuccess = (responseData) => {
  store.user = responseData.user
  // console.log = responseData
  onSuccess('bundleUp cause baby, you look cold')
  // show anything with the CSS class of after auth
  $('.after-auth').show()
  $('.before-auth').hide()
  $('.item-list').hide()
  $('.item').hide()
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
const onsignOutSuccess = () => {
  onSuccess('You have successfully signed out!')
  store.user = {} // now store.js object will revert back to being empty
  $('.before-auth').show()
  $('.after-auth').hide()
  // $('.item-list').hide()
  // $('.item').hide()
}

const onsignOutFailure = () => {
  onFailure('something went wrong but try again! we got this!')
}
const onCreateNewSuccess = (data) => {
  onSuccess('Thank you! spread that love and cloth your neighbor')
  store.item = data.item
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
  // console.log(data.items)
  onSuccess('to view your list, first add an item')
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
