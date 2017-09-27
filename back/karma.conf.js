// Karma configuration

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    frameworks: ['mocha', 'requirejs', 'chai'],

    // list of files / patterns to load in the browser
    files: [
      {pattern: 'public/js/**/*.js', included: false},
      {pattern: 'test/front/**/*.test.js', included: false},
      'test/front/test.main.js'
    ],

    // list of files to exclude
    exclude: [
      'public/js/main.js'
    ],

    // preprocess matching files before serving them to the browser
    preprocessors: {
      'public/js/modules/**/*.js': 'coverage'
    },

    coverageReporter: {
      type : 'text-summary',
      dir : 'coverage-front/',
      includeAllSources : true
    },

    // test results reporter to use
    reporters: ['progress', 'coverage'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
