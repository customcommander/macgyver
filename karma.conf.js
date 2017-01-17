// These environment variable should be defined in the Makefile
// or passed onto the command line variable.
var bundle = process.env.BUNDLE;
var tests = process.env.TEST_FILES;
var coverageDir = process.env.COV_DIR;

module.exports = function(config) {
    if (!bundle) {
        throw new Error('BUNDLE is not defined');
    }

    if (!tests) {
        throw new Error('TEST_FILES is not defined');
    }

    if (!coverageDir) {
        throw new Error('COV_DIR is not defined');
    }

    var files = [].concat(bundle.split(' '), tests.split(' '));

    config.set({
        basePath: './',
        autoWatch: false,
        singleRun: true,
        logLevel: config.LOG_ERROR,
        frameworks: ['mocha', 'chai'],
        browsers: process.env.TRAVIS ? ['Chrome_Travis'] : ['Chrome'],
        customLaunchers: {
            Chrome_Travis: {
                base: 'Chrome',
                flags: ['--no-sandbox']
            }
        },
        files: files,
        reporters: ['coverage', 'mocha'],
        coverageReporter: {
            dir: coverageDir,
            reporters: [
                {type: 'json', subdir: '.'}
            ]
        }
    });
};
