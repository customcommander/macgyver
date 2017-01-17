var pristineEnv = require('./pristine-env');

function macgyver(thing) {
    if (Object.prototype.toString.call(thing) === '[object Array]') {
        return (new pristineEnv().Array(0)).concat(thing);
    } else {
        return thing;
    }
}

module.exports = macgyver;
