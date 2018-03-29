const expect = require('chai').expect
const users = require('../users')
const context = require('./context')()

describe('modules.users', function() {

  before(function() {

    context.source = {
      users: [
        {
          team: 'a-team',
          username: 'a-example-com',
          email: 'a@example.com',
          channels: 'channel-a, channel-b, channel-c'
        }, {
          team: 'b-team',
          username: 'b-example-com',
          email: 'b@example.com',
          channels: 'channel-b'
        }
      ]
    }
  })

  it('should process user objects', function(done) {

    users(context).then(function(c) {
      expect(c).to.equal(context)
      expect(c.target.write.args[0][0]).to.deep.equal({
        type: 'user',
        user: {
          username: 'a-example-com',
          email: 'a@example.com',
          auth_service: 'saml',
          auth_data: 'a@example.com',
          notify_props: {
            email: false
          },
          teams: [
            {
              name: 'a-team',
              channels: [
                {
                  name: 'channel-a'
                }, {
                  name: ' channel-b'
                }, {
                  name: ' channel-c'
                }
              ]
            }
          ]
        }
      })
      expect(c.target.write.args[1][0]).to.deep.equal({
        type: 'user',
        user: {
          username: 'b-example-com',
          email: 'b@example.com',
          auth_service: 'saml',
          auth_data: 'b@example.com',
          notify_props: {
            email: false
          },
          teams: [
            {
              name: 'b-team',
              channels: [
                {
                  name: 'channel-b'
                }
              ]
            }
          ]
        }
      })

      done()
    })
  })
})
