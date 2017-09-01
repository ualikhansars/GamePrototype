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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ctx; });
// global variables
const WIDTH = 1224;
/* unused harmony export WIDTH */

const HEIGHT = 768;
/* unused harmony export HEIGHT */

// create Canvas
let canvas = document.createElement('canvas');
canvas.id = "canvas";
canvas.width = WIDTH;
canvas.height = HEIGHT;
canvas.style.border = "1px solid";
document.body.appendChild(canvas);
// define 2d context
let ctx = canvas.getContext("2d");


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return currentlyChosenUnit; });
const units = [];
/* harmony export (immutable) */ __webpack_exports__["c"] = units;

let currentlyChosenUnit = null;
const assignCurrentlyChosenUnit = (unit) => {
    // check unit
    if (unit) {
        currentlyChosenUnit = unit;
    }
    else {
        currentlyChosenUnit = null;
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = assignCurrentlyChosenUnit;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_map__ = __webpack_require__(0);

const ctxSave = () => {
    __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].save();
};
/* harmony export (immutable) */ __webpack_exports__["c"] = ctxSave;

const ctxRestore = () => {
    __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].restore();
};
/* harmony export (immutable) */ __webpack_exports__["b"] = ctxRestore;

const ctxFillRect = (x, y, width, height) => {
    __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].fillRect(x, y, width, height);
};
/* unused harmony export ctxFillRect */

const ctxDrawImage = (img, x, y, width, height) => {
    __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].drawImage(img, x, y, width, height);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = ctxDrawImage;

const ctxTranslate = (centerX, centerY) => {
    __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].translate(centerX, centerY);
};
/* unused harmony export ctxTranslate */

const ctxRotate = (angle) => {
    __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].rotate(angle);
};
/* unused harmony export ctxRotate */

const ctxClearRect = (x, y, width, height) => {
    __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].clearRect(x, y, width, height);
};
/* unused harmony export ctxClearRect */

const ctxFillStyle = (color) => {
    __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].fillStyle = color;
};
/* unused harmony export ctxFillStyle */

const ctxTransform = (unit) => {
    ctxTranslate(unit.centerX, unit.centerY); // translate to rectangle center
    let angle = unit.destinationCanvasAngle * (Math.PI / 180);
    ctxRotate(angle);
    ctxTranslate(-unit.centerX, -unit.centerY); // translate to rectangle center
};
/* unused harmony export ctxTransform */

const ctxBeginPath = () => {
    __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].beginPath();
};
/* unused harmony export ctxBeginPath */

const ctxStrokeStyle = (color) => {
    __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].strokeStyle = color;
};
/* unused harmony export ctxStrokeStyle */

const ctxMoveTo = (x, y) => {
    __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].moveTo(x, y);
};
/* unused harmony export ctxMoveTo */

const ctxLineTo = (x, y) => {
    __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].lineTo(x, y);
};
/* unused harmony export ctxLineTo */

const ctxStroke = () => {
    __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].stroke();
};
/* unused harmony export ctxStroke */

const ctxIsPointInPath = (x, y, fillRull) => {
    return __WEBPACK_IMPORTED_MODULE_0__config_map__["b" /* ctx */].isPointInPath(x, y, fillRull);
};
/* unused harmony export ctxIsPointInPath */



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_map__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_unitsStore__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__units_unitPath__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__units_unitActions__ = __webpack_require__(6);




