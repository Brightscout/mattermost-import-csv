const context = require('./context')
const modules = require('./lib/modules')

const {
  start,
  version,
  team,
  channels,
  users,
  posts,
  end
} = modules

start(context)
  .then(version)
  .then(team)
  .then(channels)
  .then(users)
  .then(posts)
  .then(end)
  .catch(function(err) {
    console.error(err)
    process.exit(1)
  })
