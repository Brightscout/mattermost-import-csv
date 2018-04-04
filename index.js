#!/usr/bin/env node

const context = require('./context')
const log = require('./lib/log')
const {
  start,
  version,
  users,
  end
} = require('./lib/modules')

//
// Common function log errors and
// terminate the process
//
const abort = function(err) {
  log.error(err)
  //
  // We set a timeout here to
  // allow the log streams to finish
  // writing.
  //
  setTimeout(function() {
    process.exit(1)
  }, 3000)
}

//
// Ensure we trap uncaught exceptions
// and properly abort
//
process.on('uncaughtException', abort)

//
// Let's do it
//
start(context)
  .then(version)
  .then(users)
  .then(end)
  .catch(abort)
