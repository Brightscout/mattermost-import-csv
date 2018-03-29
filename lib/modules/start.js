const csv = require('csvtojson')
const jsonfile = require('../jsonfile')

//
// Initialize the child logger for
// the module
//
const log = require('../log').child({
  module: 'start'
})

module.exports = function(context) {
  return new Promise(function(resolve){

    log.info(`loading csv file: ${context.config.source.filename}`)

    context.source = {
      users: []
    }

    //
    // Read the csv file and build the
    // array of users
    //
    csv().fromFile(context.config.source.filename)
      .on('json',(user) => {
        log.info(`loading user: ${user.email}`)
        context.source.users.push(user)
      })
      .on('done',() => {
        //
        // Create the json file and add
        // it to the context
        //
        context.target = jsonfile(
          context.config.target.filename,
          process.exit
        )

        log.info('loading csv file: done')

        return resolve(context)
      })
  })
}
