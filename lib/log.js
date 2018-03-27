const bunyan = require('bunyan')

module.exports = bunyan.createLogger({
  name: 'mm-import-csv',
  streams: [
    {
      level: 'info',
      stream: process.stdout
    },
    {
      level: 'info',
      path: 'mm-import-csv.log'
    }
  ]
})
