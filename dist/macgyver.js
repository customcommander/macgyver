(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["macgyver"] = factory();
	else
		root["macgyver"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var pristineEnv = __webpack_require__(1);

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
	 * Attempts to add native support for various methods to passed in object, without modifying the prototype.
	 * If native support cannot be patched then the unmodified object is returned.
	 * Currently only supports arrays.
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
	 * Will only restore Array prototype for now.
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


/***/ },
/* 1 */
/***/ function(module, exports) {

	var IFRAME_ID = 'macgyver-pristine-environment';

	function init() {
	    var ifrm = document.createElement('iframe');
	    ifrm.id = IFRAME_ID;
	    ifrm.style.cssText = 'position:absolute;top:-1000px;left:1000px';
	    document.body.appendChild(ifrm);
	}

	init();

	module.exports = function () {
	    return document.querySelector('#' + IFRAME_ID).contentWindow;
	};


/***/ }
/******/ ])
});
;