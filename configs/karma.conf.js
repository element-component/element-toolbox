var cwd = require('./../lib/cwd')
var requireg = require('requireg')
var cooking = requireg.resolve('cooking')
var preprocessors = {}
preprocessors[cwd('test/index.js')] = ['webpack']

module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'sinon-chai'],
    files: [
      cwd('test/index.js')
    ],
    preprocessors: preprocessors,
    webpackMiddleware: {
      noInfo: true
    },
    webpack: {
      module: {
        loaders: [
          {
            test: /\.vue$/,
            loader: 'vue'
          },
          {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules|bower_components/
          },
          {
            test: /\.scss$/,
            loaders: ['css', 'sass'],
            exclude: /node_modules|bower_components/
          }
        ]
      },
      vue: {
        loaders: {
          scss: 'css!sass'
        }
      },
      babel: {
        presets: [
          requireg('cooking/node_modules/babel-preset-es2015')
        ]
      },
      resolve: {
        extensions: ['', '.js', '.vue'],
        root: [
          cooking + '/../node_modules',
          __dirname + '/../node_modules'
        ]
      },
      resolveLoader: {
        root: [
          cooking + '/../node_modules'
        ]
      }
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
}
