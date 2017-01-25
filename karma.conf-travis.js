var karmaBaseConf = require('./karma.conf-base');

module.exports = function (config) {
    karmaBaseConf(config);

    config.set({
        logLevel: config.INFO,
        customLaunchers: {
            Chrome_Travis: {
                base: 'Chrome',
                flags: ['--no-sandbox']
            }
        },
        browsers: ['Chrome_Travis']
    });
};
