const expect = require('chai').expect
const end = require('../end')
const context = require('./context')()

describe('modules.end', function() {
  it('should close the output stream', function() {
    end(context)
    expect(context.target.end.called).to.be.true
  })

  afterEach(function() {
    context.target.end.reset()
  })
})
