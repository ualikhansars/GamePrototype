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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
// global variables
exports.WIDTH = 1224;
exports.HEIGHT = 768;
// create Canvas
exports.canvas = document.createElement('canvas');
exports.canvas.id = "canvas";
exports.canvas.width = exports.WIDTH;
exports.canvas.height = exports.HEIGHT;
exports.canvas.style.border = "1px solid";
document.body.appendChild(exports.canvas);
// define 2d context
exports.ctx = exports.canvas.getContext("2d");


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.units = [];
exports.currentlyChosenUnit = null;
exports.assignCurrentlyChosenUnit = function (unit) {
    // check unit
    if (unit) {
        exports.currentlyChosenUnit = unit;
    }
    else {
        exports.currentlyChosenUnit = null;
    }
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var map_1 = __webpack_require__(0);
var unitsStore_1 = __webpack_require__(1);
var unitActions_1 = __webpack_require__(3);
var infantry = unitActions_1.createUnit('Infantry', 200, 40, 100, 50, 3);
console.log('infantry', infantry);
var cavalry = unitActions_1.createUnit('Cavalry', 100, 80, 50, 60, 5);
var heavyInfantry = unitActions_1.createUnit('HeavyInfantry', 300, 180, 100, 120, 2);
map_1.canvas.addEventListener('click', function (e) {
    var x = e.offsetX; // get X
    var y = e.offsetY; // get Y
    console.log('Position x', e.offsetX); // get X
    console.log('Position y', e.offsetY); // get Y
    unitActions_1.chooseUnit(unitsStore_1.units, x, y);
});
// set onClickListener for right mouse event
map_1.canvas.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    var x = e.offsetX; // get X
    var y = e.offsetY; // get Y
    if (unitsStore_1.currentlyChosenUnit) {
        unitActions_1.assignMoveToPosition(unitsStore_1.currentlyChosenUnit, x, y); //assign unit's next x and y position
        unitsStore_1.currentlyChosenUnit.assignAngle();
        console.error('Unit angle in degree :', unitsStore_1.currentlyChosenUnit.angleInDegree);
        console.error('Unit angle in radians :', unitsStore_1.currentlyChosenUnit.angleInRadian);
    }
});
setInterval(unitActions_1.unitsHaveToMove, 300);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var unitsStore_1 = __webpack_require__(1);
var map_1 = __webpack_require__(0);
var Unit_1 = __webpack_require__(4);
// check if units was clicked by left mouse button
// x - mouse position X
// y - mouse position Y
exports.chooseUnit = function (units, x, y) {
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
    unitsStore_1.assignCurrentlyChosenUnit(foundedUnit);
    console.log('currentlyChosenUnit', unitsStore_1.currentlyChosenUnit);
};
// change unit's moveToX, moveToY
exports.assignMoveToPosition = function (unit, x, y) {
    unit.moveToX = x;
    unit.moveToY = y;
    console.log(unit.name + ' is moving to : x:' + unit.moveToX + ' y:' + unit.moveToY);
};
// draw Units in the canvas
exports.setUnit = function (unit) {
    map_1.ctx.save();
    //ctx.translate(unit.x + unit.width * 0.5, unit.y + unit.height * 0.5); // translate to rectangle center
    //ctx.rotate(unit.angle);
    map_1.ctx.fillRect(unit.x, unit.y, unit.width, unit.height);
    map_1.ctx.restore();
};
// create Unit and immediatly push it into units array
exports.createUnit = function (name, centerX, centerY, width, height, speed) {
    var unit = new Unit_1["default"](name, centerX, centerY, width, height, speed);
    unitsStore_1.units.push(unit);
    exports.setUnit(unit);
    return unit;
};
// change unit's position until it approaches to moveToPosition
exports.unitsHaveToMove = function () {
    for (var _i = 0, units_2 = unitsStore_1.units; _i < units_2.length; _i++) {
        var unit = units_2[_i];
        if (unit.centerX !== unit.moveToX || unit.centerY !== unit.moveToY) {
            if (unit.centerX < unit.moveToX && unit.centerY < unit.moveToY) {
                unit.moveToPosition(1, 1);
            }
            else if (unit.centerX > unit.moveToX && unit.centerY > unit.moveToY) {
                unit.moveToPosition(-1, -1);
            }
            else if (unit.centerX < unit.moveToX && unit.centerY > unit.moveToY) {
                unit.moveToPosition(1, -1);
            }
            else if (unit.centerX > unit.moveToX && unit.centerY < unit.moveToY) {
                unit.moveToPosition(-1, 1);
            }
        }
        exports.setUnit(unit);
    }
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var map_1 = __webpack_require__(0);
var unitMath_1 = __webpack_require__(5);
var Unit = (function () {
    function Unit(name, centerX, centerY, width, height, speed) {
        this.name = name;
        this.centerX = centerX;
        this.centerY = centerY;
        this.width = width;
        this.height = height;
        this.x = this.centerX - (this.width / 2);
        this.y = this.centerY - (this.height / 2);
        this.speed = speed;
        this.moveToX = centerX;
        this.moveToY = centerY;
    }
    Unit.prototype.update = function (speedX, speedY) {
        map_1.ctx.save();
        // ctx.translate(this.x + this.width * 0.5, this.y + this.height * 0.5); // translate to rectangle center
        // ctx.rotate(this.angle);
        this.centerX += speedX;
        this.centerY += speedY;
        this.x = this.centerX - (this.width / 2); // change x and y every time when centerX and centerY is changed
        this.y = this.centerY - (this.height / 2);
        map_1.ctx.fillRect(this.x, this.y, this.width, this.height);
        map_1.ctx.restore();
    };
    Unit.prototype.assignAngle = function () {
        this.angleInRadian = unitMath_1.calcDestinationAngle(this.centerX, this.centerY, this.moveToX, this.moveToY);
        this.angleInDegree = unitMath_1.calcDestinationAngleInDegrees(this.centerX, this.centerY, this.moveToX, this.moveToY);
    };
    Unit.prototype.moveToPosition = function (speedX, speedY) {
        if (this.centerX !== this.moveToX || this.centerY !== this.moveToY) {
            map_1.ctx.clearRect(this.x, this.y, this.width, this.height);
            //ctx.clearRect(0, 0, 1224, 768);
            this.update(speedX, speedY);
        }
        console.log(this.name + ' is on position');
    };
    return Unit;
}());
exports["default"] = Unit;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
                C
                *
            *   *
        c *     *
        *       * b
      *         *
    *           *
A  ************** B
       a
*/
exports.__esModule = true;
// get unit's position and destination position and return angle in radians between unit and destination
exports.calcDestinationAngle = function (unitX, unitY, destX, destY) {
    var a = Math.abs(destX - unitX);
    var b = Math.abs(destY - unitY);
    var c = Math.sqrt(a * a + b * b);
    return Math.sin(a / c);
};
// get unit's position and destination position and return angle in radians between unit and destination
exports.calcDestinationAngleInDegrees = function (unitX, unitY, destX, destY) {
    var a = Math.abs(destX - unitX);
    var b = Math.abs(destY - unitY);
    var c = Math.sqrt(a * a + b * b);
    var angle = Math.sin(a / c);
    return angle * (180 / Math.PI);
};


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map