let infantry = Object(__WEBPACK_IMPORTED_MODULE_3__units_unitActions__["c" /* createUnit */])('Infantry', 200, 40, 100, 50, 3, undefined, 20);
console.log('infantry', infantry);
let cavalry = Object(__WEBPACK_IMPORTED_MODULE_3__units_unitActions__["c" /* createUnit */])('Cavalry', 100, 300, 50, 30, 5, undefined, 15);
let heavyInfantry = Object(__WEBPACK_IMPORTED_MODULE_3__units_unitActions__["c" /* createUnit */])('HeavyInfantry', 300, 180, 160, 120, 2, undefined, 30);
__WEBPACK_IMPORTED_MODULE_0__config_map__["a" /* canvas */].addEventListener('click', (e) => {
    console.error('Click');
    let x = e.offsetX; // get X
    let y = e.offsetY; // get Y
    console.log('Position x', e.offsetX); // get X
    console.log('Position y', e.offsetY); // get Y
    Object(__WEBPACK_IMPORTED_MODULE_3__units_unitActions__["b" /* chooseUnit */])(__WEBPACK_IMPORTED_MODULE_1__store_unitsStore__["c" /* units */], x, y);
});
// set onClickListener for right mouse event
__WEBPACK_IMPORTED_MODULE_0__config_map__["a" /* canvas */].addEventListener('contextmenu', (e) => {
    console.error('Right Mouse Click');
    e.preventDefault();
    let x = e.offsetX; // get X
    let y = e.offsetY; // get Y
    if (__WEBPACK_IMPORTED_MODULE_1__store_unitsStore__["b" /* currentlyChosenUnit */]) {
        Object(__WEBPACK_IMPORTED_MODULE_3__units_unitActions__["a" /* assignMoveToPosition */])(__WEBPACK_IMPORTED_MODULE_1__store_unitsStore__["b" /* currentlyChosenUnit */], x, y); //assign unit's next x and y position
        __WEBPACK_IMPORTED_MODULE_1__store_unitsStore__["b" /* currentlyChosenUnit */].assignAngle(); // assign angle to the unit
        //rotateAndMove(currentlyChosenUnit); // rotate unit
        //drawPath(currentlyChosenUnit);
        console.log('PATH:', Object(__WEBPACK_IMPORTED_MODULE_2__units_unitPath__["a" /* findPath */])(__WEBPACK_IMPORTED_MODULE_1__store_unitsStore__["b" /* currentlyChosenUnit */]));
        //bresenhamsLineAlgorithm(currentlyChosenUnit);
        // console.error('PATH:',findPath(currentlyChosenUnit));
        // console.log('UPDATED PATH:', filterPath(currentlyChosenUnit, findPath(currentlyChosenUnit)));
        // assignMoveToPosition(currentlyChosenUnit, x, y); //assign unit's next x and y position
        // currentlyChosenUnit.assignAngle(); // assign angle to the unit
        // smoothlyRotateUnit(currentlyChosenUnit); // rotate unit
        //rotateUnit(currentlyChosenUnit);
        // console.error('x:', currentlyChosenUnit.centerX, 'y:', currentlyChosenUnit.centerY, 'destX:', currentlyChosenUnit.moveToX, 'destY:', currentlyChosenUnit.moveToY);
        console.log('GAME: previousCanvasAngle', __WEBPACK_IMPORTED_MODULE_1__store_unitsStore__["b" /* currentlyChosenUnit */].previousCanvasAngle);
        console.error('GAME: desctinationCanvasAngle', __WEBPACK_IMPORTED_MODULE_1__store_unitsStore__["b" /* currentlyChosenUnit */].destinationCanvasAngle);
        //console.log('Unit:' ,currentlyChosenUnit.x, currentlyChosenUnit.y);
        //console.log('center:', currentlyChosenUnit.centerX, currentlyChosenUnit.centerY);
    }
});


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const findPath = (unit) => {
    // naiveLineDrawingAlgorithm
    // algorithm:
    //   dx = x2 - x1
    //   dy = y2 - y1
    //   for x from x1 to x2 {
    //    y = y1 + dy * (x - x1) / dx
    //    plot(x, y)
    // }
    let dx = unit.moveToX - unit.centerX;
    let dy = unit.moveToY - unit.centerY;
    let x1 = unit.centerX;
    let x2 = unit.moveToX;
    let y1 = unit.centerY;
    let y2 = unit.moveToY;
    let path = [];
    console.log('dx', dx);
    console.log('dy', dy);
    console.error('x1:', x1, 'x2:', x2);
    console.error('y1:', y1, 'y2:', y2);
    if (x1 <= x2) {
        console.log('x1 <= x2');
        if (Math.abs(dx) >= Math.abs(dy)) {
            console.log('dx > dy');
            if (y1 > y2) {
                console.log('y1 > y2');
                for (let x = x1; x <= x2; ++x) {
                    let y = Math.round(y1 + dy * (x - x1) / dx);
                    path.push({ x, y });
                }
            }
            if (y1 <= y2) {
                console.log('y1 <= y2');
                for (let x = x1; x <= x2; ++x) {
                    let y = Math.round(y1 + dy * (x - x1) / dx);
                    path.push({ x, y });
                }
            }
        }
        if (Math.abs(dx) < Math.abs(dy)) {
            console.log('dx < dy');
            if (y1 > y2) {
                console.log('y1 > y2'); // work
                for (let y = y1; y >= y2; --y) {
                    let x = Math.round(x1 + dx * (y - y1) / dy);
                    path.push({ x, y });
                }
            }
            if (y1 <= y2) {
                console.log('y1 <= y2');
                for (let y = y1; y <= y2; ++y) {
                    let x = Math.round(x1 + dx * (y - y1) / dy);
                    path.push({ x, y });
                    //console.log('x:', x, 'y:', y);
                }
            }
        }
    } // end if x1 < x2
    ///////////////////
    ///////////////////
    if (x1 > x2) {
        console.log('x1 > x2');
        if (Math.abs(dx) >= Math.abs(dy)) {
            console.log('dx >= dy');
            if (y1 > y2) {
                console.log('y1 > y2');
                for (let x = x1; x >= x2; --x) {
                    let y = Math.round(y1 + dy * (x - x1) / dx);
                    path.push({ x, y });
                }
            }
            if (y1 <= y2) {
                console.log('y1 <= y2');
                for (let x = x1; x >= x2; --x) {
                    let y = Math.round(y1 + dy * (x - x1) / dx);
                    path.push({ x, y });
                    // console.log('x:', x, 'y:', y);
                }
            }
        }
        if (Math.abs(dx) < Math.abs(dy)) {
            console.log('dy > dx');
            if (y1 > y2) {
                console.log('y1 > y2');
                for (let y = y1; y >= y2; --y) {
                    let x = Math.round(x1 + dx * (y - y1) / dy);
                    path.push({ x, y });
                }
            }
            console.log('y1 <= y2'); // not work
            if (y1 <= y2) {
                for (let y = y1; y <= y2; ++y) {
                    let x = Math.round(x1 + dx * (y - y1) / dy);
                    path.push({ x, y });
                }
            }
        }
    }
    return path;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = findPath;



/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return chooseUnit; });
/* unused harmony export setUnit */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createUnit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_unitsStore__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_ctx__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Unit__ = __webpack_require__(7);



