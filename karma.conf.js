module.exports = function(config) {
    config.set({
        basePath: './',
        autoWatch: false,
        singleRun: true,
        frameworks: ['mocha', 'chai'],
        customLaunchers: {
            Chrome_Travis: {
                base: 'Chrome',
                flags: ['--no-sandbox']
            }
        },
        files: [
            'build/macgyver.js',
            'test/macgyver.spec.js'
        ],
        reporters: ['coverage', 'mocha'],
        coverageReporter: {
            dir: 'build/test',
            reporters: [
                {type: 'json', subdir: '.'}
            ]
        }
    });
};
