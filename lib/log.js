var prefix = '🔧 '
var logUtil = require('log-util')

module.exports = {
  warn: function (message) {
    logUtil.warn(prefix + message)
  },
  success: function (message) {
    logUtil.debug(prefix + message)
  },
  error: function (message) {
    logUtil.error(prefix + message)
    process.exit(1)
  },
  info: function (message) {
    logUtil.info(prefix + message)
  },
  verbose: function (message) {
    logUtil.verbose(prefix + message)
  }
}
