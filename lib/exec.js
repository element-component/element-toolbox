module.exports = function exec(cmd, args, fn) {
  var runner = require('child_process').spawn(cmd, args || [], { stdio: 'inherit' })
  runner.on('close', function (stats) {
    if (fn) fn(stats)
  })
}