// check if units was clicked by left mouse button
// x - mouse position X
// y - mouse position Y
let chooseUnit = (units, x, y) => {
    //console.error('chooseUnit');
    let foundedUnit = null;
    for (let unit of units) {
        let unitX0 = unit.x;
        let unitY0 = unit.y;
        let unitX1 = unitX0 + unit.width;
        let unitY1 = unitY0 + unit.height;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__store_unitsStore__["a" /* assignCurrentlyChosenUnit */])(foundedUnit);
    console.log('currentlyChosenUnit', __WEBPACK_IMPORTED_MODULE_0__store_unitsStore__["b" /* currentlyChosenUnit */]);
};
// change unit's moveToX, moveToY
const assignMoveToPosition = (unit, x, y) => {
    //console.error('assignMoveToPosition');
    unit.moveToX = x;
    unit.moveToY = y;
    console.log(unit.name + ' is moving to : x:' + unit.moveToX + ' y:' + unit.moveToY);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = assignMoveToPosition;

// draw Units in the canvas
let setUnit = (unit) => {
    //console.error('setUnit');
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_ctx__["c" /* ctxSave */])();
    let img = new Image();
    img.src = unit.imgPath;
    img.onload = () => {
        Object(__WEBPACK_IMPORTED_MODULE_1__utils_ctx__["a" /* ctxDrawImage */])(img, unit.x, unit.y, unit.width, unit.height);
    };
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_ctx__["b" /* ctxRestore */])();
};
// create Unit and immediatly push it into units array
let createUnit = (name, centerX, centerY, width, height, speed, imgPath = '../../img/unit.svg', rotationSpeed) => {
    //console.error('createUnit');
    let unit = new __WEBPACK_IMPORTED_MODULE_2__Unit__["a" /* default */](name, centerX, centerY, width, height, speed, imgPath, rotationSpeed);
    __WEBPACK_IMPORTED_MODULE_0__store_unitsStore__["c" /* units */].push(unit);
    setUnit(unit);
    return unit;
};


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__unitMath__ = __webpack_require__(8);

