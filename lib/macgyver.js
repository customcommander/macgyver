var pristineEnv = require('./pristine-env');

var pristineObject = pristineEnv().Object;
var pristineArray = pristineEnv().Array;

function macgyver(thing) {
    if (pristineObject.prototype.toString.call(thing) === '[object Array]') {
        return (new pristineArray()).concat(thing);
    } else {
        return thing;
    }
}

module.exports = macgyver;
