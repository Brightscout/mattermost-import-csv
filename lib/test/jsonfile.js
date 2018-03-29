const expect = require('chai').expect
const fs = require('fs')
const jsonfile = require('../jsonfile')

const filename = 'test.json'

describe('jsonfile', function() {

  it('should write objects to a file', function(done) {
    var d = jsonfile(filename, () => {
      expect(fs.existsSync(filename)).to.be.true
      done()
    })

    d.write({
      foo: 'bar'
    })

    d.end()
  })

  after(function() {
    fs.unlinkSync(filename)
  })
})
