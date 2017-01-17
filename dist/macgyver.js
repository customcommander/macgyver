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

	function macgyver(thing) {
	    if (Object.prototype.toString.call(thing) === '[object Array]') {
	        return (new pristineEnv().Array(0)).concat(thing);
	    } else {
	        return thing;
	    }
	}

	module.exports = macgyver;


/***/ },
/* 1 */
/***/ function(module, exports) {

	var IFRAME_ID = 'macgyver-pristine-environment';

	function init() {
	    var ifrm = document.createElement('iframe');
	    ifrm.id = IFRAME_ID;
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