class Unit {
    constructor(name, centerX, centerY, width, height, speed, imgPath, rotationSpeed) {
        this.destinationCanvasAngle = 0;
        this.isRotating = false;
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
        this.imgPath = imgPath;
        this.rotationSpeed = rotationSpeed;
    }
    assignAngle() {
        this.previousCanvasAngle = this.destinationCanvasAngle;
        this.destinationCanvasAngle = Object(__WEBPACK_IMPORTED_MODULE_0__unitMath__["a" /* calcCanvasAngle */])(this.centerX, this.centerY, this.moveToX, this.moveToY);
        console.log('CLASS UNIT: new desctination has been assign, angle =', this.destinationCanvasAngle);
    }
    setAngleToRemove(newAngle) {
        let angleToRemove = this.makeAnglePositive(newAngle);
        this.angleToRemove = angleToRemove;
    }
    setDestinationCanvasAngle(newAngle) {
        let updatedAngle = this.makeAnglePositive(newAngle);
        this.destinationCanvasAngle = updatedAngle;
    }
    setPreviousCanvasAngle(newAngle) {
        let updatedAngle = this.makeAnglePositive(newAngle);
        this.previousCanvasAngle = updatedAngle;
    }
    setIsRotatingToTrue() {
        this.isRotating = true;
    }
    setIsRotatingToFalse() {
        this.isRotating = false;
    }
    setCurrentRotation(startAngle, finishAngle) {
        let updatedStartAngle = this.makeAnglePositive(startAngle);
        let updatedFinishAngle = this.makeAnglePositive(finishAngle);
    }
    makeAnglePositive(angle) {
        if (angle < 0) {
            return angle + 360;
        }
        else if (angle >= 0) {
            return angle;
        }
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Unit);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*

Standart
                C
                *
            *   *
        c *     *
        *       * a
      *         *
    *           *
A  ************** B
       b


Canvas rotation

        b
A  **************** B
    *             *
      *           *
        *         *
      c   *       * a
            *     *
              *   *
                * *
                  *
                  C

