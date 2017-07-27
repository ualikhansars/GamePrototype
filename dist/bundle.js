/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
// global variables
var WIDTH = 1000;
var HEIGHT = 560;
var Unit = (function () {
    function Unit(x, y, width, height, spdX, spdY) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.spdX = spdX;
        this.spdY = spdY;
    }
    return Unit;
}());
var updateUnit = function (unit) {
    unit.x += unit.spdX;
    unit.y += unit.spdY;
    ctx.fillRect(unit.x, unit.y, unit.width, unit.height);
    if (unit.x > WIDTH || unit.x < 0) {
        unit.spdX = -unit.spdX;
    }
    if (unit.y > HEIGHT || unit.y < 0) {
        unit.spdY = -unit.spdY;
    }
};
var infantry = new Unit(10, 10, 60, 80, 5, 7);
var cavalry = new Unit(10, 20, 50, 60, 12, 20);
var update = function () {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    updateUnit(infantry);
    updateUnit(cavalry);
};
setInterval(update, 600);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map