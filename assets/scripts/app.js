'use strict'

const authEvents = require('./auth/events')
// const exampleEvents = require('./examples/events')

$(() => {
  authEvents.addHandlers()
  // exampleEvents.addHandlers()
})
