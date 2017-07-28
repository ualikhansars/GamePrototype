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
    function Unit(name, x, y, width, height, spdX, spdY) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.spdX = spdX;
        this.spdY = spdY;
    }
    return Unit;
}());
var units = [];
var infantry = new Unit('Infantry', 0, 0, 100, 50, 5, 7);
units.push(infantry);
var cavalry = new Unit('Cavalry', 100, 80, 50, 60, 12, 20);
units.push(cavalry);
var chooseUnit = function (units, x, y) {
    for (var _i = 0, units_1 = units; _i < units_1.length; _i++) {
        var unit = units_1[_i];
        var unitX0 = unit.x;
        var unitY0 = unit.y;
        var unitX1 = unitX0 + unit.width;
        var unitY1 = unitY0 + unit.height;
        // check if coordinates is equal to unit position
        if (x >= unitX0 && x <= unitX1 && y >= unitY0 && y <= unitY1) {
            console.error(unit.name, 'was clicked');
        }
        else {
            console.log('No unit was clicked');
        }
    }
};
var setUnit = function (unit) {
    ctx.fillRect(unit.x, unit.y, unit.width, unit.height);
};
setUnit(infantry);
setUnit(cavalry);
// set onClickListener to canvas element
c.addEventListener('click', function (e) {
    var x = e.offsetX; // get X
    var y = e.offsetY; // get Y
    console.log('Position x', e.offsetX); // get X
    console.log('Position y', e.offsetY); // get Y
    chooseUnit(units, x, y);
});


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map