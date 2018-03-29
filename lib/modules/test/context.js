const { spy } = require('sinon')

module.exports = function() {
  return {
    config: {
      source: {
        filename: 'lib/modules/test/fixtures/source.csv'
      },
      target: {
        filename: 'target.json'
      }
    },
    target: {
      write: spy(),
      end: spy()
    },
    values: {

    }
  }
}