  a = descY - centerY
  b = descX - center X
*/
// get unit's position and destination position and return angle in radians between unit and destination
const calcDestinationAngle = (unitX, unitY, destX, destY) => {
    //console.error('calcDestinationAngle');
    let a = Math.abs(destY - unitY);
    let b = Math.abs(destX - unitX);
    let c = Math.sqrt(a * a + b * b);
    let angle;
    let quater = getQuater(unitX, unitY, destX, destY); // check quater
    if (quater === 1 || quater === 2)
        angle = a / c;
    else if (quater === 3 || quater === 4)
        angle = -(a / c);
    return angle;
};
/* unused harmony export calcDestinationAngle */

// get unit's position and destination position and return angle in radians between unit and destination
const calcDestinationAngleInDegrees = (unitX, unitY, destX, destY) => {
    //console.error('calcDestinationAngleInDegrees');
    let angle;
    let a = Math.abs(destY - unitY);
    let b = Math.abs(destX - unitX);
    let angleInRadian = Math.atan(a / b);
    // check quater of the circle
    let degree = angleInRadian * (180 / Math.PI); // convert radians into degree
    let quater = getQuater(unitX, unitY, destX, destY); // check quater
    if (quater === 1)
        angle = degree;
    if (quater === 2)
        angle = 90 + (90 - degree);
    else if (quater === 3)
        angle = 180 + degree;
    else if (quater === 4)
        angle = 270 + (90 - degree);
    return Math.round(angle);
};
/* unused harmony export calcDestinationAngleInDegrees */

const makeAnglePositive = (angle) => {
    //console.error('makeAnglePositive');
    if (angle < 0) {
        return angle + 360;
    }
    else if (angle >= 0) {
        return angle;
    }
};
/* unused harmony export makeAnglePositive */

// calculate rotate angle in canvas degrees
const calcCanvasAngle = (unitX, unitY, destX, destY) => {
    //console.error('calcCanvasAngle');
    let angle;
    let a = Math.abs(destY - unitY);
    let b = Math.abs(destX - unitX);
    let angleInRadian = Math.atan(a / b);
    // check quater of the circle
    let degree = angleInRadian * (180 / Math.PI); // convert radians into degree
    let quater = getQuater(unitX, unitY, destX, destY); // check quater
    if (quater === 1)
        angle = angle = 90 - degree; // I === I
    if (quater === 2)
        angle = angle = 270 + degree; // II == IV
    else if (quater === 3)
        angle = angle = 180 + (90 - degree); // III = III
    else if (quater === 4)
        angle = angle = 90 + degree; // IV = II
    return Math.round(angle);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = calcCanvasAngle;

const getQuater = (unitX, unitY, destX, destY) => {
    //console.error('getQuater');
    let quater;
    if (destX >= unitX && destY < unitY) {
        quater = 1;
    }
    else if (destX < unitX && destY <= unitY) {
        quater = 2;
    }
    else if (destX <= unitX && destY > unitY) {
        quater = 3;
    }
    else if (destX > unitX && destY >= unitY) {
        quater = 4;
    }
    return quater;
};
/* unused harmony export getQuater */

const getCanvasAngleQuater = (canvasAngle) => {
    //console.error('getCanvasAngleQuater');
    if (canvasAngle >= 0 && canvasAngle < 90)
        return 1;
    else if (canvasAngle >= 90 && canvasAngle < 180)
        return 4;
    else if (canvasAngle >= 180 && canvasAngle < 270)
        return 3;
    else if (canvasAngle >= 270 && canvasAngle < 360)
        return 2;
};
/* unused harmony export getCanvasAngleQuater */

// calculate path in both directions
// and decide in what direction unit has to rotate
// return startAngle, finishAngle, rotationDirection
const chooseRotationDirection = (initialStartAngle, initialFinishAngle) => {
    //console.error('chooseRotationDirection');
    let startQuater, finishQuater;
    let startAngle, finishAngle, rotationDirection;
    let positiveStartAngle, positiveFinishAngle;
    let negativeStartAngle, negativeFinishAngle;
    positiveStartAngle = initialStartAngle;
    positiveFinishAngle = initialFinishAngle;
    if (positiveStartAngle === 0) {
        negativeStartAngle = 0; // use 0 instead of 360
    }
    else {
        negativeStartAngle = positiveStartAngle - 360;
    }
    if (positiveFinishAngle === 0) {
        negativeFinishAngle = 0;
    }
    else {
        negativeFinishAngle = positiveFinishAngle - 360;
    }
    startQuater = getCanvasAngleQuater(positiveStartAngle);
    finishQuater = getCanvasAngleQuater(positiveFinishAngle);
    let positivePath, negativePath;
    if (startQuater === 2 || startQuater === 3) {
        negativePath = Math.abs(negativeStartAngle) + Math.abs(positiveFinishAngle);
    }
    else {
        negativePath = Math.abs(positiveStartAngle) + Math.abs(negativeFinishAngle);
    }
    positivePath = Math.abs(positiveFinishAngle - positiveStartAngle);
    if (positivePath <= negativePath) {
        startAngle = positiveStartAngle;
        finishAngle = positiveFinishAngle;
        if (positiveStartAngle > positiveFinishAngle)
            rotationDirection = -1;
        if (positiveStartAngle < positiveFinishAngle)
            rotationDirection = 1;
    }
    else {
        if (startQuater === 2 || startQuater === 3) {
            startAngle = negativeStartAngle;
            finishAngle = positiveFinishAngle;
            rotationDirection = 1;
        }
        else {
            startAngle = positiveStartAngle;
            finishAngle = negativeFinishAngle;
            rotationDirection = -1;
        }
    }
    return {
        startAngle,
        finishAngle,
        rotationDirection
    };
};
/* unused harmony export chooseRotationDirection */



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map