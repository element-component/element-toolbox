var log = require('./log')
var spawnSync = require('child_process').spawnSync

module.exports = function exec(cmd, args) {
  var command = spawnSync(cmd, args || [], { stdio: 'inherit' })

  if (command.status === 1) {
    if (command.stderr) {
      log.error(command.stderr.toString())
    }
    process.exit(1)
  } else {
    return command
  }
}