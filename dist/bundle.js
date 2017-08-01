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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
// import units from store
var unitStore_1 = __webpack_require__(1);
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
var setUnit = function (unit) {
    ctx.fillRect(unit.x, unit.y, unit.width, unit.height);
};
// create Unit and immediatly push it into units array
var createUnit = function (name, x, y, width, height, spdX, spdY) {
    var unit = new Unit(name, x, y, width, height, spdX, spdY);
    unitStore_1.units.push(unit);
    setUnit(unit);
    return unit;
};
var infantry = createUnit('Infantry', 0, 0, 100, 50, 5, 7);
var cavalry = createUnit('Cavalry', 100, 80, 50, 60, 12, 20);
var heavyInfantry = createUnit('heavyInfantry', 300, 180, 100, 120, 2, 2);
// check if units was clicked by left mouse button
// x - mouse position X
// y - mouse position Y
var chooseUnit = function (units, x, y) {
    var foundedUnit = null;
    for (var _i = 0, units_1 = units; _i < units_1.length; _i++) {
        var unit = units_1[_i];
        var unitX0 = unit.x;
        var unitY0 = unit.y;
        var unitX1 = unitX0 + unit.width;
        var unitY1 = unitY0 + unit.height;
        // check if coordinates is equal to unit position
        if (x >= unitX0 && x <= unitX1 && y >= unitY0 && y <= unitY1) {
            foundedUnit = unit;
            break;
        }
    }
    // if unit was found in units array
    // currentlyChosenUnit is equal to foundedUnit
    // else is unit is not founded, then
    // currentlyChosenUnit will be null
    unitStore_1.assignCurrentlyChosenUnit(foundedUnit);
    console.log('currentlyChosenUnit', unitStore_1.currentlyChosenUnit);
};
// change unit's moveToX, moveToY
var assignMoveToPosition = function (unit, x, y) {
    unit.moveToX = x;
    unit.moveToY = y;
    console.log(unit.name + ' is moving to : x:' + unit.moveToX + ' y:' + unit.moveToY);
};
// set onClickListener for left mouse event to canvas element
c.addEventListener('click', function (e) {
    var x = e.offsetX; // get X
    var y = e.offsetY; // get Y
    console.log('Position x', e.offsetX); // get X
    console.log('Position y', e.offsetY); // get Y
    chooseUnit(unitStore_1.units, x, y);
});
// set onClickListener for right mouse event
c.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    var x = e.offsetX; // get X
    var y = e.offsetY; // get Y
    if (unitStore_1.currentlyChosenUnit) {
        assignMoveToPosition(unitStore_1.currentlyChosenUnit, x, y); //assign unit's next x and y position
    }
});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.units = [];
exports.assignCurrentlyChosenUnit = function (unit) {
    // check unit
    if (unit) {
        exports.currentlyChosenUnit = unit;
    }
    else {
        exports.currentlyChosenUnit = null;
    }
};
exports.currentlyChosenUnit = null;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map