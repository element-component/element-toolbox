var path = require('path')

/**
 * @{@link https://github.com/react-component/rc-tools/blob/master/lib/resolveCwd.js}
 */
module.exports = function cwd() {
  const args = [].slice.call(arguments, 0)
  args.unshift(process.cwd())
  return path.join.apply(path, args)
}