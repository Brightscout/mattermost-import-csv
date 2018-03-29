const expect = require('chai').expect
const fs = require('fs')
const start = require('../start')
const context = require('./context')()

describe('modules.start', function() {
  it('should set up the source and target', function(done) {
    start(context)
      .then(function (c) {
        expect(c).to.equal(context)
        expect(fs.existsSync(context.config.target.filename)).to.be.true
        done()
      })
      .catch(function(err){
        console.log(err)
      })
  })

  afterEach(function() {
    fs.unlinkSync(context.config.target.filename)
  })
})
