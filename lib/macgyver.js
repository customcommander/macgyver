var pristineEnv = require('./pristine-env');

var pristineObject = pristineEnv().Object;
var pristineArray = pristineEnv().Array;


function copy(to, from, key) {
    if (from.hasOwnProperty(key)) {
        to[key] = from[key];
    }
}

function macgyver(thing) {
    if (pristineObject.prototype.toString.call(thing) === '[object Array]') {
        return (new pristineArray()).concat(thing);
    } else {
        return thing;
    }
}

macgyver.ductTape = function (destWin, srcWin) {
    destWin = destWin || window;
    srcWin = srcWin || pristineEnv();

    copy(destWin.Array, srcWin.Array, 'from');
    copy(destWin.Array, srcWin.Array, 'isArray');
    copy(destWin.Array, srcWin.Array, 'of');
    copy(destWin.Array.prototype, srcWin.Array.prototype, 'concat');
    copy(destWin.Array.prototype, srcWin.Array.prototype, 'copyWithin');
    copy(destWin.Array.prototype, srcWin.Array.prototype, 'entries');
    copy(destWin.Array.prototype, srcWin.Array.prototype, 'every');
    copy(destWin.Array.prototype, srcWin.Array.prototype, 'fill');
    copy(destWin.Array.prototype, srcWin.Array.prototype, 'filter');
    copy(destWin.Array.prototype, srcWin.Array.prototype, 'find');
    copy(destWin.Array.prototype, srcWin.Array.prototype, 'findIndex');
    copy(destWin.Array.prototype, srcWin.Array.prototype, 'forEach');
    copy(destWin.Array.prototype, srcWin.Array.prototype, 'includes');
    copy(destWin.Array.prototype, srcWin.Array.prototype, 'indexOf');
    copy(destWin.Array.prototype, srcWin.Array.prototype, 'join');
    copy(destWin.Array.prototype, srcWin.Array.prototype, 'keys');
    copy(destWin.Array.prototype, srcWin.Array.prototype, 'lastIndexOf');
    copy(destWin.Array.prototype, srcWin.Array.prototype, 'map');
    copy(destWin.Array.prototype, srcWin.Array.prototype, 'pop');
    copy(destWin.Array.prototype, srcWin.Array.prototype, 'push');
    copy(destWin.Array.prototype, srcWin.Array.prototype, 'reduce');
    copy(destWin.Array.prototype, srcWin.Array.prototype, 'reduceRight');
    copy(destWin.Array.prototype, srcWin.Array.prototype, 'reverse');
    copy(destWin.Array.prototype, srcWin.Array.prototype, 'shift');
    copy(destWin.Array.prototype, srcWin.Array.prototype, 'slice');
    copy(destWin.Array.prototype, srcWin.Array.prototype, 'some');
    copy(destWin.Array.prototype, srcWin.Array.prototype, 'sort');
    copy(destWin.Array.prototype, srcWin.Array.prototype, 'splice');
    copy(destWin.Array.prototype, srcWin.Array.prototype, 'toLocaleString');
    copy(destWin.Array.prototype, srcWin.Array.prototype, 'toSource');
    copy(destWin.Array.prototype, srcWin.Array.prototype, 'toString');
    copy(destWin.Array.prototype, srcWin.Array.prototype, 'unshift');
    copy(destWin.Array.prototype, srcWin.Array.prototype, 'values');
};

module.exports = macgyver;
