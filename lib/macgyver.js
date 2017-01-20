var pristineEnv = require('./pristine-env');

var pristineObject = pristineEnv().Object;
var pristineArray = pristineEnv().Array;


/*
 * Copy an existing property from `from` to `to`.
 * We don't want to pollute native prototypes with undefined properties,
 * therefore we must check they exist first.
 */
function copy(to, from, key) {
    if (from.hasOwnProperty(key)) {
        to[key] = from[key];
    }
}

/**
 * Try to return a thing which prototype is in a pristine condition.
 * Currently only supports arrays.
 * If a thing cannot be fixed, the function returns the thing.
 * The current native objects methods are not touched.
 *
 * @example
 *     Array.prototype.map = function () {
 *         //custom implementation
 *     };
 *
 *    var arr = [1,2,3];
 *    arr.map.toString();
 *    //=> custom implementation
 *    macgyver(arr).map.toString();
 *    //=> native implementation
 */
function macgyver(thing) {
    if (pristineObject.prototype.toString.call(thing) === '[object Array]') {
        return (new pristineArray()).concat(thing);
    } else {
        return thing;
    }
}

/**
 * Restore native implementations permanently.
 * Currently only supports array methods.
 * @param {Object} [destWin] The window to fix. Default to the current window.
 * @param {Object} [srcWin] The window used to fix the other one. Default to a private window used by MacGyver only.
 */
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
