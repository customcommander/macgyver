module.exports = function(config) {
    config.set({
        basePath: './',
        autoWatch: false,
        singleRun: true,
        logLevel: config.ERROR,
        frameworks: ['mocha', 'chai'],
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
        },
        browsers: ['Chrome']
    });
};
