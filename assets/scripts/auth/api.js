'use strict'

const config = require('../config')
const store = require('../store')

const signUp = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const signIn = formData => {
  console.log('formData is ', formData)
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

const changePassword = formData => {
  return $.ajax({
    url: config.apiUrl + '/change-Password',
    method: 'PATCH',
    headers: {
      Authorization: `Token token= ${store.user.token}`
    },
    data: formData
  })
}
const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: `Token token= ${store.user.token}`
    }
  })
}

const createNew = formData => {
  console.log('formData is ', formData)
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

const viewItems = () => {
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'GET'
    // headers: {
    //   Authorization: `Token token=${store.user.token}`
    // }
  })
}

// const removeItem = () => {
//   return $.ajax({
//     url: config.apiUrl + '/items',
//     method: 'DELETE',
//     headers: {
//       Authorization: `Token token= ${store.user.token}`
//     }
//   })
// }

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createNew,
  viewItems

}
